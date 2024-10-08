FROM php:8.3-apache-bookworm AS php

# 1. development packages
RUN apt-get update && \
    apt-get install -y \
    git \
    zip \
    curl \
    sudo \
    unzip \
    libicu-dev \
    libbz2-dev \
    libreadline-dev \
    g++ \
    libzip-dev \
    libpng-dev \
    libjpeg-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libmcrypt-dev \
    libgd-dev \
    jpegoptim optipng pngquant gifsicle \
    libonig-dev \
    libxml2-dev && \
    apt-get clean && \
    rm -rf /var/lib/apt/lists/*

# 2. apache configs + document root
ENV APACHE_DOCUMENT_ROOT=/var/www/html/public
RUN sed -ri -e 's!/var/www/html!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/sites-available/*.conf && \
    sed -ri -e 's!/var/www/!${APACHE_DOCUMENT_ROOT}!g' /etc/apache2/apache2.conf /etc/apache2/conf-available/*.conf

# 3. mod_rewrite for URL rewrite and mod_headers for .htaccess extra headers like Access-Control-Allow-Origin-
RUN a2enmod rewrite headers

# 4. start with base php config, then add extensions
RUN mv "$PHP_INI_DIR/php.ini-development" "$PHP_INI_DIR/php.ini"
COPY docker/php/laravel.ini /usr/local/etc/php/conf.d/laravel.ini

RUN docker-php-ext-install \
    bz2 \
    intl \
    iconv \
    bcmath \
    opcache \
    calendar \
    exif \
    # mbstring \
    pdo_mysql \
    zip && \
    docker-php-ext-configure gd --with-freetype --with-jpeg && \
    docker-php-ext-install -j$(nproc) gd && \
    rm -rf /tmp/*

# 5. install nvm, node, and npm
ENV NVM_DIR /usr/local/nvm
RUN mkdir -p $NVM_DIR && \
    curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.0/install.sh | bash && \
    . $NVM_DIR/nvm.sh && \
    nvm install 20.16 && \
    nvm use 20.16 && \
    nvm alias default 20.16 && \
    ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/node" /usr/local/bin/node && \
    ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/npm" /usr/local/bin/npm && \
    ln -s "$NVM_DIR/versions/node/$(nvm version)/bin/npx" /usr/local/bin/npx

# 5. composer
COPY --from=composer:2.7 /usr/bin/composer /usr/bin/composer

# 6. we need a user with the same UID/GID with host user
# so when we execute CLI commands, all the host file's ownership remains intact
# otherwise command from inside container will create root-owned files and directories
ARG uid
RUN useradd -G www-data,root -u $uid -d /home/devuser devuser && \
    mkdir -p /home/devuser/.composer && \
    chown -R devuser:devuser /home/devuser

USER devuser

CMD \
    npm ci -d && npm run build && \
    composer install --prefer-dist --no-progress --no-suggest && \
    composer clear-cache && \
    rm public/storage && \
    php artisan storage:link && \
    apache2-foreground
