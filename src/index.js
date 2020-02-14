import './scss/style.scss';
import 'bootstrap';
import jQuery from 'jquery';
import './ekko-lightbox';
import './slick';

jQuery('#year').text(new Date().getFullYear());

// index.html
jQuery('.carousel').carousel({
    interval: 6000,
    pause: 'hover'
});

jQuery(function() {
    jQuery('.video').click(function() {
        const theModal = jQuery(this).data('target');
        const videoSrc = jQuery(this).data('video');
        const videoSrcAuto = `${videoSrc}?modestbranding=1&rel=0&controls=0&showinfo=0&html5=1&autoplay=1`;
        jQuery(`${theModal} iframe`).attr('src', videoSrcAuto);
        jQuery(`${theModal} button.close`).click(function() {
            jQuery(`${theModal} iframe`).attr('src', videoSrc);
        });
    });
});

jQuery(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    jQuery(this).ekkoLightbox();
});

// about.html
jQuery('.slider').slick({
    infinite: true,
    slideToShow: 1,
    slideToScroll: 1
});

