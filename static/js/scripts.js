(function ($) {
    "use strict";
     /*********************************
     * Table of Context
     * *******************************/
    
    /*********************************
    /* Preloader Navbar
    *********************************/
    setTimeout(function() {
        $('.preloader__wrapper').addClass('loaded-active');
        
    }, 500);
    
    /*********************************
    /* Sticky Navbar
    *********************************/
    $(window).scroll(function () {
        var scrolling = $(this).scrollTop();
        var stikey = $(".header-sticky");

        if (scrolling >= 50) {
            $(stikey).addClass("nav-bg");
        } else {
            $(stikey).removeClass("nav-bg");
        }
    });

    /*********************************
    /*  Scroll Top Bar
    *********************************/
    $(window).on("scroll", function () {
        var scroll = $(window).scrollTop();
        if (scroll < 245) {
            $(".scroll-to-target").removeClass("open");
        } else {
            $(".scroll-to-target").addClass("open");
        }
    });

    if ($(".scroll-to-target").length) {
        $(".scroll-to-target").on("click", function () {
            var target = $(this).attr("data-target");
            // animate
            $("html, body").animate(
                {
                    scrollTop: $(target).offset().top,
                },
                0
            );
        });
    }

    /*********************************
    /*  Mobile Menu Flyout Menu
    *********************************/
    $(".header__toggle").on("click", function (event) {
        event.preventDefault();
        $(".flyoutMenu").toggleClass("active");
    });
    $(".closest__btn").on("click", function (event) {
        event.preventDefault();
        $(".flyoutMenu").toggleClass("active");
    });
    $(".scroll-to-target").on("click", function (event) {
        event.preventDefault();
        $(".flyoutMenu").toggleClass("active");
    });

    $(document).on("click", function (e) {
        if ($(e.target).closest(".flyout__inner").length === 0 && $(e.target).closest(".header__toggle").length === 0) {
            $(".flyoutMenu").removeClass("active");
        }
    });

    /*********************************
    /*  Mobile Menu Expand
    *********************************/
    $(".flyout-main__menu .nav__link").on("click", function (event) {
        event.preventDefault();
        // $(".has__dropdown").find(".sub__menu").slideUp();
        $(this).parent(".has__dropdown").find(".sub__menu").slideToggle();
    });


    /*********************************
    /*  Accordion
    *********************************/
    
    $("#my-accordion").accordionjs({
        // Allow self close.(data-close-able)
        closeAble   : true,
        // Close other sections.(data-close-other)
        closeOther  : true,
        // Animation Speed.(data-slide-speed)
        slideSpeed  : 250,
        // The section open on first init. A number from 1 to X or false.(data-active-index)
        activeIndex : 1,

    });

	
    /*********************************
    /*  Partner Slider Carousel
    *********************************/
    if ($(".partner__slider").length > 0) {
        var swiper = new Swiper(".partner__slider", {
            direction: "horizontal",
            loop: "true",
            grabCursor: true,
            slidesPerView: "auto",
            spaceBetween: 30,
            speed: 500,
            centeredSlides: true,
            freeMode: false,
            autoplay: {
                enabled: true,
                // delay: 1,
                // pauseOnMouseEnter: true,
                // disableOnInteraction: false,
            },
            // centerInsufficientSlides: true,
            
            breakpoints: {
                300: {
                    slidesPerView: 2,
                },
                375: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                },
                479: {
                    slidesPerView: 2,
                },
                575: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                767: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                },
                992: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                },
                1199: {
                    slidesPerView: 5,
                },
                
            },
        });
    }
    

    /*********************************
    /*  Countdown Timer
    *********************************/
    if ($(".simple_timer").length > 0) {
        $('.simple_timer').syotimer({
            year: 2024,
            month: 11,
            day: 9,
            hour: 20,
            minute: 30
        })
    }

    /**********************************
     *  AOS animation
     **********************************/
    AOS.init();
  

})(jQuery);
