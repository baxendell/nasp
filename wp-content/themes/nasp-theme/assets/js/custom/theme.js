jQuery(document).ready(function ($) {

    var nasp = (function () {

        var mobileNav = function() {

            //Full Screen Menu
            $(".nav-opener").on("click", function () {
                $(".full-screen-menu").addClass("nav-active");
                $('.full-screen-menu-close').delay(400).queue(function () {
                    $(this).addClass("close-active").dequeue();
                });
            });

            $(".full-screen-menu-close").on("click", function () {
                $(this).removeClass("close-active");
                $(".full-screen-menu").delay(250).queue(function () {
                    $(this).removeClass("nav-active").dequeue();
                });
            });

            /* Menu */
            $(".full-screen-menu-content-menu .dropdown a").click(function () {
                $('.dropdown > ul').not($(this).siblings('ul')).slideUp();
                $(this).siblings('.dropdown-menu').slideToggle();
            });

        };

        var slick = function () {

           // Banner SLIDER
            $(".banner-slider-wrap").slick({
                slidesToShow: 1,
                infinite: false,
                autoplay: false,
                slidesToScroll: 1,
                arrows: false,
                //appendArrows: '.practice-slider__arrows',                
                dots: true,
            });

            // Testimonial SLIDER
            $(".testimonials-slider").slick({
                centerMode: true,
                centerPadding: '300px',
                slidesToShow: 1,
                infinite: true,
                autoplay: true,
                slidesToScroll: 1,
                arrows: false,
                dots: false,
            });

            // Testimonial SLIDER
            $(".card_list_box").slick({
                slidesToShow: 4,
                infinite: true,
                autoplay: false,
                slidesToScroll: 1,
                arrows: true,
                prevArrow: '<i class="fal fa-arrow-circle-left"></i>',
                nextArrow: '<i class="fal fa-arrow-circle-right"></i>', 
                dots: false,
                responsive: [
                    {
                        breakpoint: 991,
                        settings: {
                            slidesToShow: 3,
                        }
                    }
                ]
            });                       

        };

        var cards = function() {
        /** home page cards section **/
            var activeCardNumber = 1;
            var movingCards = null;

            /*
            function startTimer() {
                movingCards = setInterval(function () {
                    moveRight();
                }, 7000);
            }            

             function stopTimer() {
                clearInterval(movingCards);
            }   
            */

            function moveRight() {
                var len = $('.card_list ul.card_list_box li');
                if (len.length == activeCardNumber) {
                    $(".card_list ul.card_list_box li:nth-child(1)").children('a').trigger('click');
                } else {
                    $(".card_list ul.card_list_box li:nth-child(" + activeCardNumber + ")").next().children('a').trigger('click');
                }
            }

                /*
             if ($('.card_list').length > 0) {

                startTimer();
            }
            */
            $('.card1_click').click(function () {
                activeCardNumber = 1;
               // stopTimer();
                //startTimer();
                $(this).addClass('active-card');
                $(this).attr('rel', 'active-card');
                $(this).parent().siblings().children().removeClass('active-card');
                $(this).parent().siblings().children().removeAttr('rel');


                /** card functionality start here **/
                $('.first_card').css({
                    'transform': 'translateY(0em) scale(1)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '99'
                });
                $('.second_card').css({
                    'transform': 'translateY(-1.6em) scale(0.95)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '98'
                });
                $('.third_card').css({
                    'transform': 'translateY(-4em) scale(0.85)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '97'
                });
                $('.fourth_card').css({
                    'transform': 'translateY(-6.5em) scale(0.75)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '96'
                });
                $('.fifth_card').css({
                    'transform': 'translateY(-9em) scale(0.65)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '95'
                });
                $('.sixth_card').css({
                    'transform': 'translateY(-11.5em) scale(0.55)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '94'
                });
            });
            $('.card2_click').click(function () {
                activeCardNumber = 2;
                //stopTimer();
                //startTimer();
                $(this).addClass('active-card');
                $(this).attr('rel', 'active-card');
                $(this).parent().siblings().children().removeClass('active-card');
                $(this).parent().siblings().children().removeAttr('rel');

                /** card functionality start here **/
                $('.first_card').css({
                    'transform': 'translateY(-11.5em) scale(0.55)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '94'
                });
                $('.second_card').css({
                    'transform': 'translateY(0em) scale(1)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '99'
                });
                $('.third_card').css({
                    'transform': 'translateY(-1.6em) scale(0.95)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '98'
                });
                $('.fourth_card').css({
                    'transform': 'translateY(-4em) scale(0.85)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '97'
                });
                $('.fifth_card').css({
                    'transform': 'translateY(-6.5em) scale(0.75)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '96'
                });
                $('.sixth_card').css({
                    'transform': 'translateY(-9em) scale(0.65)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '95'
                });
            });
            $('.card3_click').click(function () {
                activeCardNumber = 3;
                //stopTimer();
                //startTimer();
                $(this).addClass('active-card');
                $(this).attr('rel', 'active-card');
                $(this).parent().siblings().children().removeClass('active-card');
                $(this).parent().siblings().children().removeAttr('rel');

                /** card functionality start here **/
                $('.first_card').css({
                    'transform': 'translateY(-9em) scale(0.65)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '95'

                });
                $('.second_card').css({
                    'transform': 'translateY(-11.5em) scale(0.55)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '94'
                });
                $('.third_card').css({
                    'transform': 'translateY(0em) scale(1)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '99'
                });
                $('.fourth_card').css({
                    'transform': 'translateY(-1.6em) scale(0.95)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '98'
                });
                $('.fifth_card').css({
                    'transform': 'translateY(-4em) scale(0.85)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '97'
                });
                $('.sixth_card').css({
                    'transform': 'translateY(-6.5em) scale(0.75)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '96'
                });
            });
            $('.card4_click').click(function () {
                activeCardNumber = 4;
                //stopTimer();
                //startTimer();
                $(this).addClass('active-card');
                $(this).attr('rel', 'active-card');
                $(this).parent().siblings().children().removeClass('active-card');
                $(this).parent().siblings().children().removeAttr('rel');

                /** card functionality start here **/
                $('.first_card').css({
                    'transform': 'translateY(-6.5em) scale(0.75)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '96'
                });
                $('.second_card').css({
                    'transform': 'translateY(-9em) scale(0.65)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '95'
                });
                $('.third_card').css({
                    'transform': 'translateY(-11.5em) scale(0.55)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '94'
                });
                $('.fourth_card').css({
                    'transform': 'translateY(0em) scale(1)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '99'
                });
                $('.fifth_card').css({
                    'transform': 'translateY(-1.6em) scale(0.95)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '98'
                });
                $('.sixth_card').css({
                    'transform': 'translateY(-4em) scale(0.85)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '97'
                });
            });

            $('.card5_click').click(function () {
                activeCardNumber = 5;
                //stopTimer();
                //startTimer();
                $(this).addClass('active-card');
                $(this).attr('rel', 'active-card');
                $(this).parent().siblings().children().removeClass('active-card');
                $(this).parent().siblings().children().removeAttr('rel');

                /** card functionality start here **/
                $('.first_card').css({
                    'transform': 'translateY(-4em) scale(0.85)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '97'
                });
                $('.second_card').css({
                    'transform': 'translateY(-6.5em) scale(0.75)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '96'
                });
                $('.third_card').css({
                    'transform': 'translateY(-9em) scale(0.65)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '95'
                });
                $('.fourth_card').css({
                    'transform': 'translateY(-11.5em) scale(0.55)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '94'
                });
                $('.fifth_card').css({
                    'transform': 'translateY(0em) scale(1)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '99'
                });
                $('.sixth_card').css({
                    'transform': 'translateY(-1.6em) scale(0.95)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '98'
                });
            });

            $('.card6_click').click(function () {
                activeCardNumber = 6;
                //stopTimer();
                //startTimer();
                $(this).addClass('active-card');
                $(this).attr('rel', 'active-card');
                $(this).parent().siblings().children().removeClass('active-card');
                $(this).parent().siblings().children().removeAttr('rel');

                /** card functionality start here **/
                $('.first_card').css({
                    'transform': 'translateY(-1.6em) scale(0.95)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '98'
                });
                $('.second_card').css({
                    'transform': 'translateY(-4em) scale(0.85)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '97'
                });
                $('.third_card').css({
                    'transform': 'translateY(-6.5em) scale(0.75)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '96'
                });
                $('.fourth_card').css({
                    'transform': 'translateY(-9em) scale(0.65)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '95'
                });
                $('.fifth_card').css({
                    'transform': 'translateY(-11.5em) scale(0.55)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '94'
                });
                $('.sixth_card').css({
                    'transform': 'translateY(0em) scale(1)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '99'
                });
            });

            $('.pulse').click(function () {

                activeCardNumber = $(this).attr('data-active');
                //stopTimer();
                //startTimer();

                var thechosenone = $(this).attr('data-box');
                var inner_test = $(this).attr('data-text');

                //data-box="newboxes4-2" data-text="inner-4"

                $('.pulse').removeClass('pulseActive');
                $(this).addClass('pulseActive');

                $('.newboxes-2').hide();
                $('.userExpBoxinner').hide();
                $('#' + thechosenone).fadeIn(600);
                $('#' + inner_test).fadeIn(600);
                //$('#' + thechosenone).show();
                //$('#' + inner_test).show();
            });

            if ($('.pulse').length > 0) {
                function startTimer() {
                    movingCards = setInterval(function () {
                        moveRight();
                    }, 7000);
                }

                function stopTimer() {
                    clearInterval(movingCards);
                }

                function moveRight() {
                    var len = $('.pulse');
                    if (len.length == activeCardNumber) {
                        $(".pulse").eq(0).trigger('click');
                    } else {
                        $(".pulse").eq(activeCardNumber).trigger('click');
                    }
                }
                startTimer();
                $(".pulse").eq(0).trigger('click');

            }
        
        };


        return {

            init: function () {
                mobileNav();
                slick();
                cards();
            }

        }

    })();

    nasp.init();





});