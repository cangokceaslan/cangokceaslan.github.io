/*********************************************************************************

	Template Name: Okomo - Creative Portfolio Template  
	Description: Okomo is a creative theme with unique style. You can build your perfect & professional agency work with OKOMO. So lets do something new if you love to build attractive & effective creative portfolio website.
	Version: 1.1

	Note: This is active js. Plugins activation code here.

**********************************************************************************/


/*===============================================================================
			[ INDEX ]
=================================================================================

	Fake Loader
	About Me Slider Active
	Portfolo Gallery Slider Active
	Testimonial Slider Active
	Brand Logos Slider Active
	Youtube Video Player
	Popup Video Player
	Blogs Filter Active
	Portfolio Gallery Popup
	Single Portfolio Popup


=================================================================================
			[ END INDEX ]
================================================================================*/

(function ($) {
	'use strict';


	/*============ Fake Loader ============*/
	$('.fakeloader').fakeLoader({
		timeToHide: 1200,
		bgColor: '#175ef7',
		spinner: 'spinner4'
	});



	/*============ About Me Slider Active ==============*/
	$('.about-me-content-slider-active').slick({
		autoplay: false,
		arrows: true,
		prevArrow: '<span class="cr-navigation cr-navigation-prev"><i class="ti-arrow-left"></i>Prev</span>',
		nextArrow: '<span class="cr-navigation cr-navigation-next">Next<i class="ti-arrow-right"></i></span>',
		fade: true,
		adaptiveHeight: true,
		dots: true,
		appendDots: $('.about-me-content-tab')
	});




	/*============ Portfolo Gallery Slider Active ==============*/
	$('.portfolio-gallery').slick({
		autoplay: true,
		arrows: true,
		prevArrow: '<span class="cr-navigation cr-navigation-prev"><i class="ti-arrow-left"></i>Prev</span>',
		nextArrow: '<span class="cr-navigation cr-navigation-next">Next<i class="ti-arrow-right"></i></span>',
		fade: true,
		adaptiveHeight: true,
		infinite: true,
	});





	/*============ Testimonial Slider Active ==============*/
	$('.testimonial-wrap').slick({
		autoplay: true,
		arrows: true,
		prevArrow: '<span class="cr-navigation cr-navigation-prev"><i class="ti-arrow-left"></i>Prev</span>',
		nextArrow: '<span class="cr-navigation cr-navigation-next">Next<i class="ti-arrow-right"></i></span>',
		fade: true,
		adaptiveHeight: true,
		infinite: true,
	});




	/*============ Brand Logos Slider Active ==============*/
	$('.brand-logos').slick({
		autoplay: true,
		arrows: false,
		adaptiveHeight: true,
		infinite: true,
		slidesToShow: 5,
		centerMode: true,
		centerPadding: 0,
		responsive: [{
			breakpoint: 991,
			settings: {
				slidesToShow: 3
			}
		},
		{
			breakpoint: 576,
			settings: {
				slidesToShow: 1
			}
		}
	]
	});


	/*============ Brand Logos Slider Active ==============*/
	$('.team-member-slider-active').slick({
		autoplay: true,
		arrows: false,
		adaptiveHeight: true,
		infinite: false,
		slidesToShow: 6,
		centerPadding: 0,
		centerMode: false,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 3,
				centerMode: true,
				infinite: true,
			}
		},
		{
			breakpoint: 991,
			settings: {
				slidesToShow: 1,
				centerMode: true,
				infinite: true,
			}
		}
	]
	});



	/*============ Youtube Video Player ==============*/
	if ($('.youtube-video-player').length) {
		var player = new Plyr('.youtube-video-player');
	}




	/*============ Popup Video Player ==============*/
	$('.video-play-trigger').modalVideo();






	/*============ Blogs Filter Active ==============*/
	$('.blog-items-grid').imagesLoaded( function() {

		var $grid = $('.blog-items-grid').isotope({
			itemSelector: '.blog-item-wrap',
			layoutMode: 'fitRows'
		});
 
		var $buttonGroup = $('.blogs-area-filters').on( 'click', 'button', function() {
			var filterValue = $(this).attr('data-filter');
			$grid.isotope({ filter: filterValue });
			$buttonGroup.find('.is-checked').removeClass('is-checked');
			$(this).addClass('is-checked');
		}); 
 
	});


	/*============ Portfolio Gallery Popup ==============*/
	$('.portfolio-gallery-thumb a').magnificPopup({
		type: 'image',
		mainClass: 'mfp-with-zoom', // this class is for CSS animation below

		zoom: {
			enabled: true,
			duration: 300,
			easing: 'ease-in-out',
			opener: function (openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},

		gallery: {
			enabled: true
		}
	});




	/*============ Single Portfolio Popup ==============*/
	$('.single-portfolio-thumb a').magnificPopup({
		type: 'image',
		mainClass: 'mfp-with-zoom', // this class is for CSS animation below

		zoom: {
			enabled: true,
			duration: 300,
			opener: function (openerElement) {
				return openerElement.is('img') ? openerElement : openerElement.find('img');
			}
		},

		gallery: {
			enabled: true
		}
	});



})(jQuery);

