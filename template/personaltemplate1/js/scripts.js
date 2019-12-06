/*********************************************************************************

    Template Name: Okomo - Creative Portfolio Template  
	Description: Okomo is a creative theme with unique style. You can build your perfect & professional agency work with OKOMO. So lets do something new if you love to build attractive & effective creative portfolio website.
	Version: 1.1

    Note: This is scripts js. All custom scripts here.

**********************************************************************************/

/*===============================================================================
			[ INDEX ]
=================================================================================

    Full Screen Menu
    About Me Menu
    Imagemenu
    Imagemenu 2
    Portfolio Loadmore
    Blog Share Toggle
    Team Member Content
    Full Screen Menu Dynamic
    Progress Effect

=================================================================================
			[ END INDEX ]
================================================================================*/

(function ($) {
    'use strict';


    /*============ Full Screen Menu =============*/
    function fullscreenMenu() {
        $('.imgmenu').each(function () {
            $(this).on('mouseover', function () {
                $(this).css('width', '34%').siblings('.imgmenu').css('width', '22%');
            });
            $(this).on('mouseout', function () {
                $(this).css('width', '25%').siblings('.imgmenu').css('width', '25%');
            });
        });
    }

    if( $(window).innerWidth() > 1199 ){
        fullscreenMenu();
    }





    /*============ About Me Menu =============*/
    function aboutMeMenu() {
        var titleArr = [];
        $('.about-me-block').each(function (index) {
            var titlelist = $(this).data('title');
            titleArr.push(titlelist);
        });

        $('.about-me-content-tab ul li').each(function (index) {
            $(this).html(titleArr[index]);
        });
    }
    aboutMeMenu();




    

    /*============ Imagemenu =============*/
    function imageWrapMenu() {

        if ($('.imgmenu').length) {
            $('.imgmenu').parents('html').css('overflow-y', 'hidden');
        }

        $('.imgmenu .imgmenu-content').removeAttr('href');

        $('.imgmenu .imgmenu-content').on('click', function (e) {
            var imgMenuTitle = $(this).data('hashlink-trigger');

            switch (imgMenuTitle) {
                case 'about-me-area':
                    $('#about-me-area').addClass('is-active');
                    $('#portfolios-area').removeClass('is-active');
                    $('#blogs-area').removeClass('is-active');
                    $('#contact-area').removeClass('is-active');
                    break;

                case 'portfolios-area':
                    $('#portfolios-area').addClass('is-active');
                    $('#about-me-area').removeClass('is-active');
                    $('#blogs-area').removeClass('is-active');
                    $('#contact-area').removeClass('is-active');
                    break;

                case 'blogs-area':
                    $('#blogs-area').addClass('is-active');
                    $('#about-me-area').removeClass('is-active');
                    $('#portfolios-area').removeClass('is-active');
                    $('#contact-area').removeClass('is-active');
                    break;

                case 'contact-area':
                    $('#contact-area').addClass('is-active');
                    $('#about-me-area').removeClass('is-active');
                    $('#portfolios-area').removeClass('is-active');
                    $('#blogs-area').removeClass('is-active');
                    break;

                default:
                    $('#contact-area').removeClass('is-active');
                    $('#about-me-area').removeClass('is-active');
                    $('#portfolios-area').removeClass('is-active');
                    $('#blogs-area').removeClass('is-active');
                    break;
            }

        });

        $('.back-to-root-button').on('click', function () {
            $(this).parents('.imgmenu-single-area').removeClass('is-active');
        });

    }
    imageWrapMenu();






    /*============ Imagemenu 2 =============*/
    function imageWrapMenu2() {

        if ($('.imgmenu2').length) {
            $('.imgmenu2').parents('html').css('overflow-y', 'hidden');
        }

        $('.imgmenu2').removeAttr('href');

        $('.imgmenu2').on('click', function () {
            var imgMenuTitle = $(this).data('hashlink-trigger');

            switch (imgMenuTitle) {

                case 'about-us-area':
                    $('#about-us-area').addClass('is-active');
                    $('#about-me-area').removeClass('is-active');
                    $('#portfolios-area').removeClass('is-active');
                    $('#blogs-area').removeClass('is-active');
                    $('#contact-area').removeClass('is-active');
                    break;

                case 'about-me-area':
                    $('#about-me-area').addClass('is-active');
                    $('#about-us-area').removeClass('is-active');
                    $('#portfolios-area').removeClass('is-active');
                    $('#blogs-area').removeClass('is-active');
                    $('#contact-area').removeClass('is-active');
                    break;

                case 'portfolios-area':
                    $('#portfolios-area').addClass('is-active');
                    $('#about-me-area').removeClass('is-active');
                    $('#about-us-area').removeClass('is-active');
                    $('#blogs-area').removeClass('is-active');
                    $('#contact-area').removeClass('is-active');
                    break;

                case 'blogs-area':
                    $('#blogs-area').addClass('is-active');
                    $('#about-me-area').removeClass('is-active');
                    $('#about-us-area').removeClass('is-active');
                    $('#portfolios-area').removeClass('is-active');
                    $('#contact-area').removeClass('is-active');
                    break;

                case 'contact-area':
                    $('#contact-area').addClass('is-active');
                    $('#about-me-area').removeClass('is-active');
                    $('#about-us-area').removeClass('is-active');
                    $('#portfolios-area').removeClass('is-active');
                    $('#blogs-area').removeClass('is-active');
                    break;

                default:
                    $('#contact-area').removeClass('is-active');
                    $('#about-me-area').removeClass('is-active');
                    $('#about-us-area').removeClass('is-active');
                    $('#portfolios-area').removeClass('is-active');
                    $('#blogs-area').removeClass('is-active');
                    break;
                    
            }
        });

        $('.back-to-root-button').on('click', function () {
            $(this).parents('.imgmenu-single-area').removeClass('is-active');
        });

    }
    imageWrapMenu2();






    /*============ Portfolio Loadmore =============*/
    function portfolioLoadMore() {

        var portfolioGrid = $('.portfolios');
        var portfolioSingleItem = '.single-portfolio';

        var portfolioInitialItems = portfolioGrid.data('portfolio-show');
        var portfolioNextItems = portfolioGrid.data('portfolio-load');
        var portfolioLoadMoreBtn = $('.portfolio-load-more');

        /*-- Function that Show items when page is loaded --*/
        function portfolioShowNextItems(portfolioPagination) {
            var portfolioItemsMax = $('.single-portfolio.hidden').length;
            var portfoliotemsCount = 0;

            $('.single-portfolio.hidden').each(function () {
                if (portfoliotemsCount < portfolioPagination) {
                    $(this).removeClass('hidden');
                    portfoliotemsCount++;
                }
            });

            if (portfoliotemsCount >= portfolioItemsMax) {
                portfolioLoadMoreBtn.hide();
            }

        }

        /*-- Function that hides items when page is loaded --*/
        function portfolioHideItems(portfolioPagination) {
            var portfolioItemsMax = $(portfolioSingleItem).length;
            var portfoliotemsCount = 0;

            $(portfolioSingleItem).each(function () {
                if (portfoliotemsCount >= portfolioPagination) {
                    $(this).addClass('hidden');
                }
                portfoliotemsCount++;
            });

            if (portfoliotemsCount < portfolioItemsMax || portfolioInitialItems >= portfolioItemsMax) {
                portfolioLoadMoreBtn.hide();
            }

        }

        /*-- Function that Load items when Button is Click --*/
        portfolioLoadMoreBtn.on('click', function (e) {
            portfolioShowNextItems(portfolioNextItems);
        });

        portfolioHideItems(portfolioInitialItems);

    }
    portfolioLoadMore();






    /*============ Blog Share Toggle =============*/
    function blogShareToggle(){
        var trigger = $('.blog-item-share-toggle');
        var container = $('.blog-item-social-links');

        trigger.on('click', function(){
            $(this).toggleClass('is-active');
            $(this).parent().find(container).toggleClass('is-visible');
        });
    }
    blogShareToggle();





    /*============ Team Member Content =============*/
    function teamMemberContent(){
        $('.team-member').on('mouseover', function(){
            $(this).addClass('is-active').siblings().removeClass('is-active');
        });
    }
    teamMemberContent();
    





    /*============ Full Screen Menu Dynamic =============*/
    function fullScreenMenuDynamic(){
        $('.fullscreen-menu-trigger').on('click', function(){
            $('.fullscreen-header').toggleClass('is-active');
        });
        
        $('.fsmenu ul li a').on('click', function (e) {
            e.preventDefault();
            var imgMenuTitle = $(this).data('hashlink-trigger');

            switch (imgMenuTitle) {
                case 'about-me-area':
                    $('#about-me-area').addClass('is-active');
                    $('#about-us-area').removeClass('is-active');
                    $('#portfolios-area').removeClass('is-active');
                    $('#blogs-area').removeClass('is-active');
                    $('#contact-area').removeClass('is-active');
                    break;

                case 'about-us-area':
                    $('#about-us-area').addClass('is-active');
                    $('#about-me-area').removeClass('is-active');
                    $('#portfolios-area').removeClass('is-active');
                    $('#blogs-area').removeClass('is-active');
                    $('#contact-area').removeClass('is-active');
                    break;

                case 'portfolios-area':
                    $('#portfolios-area').addClass('is-active');
                    $('#about-me-area').removeClass('is-active');
                    $('#about-us-area').removeClass('is-active');
                    $('#blogs-area').removeClass('is-active');
                    $('#contact-area').removeClass('is-active');
                    break;

                case 'blogs-area':
                    $('#blogs-area').addClass('is-active');
                    $('#about-me-area').removeClass('is-active');
                    $('#about-us-area').removeClass('is-active');
                    $('#portfolios-area').removeClass('is-active');
                    $('#contact-area').removeClass('is-active');
                    break;

                case 'contact-area':
                    $('#contact-area').addClass('is-active');
                    $('#about-me-area').removeClass('is-active');
                    $('#about-us-area').removeClass('is-active');
                    $('#portfolios-area').removeClass('is-active');
                    $('#blogs-area').removeClass('is-active');
                    break;

                default:
                    $('#contact-area').removeClass('is-active');
                    $('#about-me-area').removeClass('is-active');
                    $('#about-us-area').removeClass('is-active');
                    $('#portfolios-area').removeClass('is-active');
                    $('#blogs-area').removeClass('is-active');
                    break;
            }

        });
        

        $('.back-to-root-button').on('click', function () {
            $('.fullscreen-header').removeClass('is-active');
        });
    }
    fullScreenMenuDynamic();





    /*============ Progress Effect =============*/
    $('.imgmenu-single-area').on('scroll', function(){

        $('.progress-bar').each(function(){

            var progressBarPos = $('.progress-bar').offset().top;
            var winHeight = $(window).height();
            
            if(progressBarPos < (winHeight - (winHeight / 4) ) ){
                $('.progress-bar').addClass('slideInLeft');
            }

        });

    });



    /*============ Back to Top =============*/
    function scrollToTop() {
        
        $('<button class="back-to-top-button"><i class="ti ti-angle-up"></i></button>').appendTo('.imgmenu-single-area');
        var trigger = $('.back-to-top-button');
        var wrapper = $('.imgmenu-single-area');

        function scrollToTopAction(){

            trigger.on('click', function(){
                var findId = $(this).parent('.imgmenu-single-area').attr('id');
                wrapper.animate({
                    scrollTop: $('#' + findId).offset().top
                }, 600);
            });

        }
        scrollToTopAction();

        trigger.removeClass('is-visible');

        $('.imgmenu-single-area').each(function(){

            $(this).on('scroll', function(){
                
                var windowHeight = $(window).height();
                
                if( $(this).scrollTop() > windowHeight ){
                    trigger.addClass('is-visible');
                } else {
                    trigger.removeClass('is-visible');
                }
            
            });
            
        });
    
    }
    scrollToTop();



})(jQuery);