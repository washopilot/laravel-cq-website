<x-app-layout>
    <x-header />
    <x-slider />
    <!-- Content
  ============================================= -->
    <section id="content">
        <div class="content-wrap py-0">

            <x-section-why />

            <x-portfolio />

            <x-divider />

            <x-visor />

            {{-- <x-contact /> --}}
            <div id="section-contact">
                <livewire:contact />
            </div>

        </div>
    </section><!-- #content end -->

    <x-footer />
</x-app-layout>
