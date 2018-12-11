webpackJsonp([1],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(jQuery) {jQuery(document).ready(function ($) {

    var nasp = function () {

        var mobileNav = function mobileNav() {

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

        var slick = function slick() {

            // Banner SLIDER
            $(".banner-slider-wrap").slick({
                slidesToShow: 1,
                infinite: false,
                autoplay: false,
                slidesToScroll: 1,
                arrows: false,
                //appendArrows: '.practice-slider__arrows',                
                dots: true
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
                dots: false
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
                responsive: [{
                    breakpoint: 991,
                    settings: {
                        slidesToShow: 3
                    }
                }]
            });
        };

        var cards = function cards() {
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
                var startTimer = function startTimer() {
                    movingCards = setInterval(function () {
                        _moveRight();
                    }, 7000);
                };

                var stopTimer = function stopTimer() {
                    clearInterval(movingCards);
                };

                var _moveRight = function _moveRight() {
                    var len = $('.pulse');
                    if (len.length == activeCardNumber) {
                        $(".pulse").eq(0).trigger('click');
                    } else {
                        $(".pulse").eq(activeCardNumber).trigger('click');
                    }
                };

                startTimer();
                $(".pulse").eq(0).trigger('click');
            }
        };

        return {

            init: function init() {
                mobileNav();
                slick();
                cards();
            }

        };
    }();

    nasp.init();
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)))

/***/ }),
/* 3 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
],[1]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tL3RoZW1lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL3RoZW1lLnNjc3MiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJuYXNwIiwibW9iaWxlTmF2Iiwib24iLCJhZGRDbGFzcyIsImRlbGF5IiwicXVldWUiLCJkZXF1ZXVlIiwicmVtb3ZlQ2xhc3MiLCJjbGljayIsIm5vdCIsInNpYmxpbmdzIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJpbmZpbml0ZSIsImF1dG9wbGF5Iiwic2xpZGVzVG9TY3JvbGwiLCJhcnJvd3MiLCJkb3RzIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiY2FyZHMiLCJhY3RpdmVDYXJkTnVtYmVyIiwibW92aW5nQ2FyZHMiLCJtb3ZlUmlnaHQiLCJsZW4iLCJsZW5ndGgiLCJjaGlsZHJlbiIsInRyaWdnZXIiLCJuZXh0IiwiYXR0ciIsInBhcmVudCIsInJlbW92ZUF0dHIiLCJjc3MiLCJ0aGVjaG9zZW5vbmUiLCJpbm5lcl90ZXN0IiwiaGlkZSIsImZhZGVJbiIsInN0YXJ0VGltZXIiLCJzZXRJbnRlcnZhbCIsInN0b3BUaW1lciIsImNsZWFySW50ZXJ2YWwiLCJlcSIsImluaXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQUEscURBQU9DLFFBQVAsRUFBaUJDLEtBQWpCLENBQXVCLFVBQVVDLENBQVYsRUFBYTs7QUFFaEMsUUFBSUMsT0FBUSxZQUFZOztBQUVwQixZQUFJQyxZQUFZLFNBQVpBLFNBQVksR0FBVzs7QUFFdkI7QUFDQUYsY0FBRSxhQUFGLEVBQWlCRyxFQUFqQixDQUFvQixPQUFwQixFQUE2QixZQUFZO0FBQ3JDSCxrQkFBRSxtQkFBRixFQUF1Qkks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LE9BQTFCO0FBRUg7QUFFSixTQTdXRDs7QUFnWEEsZUFBTzs7QUFFSGUsa0JBQU0sZ0JBQVk7QUFDZGhEO0FBQ0FZO0FBQ0FjO0FBQ0g7O0FBTkUsU0FBUDtBQVVILEtBcGNVLEVBQVg7O0FBc2NBM0IsU0FBS2lELElBQUw7QUFNSCxDQTljRCxFOzs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiL2Fzc2V0cy9kaXN0L2pzL3RoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIG5hc3AgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBtb2JpbGVOYXYgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLy9GdWxsIFNjcmVlbiBNZW51XG4gICAgICAgICAgICAkKFwiLm5hdi1vcGVuZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJChcIi5mdWxsLXNjcmVlbi1tZW51XCIpLmFkZENsYXNzKFwibmF2LWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkKCcuZnVsbC1zY3JlZW4tbWVudS1jbG9zZScpLmRlbGF5KDQwMCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiY2xvc2UtYWN0aXZlXCIpLmRlcXVldWUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnUtY2xvc2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImNsb3NlLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnVcIikuZGVsYXkoMjUwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJuYXYtYWN0aXZlXCIpLmRlcXVldWUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvKiBNZW51ICovXG4gICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnUtY29udGVudC1tZW51IC5kcm9wZG93biBhXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCcuZHJvcGRvd24gPiB1bCcpLm5vdCgkKHRoaXMpLnNpYmxpbmdzKCd1bCcpKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmRyb3Bkb3duLW1lbnUnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgc2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgLy8gQmFubmVyIFNMSURFUlxuICAgICAgICAgICAgJChcIi5iYW5uZXItc2xpZGVyLXdyYXBcIikuc2xpY2soe1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy9hcHBlbmRBcnJvd3M6ICcucHJhY3RpY2Utc2xpZGVyX19hcnJvd3MnLCAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFRlc3RpbW9uaWFsIFNMSURFUlxuICAgICAgICAgICAgJChcIi50ZXN0aW1vbmlhbHMtc2xpZGVyXCIpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICczMDBweCcsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gVGVzdGltb25pYWwgU0xJREVSXG4gICAgICAgICAgICAkKFwiLmNhcmRfbGlzdF9ib3hcIikuc2xpY2soe1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxpIGNsYXNzPVwiZmFsIGZhLWFycm93LWNpcmNsZS1sZWZ0XCI+PC9pPicsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnPGkgY2xhc3M9XCJmYWwgZmEtYXJyb3ctY2lyY2xlLXJpZ2h0XCI+PC9pPicsIFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTsgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNhcmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8qKiBob21lIHBhZ2UgY2FyZHMgc2VjdGlvbiAqKi9cbiAgICAgICAgICAgIHZhciBhY3RpdmVDYXJkTnVtYmVyID0gMTtcbiAgICAgICAgICAgIHZhciBtb3ZpbmdDYXJkcyA9IG51bGw7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBmdW5jdGlvbiBzdGFydFRpbWVyKCkge1xuICAgICAgICAgICAgICAgIG1vdmluZ0NhcmRzID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBtb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9LCA3MDAwKTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcblxuICAgICAgICAgICAgIGZ1bmN0aW9uIHN0b3BUaW1lcigpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG1vdmluZ0NhcmRzKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vdmVSaWdodCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGVuID0gJCgnLmNhcmRfbGlzdCB1bC5jYXJkX2xpc3RfYm94IGxpJyk7XG4gICAgICAgICAgICAgICAgaWYgKGxlbi5sZW5ndGggPT0gYWN0aXZlQ2FyZE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAkKFwiLmNhcmRfbGlzdCB1bC5jYXJkX2xpc3RfYm94IGxpOm50aC1jaGlsZCgxKVwiKS5jaGlsZHJlbignYScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5jYXJkX2xpc3QgdWwuY2FyZF9saXN0X2JveCBsaTpudGgtY2hpbGQoXCIgKyBhY3RpdmVDYXJkTnVtYmVyICsgXCIpXCIpLm5leHQoKS5jaGlsZHJlbignYScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICBpZiAoJCgnLmNhcmRfbGlzdCcpLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICAkKCcuY2FyZDFfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDE7XG4gICAgICAgICAgICAgICAvLyBzdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cigncmVsJywgJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cigncmVsJyk7XG5cblxuICAgICAgICAgICAgICAgIC8qKiBjYXJkIGZ1bmN0aW9uYWxpdHkgc3RhcnQgaGVyZSAqKi9cbiAgICAgICAgICAgICAgICAkKCcuZmlyc3RfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2Vjb25kX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTEuNmVtKSBzY2FsZSgwLjk1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTgnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnRoaXJkX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTRlbSkgc2NhbGUoMC44NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk3J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5mb3VydGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNi41ZW0pIHNjYWxlKDAuNzUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZmlmdGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtOWVtKSBzY2FsZSgwLjY1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTUnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNpeHRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTExLjVlbSkgc2NhbGUoMC41NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk0J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCcuY2FyZDJfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDI7XG4gICAgICAgICAgICAgICAgLy9zdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cigncmVsJywgJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cigncmVsJyk7XG5cbiAgICAgICAgICAgICAgICAvKiogY2FyZCBmdW5jdGlvbmFsaXR5IHN0YXJ0IGhlcmUgKiovXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0X2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTExLjVlbSkgc2NhbGUoMC41NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk0J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMS42ZW0pIHNjYWxlKDAuOTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZm91cnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTRlbSkgc2NhbGUoMC44NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk3J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5maWZ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC02LjVlbSkgc2NhbGUoMC43NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zaXh0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC05ZW0pIHNjYWxlKDAuNjUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnLmNhcmQzX2NsaWNrJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNhcmROdW1iZXIgPSAzO1xuICAgICAgICAgICAgICAgIC8vc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy9zdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlbCcsICdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3JlbCcpO1xuXG4gICAgICAgICAgICAgICAgLyoqIGNhcmQgZnVuY3Rpb25hbGl0eSBzdGFydCBoZXJlICoqL1xuICAgICAgICAgICAgICAgICQoJy5maXJzdF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC05ZW0pIHNjYWxlKDAuNjUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NSdcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTEuNWVtKSBzY2FsZSgwLjU1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnRoaXJkX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMGVtKSBzY2FsZSgxKScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTknXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZvdXJ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xLjZlbSkgc2NhbGUoMC45NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5maWZ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC00ZW0pIHNjYWxlKDAuODUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2l4dGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNi41ZW0pIHNjYWxlKDAuNzUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnLmNhcmQ0X2NsaWNrJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNhcmROdW1iZXIgPSA0O1xuICAgICAgICAgICAgICAgIC8vc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy9zdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlbCcsICdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3JlbCcpO1xuXG4gICAgICAgICAgICAgICAgLyoqIGNhcmQgZnVuY3Rpb25hbGl0eSBzdGFydCBoZXJlICoqL1xuICAgICAgICAgICAgICAgICQoJy5maXJzdF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC02LjVlbSkgc2NhbGUoMC43NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtOWVtKSBzY2FsZSgwLjY1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTUnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnRoaXJkX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTExLjVlbSkgc2NhbGUoMC41NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk0J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5mb3VydGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZmlmdGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMS42ZW0pIHNjYWxlKDAuOTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2l4dGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNGVtKSBzY2FsZSgwLjg1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLmNhcmQ1X2NsaWNrJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNhcmROdW1iZXIgPSA1O1xuICAgICAgICAgICAgICAgIC8vc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy9zdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlbCcsICdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3JlbCcpO1xuXG4gICAgICAgICAgICAgICAgLyoqIGNhcmQgZnVuY3Rpb25hbGl0eSBzdGFydCBoZXJlICoqL1xuICAgICAgICAgICAgICAgICQoJy5maXJzdF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC00ZW0pIHNjYWxlKDAuODUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2Vjb25kX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTYuNWVtKSBzY2FsZSgwLjc1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTYnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnRoaXJkX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTllbSkgc2NhbGUoMC42NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk1J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5mb3VydGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTEuNWVtKSBzY2FsZSgwLjU1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZpZnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMGVtKSBzY2FsZSgxKScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTknXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNpeHRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTEuNmVtKSBzY2FsZSgwLjk1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTgnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLmNhcmQ2X2NsaWNrJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNhcmROdW1iZXIgPSA2O1xuICAgICAgICAgICAgICAgIC8vc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy9zdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlbCcsICdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3JlbCcpO1xuXG4gICAgICAgICAgICAgICAgLyoqIGNhcmQgZnVuY3Rpb25hbGl0eSBzdGFydCBoZXJlICoqL1xuICAgICAgICAgICAgICAgICQoJy5maXJzdF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xLjZlbSkgc2NhbGUoMC45NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNGVtKSBzY2FsZSgwLjg1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnRoaXJkX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTYuNWVtKSBzY2FsZSgwLjc1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTYnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZvdXJ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC05ZW0pIHNjYWxlKDAuNjUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZmlmdGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTEuNWVtKSBzY2FsZSgwLjU1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNpeHRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMGVtKSBzY2FsZSgxKScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTknXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLnB1bHNlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9ICQodGhpcykuYXR0cignZGF0YS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAvL3N0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgIC8vc3RhcnRUaW1lcigpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHRoZWNob3Nlbm9uZSA9ICQodGhpcykuYXR0cignZGF0YS1ib3gnKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5uZXJfdGVzdCA9ICQodGhpcykuYXR0cignZGF0YS10ZXh0Jyk7XG5cbiAgICAgICAgICAgICAgICAvL2RhdGEtYm94PVwibmV3Ym94ZXM0LTJcIiBkYXRhLXRleHQ9XCJpbm5lci00XCJcblxuICAgICAgICAgICAgICAgICQoJy5wdWxzZScpLnJlbW92ZUNsYXNzKCdwdWxzZUFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3B1bHNlQWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAkKCcubmV3Ym94ZXMtMicpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkKCcudXNlckV4cEJveGlubmVyJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICQoJyMnICsgdGhlY2hvc2Vub25lKS5mYWRlSW4oNjAwKTtcbiAgICAgICAgICAgICAgICAkKCcjJyArIGlubmVyX3Rlc3QpLmZhZGVJbig2MDApO1xuICAgICAgICAgICAgICAgIC8vJCgnIycgKyB0aGVjaG9zZW5vbmUpLnNob3coKTtcbiAgICAgICAgICAgICAgICAvLyQoJyMnICsgaW5uZXJfdGVzdCkuc2hvdygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICgkKCcucHVsc2UnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc3RhcnRUaW1lcigpIHtcbiAgICAgICAgICAgICAgICAgICAgbW92aW5nQ2FyZHMgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNzAwMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc3RvcFRpbWVyKCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG1vdmluZ0NhcmRzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBtb3ZlUmlnaHQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZW4gPSAkKCcucHVsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxlbi5sZW5ndGggPT0gYWN0aXZlQ2FyZE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wdWxzZVwiKS5lcSgwKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wdWxzZVwiKS5lcShhY3RpdmVDYXJkTnVtYmVyKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKFwiLnB1bHNlXCIpLmVxKDApLnRyaWdnZXIoJ2NsaWNrJyk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH07XG5cblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbW9iaWxlTmF2KCk7XG4gICAgICAgICAgICAgICAgc2xpY2soKTtcbiAgICAgICAgICAgICAgICBjYXJkcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0pKCk7XG5cbiAgICBuYXNwLmluaXQoKTtcblxuXG5cblxuXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY3VzdG9tL3RoZW1lLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zY3NzL3RoZW1lLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==