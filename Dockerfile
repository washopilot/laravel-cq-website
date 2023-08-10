FROM php:8.1.20-fpm-alpine3.17 AS php
# persistent / runtime deps
RUN apk add --no-cache \
	acl \
	fcgi \
	file \
	gettext \
	git \
	ttf-freefont \
	fontconfig \
	dbus \
	freetype-dev \
	libjpeg-turbo-dev \
	libpng-dev

RUN set -eux; \
	apk add --no-cache --virtual .build-deps \
	$PHPIZE_DEPS \
	icu-dev \
	libzip-dev \
	zlib-dev \
	oniguruma-dev \
	; \
	\
	docker-php-ext-configure zip; \
	docker-php-ext-configure gd --with-freetype --with-jpeg ;\
	docker-php-ext-install -j$(nproc) \
	intl \
	pdo_mysql \
	zip \
	gd \
	exif \
	pdo \
	# iconv \
	pcntl \
	mbstring \
	fileinfo \
	posix \
	; \
	docker-php-ext-enable \
	opcache \
	; \
	runDeps="$( \
	scanelf --needed --nobanner --format '%n#p' --recursive /usr/local/lib/php/extensions \
	| tr ',' '\n' \
	| sort -u \
	| awk 'system("[ -e /usr/local/lib/" $1 " ]") == 0 { next } { print "so:" $1 }' \
	)"; \
	apk add --no-cache --virtual .api-phpexts-rundeps $runDeps; \
	\
	apk del .build-deps

COPY --from=composer:2.5.8 /usr/bin/composer /usr/bin/composer

RUN ln -s $PHP_INI_DIR/php.ini-production $PHP_INI_DIR/php.ini	
COPY docker/php/laravel.ini /usr/local/etc/php/conf.d/laravel.ini

# RUN set -eux; \
# 	{ \
# 		echo '[www]'; \
# 		echo 'ping.path = /ping'; \
# 	} | tee /usr/local/etc/php-fpm.d/docker-healthcheck.conf

ENV COMPOSER_ALLOW_SUPERUSER=1
ENV PATH="${PATH}:/root/.composer/vendor/bin"

WORKDIR /var/www/html
COPY composer.json composer.lock ./
# RUN set -eux; \
# 	composer install --prefer-dist --no-dev --no-scripts --no-progress --no-suggest; \
# 	composer clear-cache

CMD \
	set -eux; \
	composer install --prefer-dist --no-scripts --no-progress --no-suggest; \
	composer clear-cache; \
	php-fpm;

FROM nginx:alpine3.17 AS nginx
COPY docker/nginx/default.conf /etc/nginx/conf.d
