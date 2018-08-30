$(document).ready(function(){

    $('.btn_menu').click(function () {
        $(this).toggleClass('active');
        $('.mobile_menu').toggleClass('open');
        $('body').toggleClass('m_menu_active');
        return false;
    });


    if($('.main_slider .item').length > 1){
        $('.main_slider').slick({
            autoplay: false,
            dots: true,
            arrows: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            fade:true,
        });
    }




    $('section').each(function(){
        var slick_slider = $(this).find('.slick_slider');
        var slick_item = $(slick_slider).find('.slick_item');

        if(slick_item.length > 4){
            $(slick_slider).slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 575,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }else if($(window).innerWidth() < 575 && slick_item.length > 1){
            $(slick_slider).slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 1,
                slidesToScroll: 1
            });
        }else if($(window).innerWidth() < 767 && slick_item.length > 2){
            $(slick_slider).slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 2,
                slidesToScroll: 1
            });
        }else if($(window).innerWidth() < 991 && slick_item.length > 3){
            $(slick_slider).slick({
                autoplay: false,
                dots: false,
                arrows: true,
                slidesToShow: 3,
                slidesToScroll: 1
            });
        }
    });




    $('.product_slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        //fade: true,
        centerPadding: '16%',
        centerMode: true,
        focusOnSelect: true,
        asNavFor: '.product_slider_nav',
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    centerPadding: '10%',
                }
            },
            {
                breakpoint: 991,
                settings: {
                    centerPadding: '10%',
                }
            },
            {
                breakpoint: 575,
                settings: {
                    centerPadding: '15%',
                }
            }
        ]
    });
    $('.product_slider_nav').slick({
        slidesToShow: 8,
        slidesToScroll: 1,
        asNavFor: '.product_slider',
        dots: false,
        arrows: true,
        focusOnSelect: true,
        responsive: [

            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 575,
                settings: {
                    slidesToShow: 2,
                }
            }
        ]
    });





    $(window).scroll(function(){
        if ($(this).scrollTop() > 100) {
            $('.scrolltop').fadeIn();
        } else {
            $('.scrolltop').fadeOut();
        }
    });

    $('.scrolltop').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });





});


