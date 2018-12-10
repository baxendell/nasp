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
                dots: false
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tL3RoZW1lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL3RoZW1lLnNjc3MiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJuYXNwIiwibW9iaWxlTmF2Iiwib24iLCJhZGRDbGFzcyIsImRlbGF5IiwicXVldWUiLCJkZXF1ZXVlIiwicmVtb3ZlQ2xhc3MiLCJjbGljayIsIm5vdCIsInNpYmxpbmdzIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJpbmZpbml0ZSIsImF1dG9wbGF5Iiwic2xpZGVzVG9TY3JvbGwiLCJhcnJvd3MiLCJkb3RzIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJjYXJkcyIsImFjdGl2ZUNhcmROdW1iZXIiLCJtb3ZpbmdDYXJkcyIsIm1vdmVSaWdodCIsImxlbiIsImxlbmd0aCIsImNoaWxkcmVuIiwidHJpZ2dlciIsIm5leHQiLCJhdHRyIiwicGFyZW50IiwicmVtb3ZlQXR0ciIsImNzcyIsInRoZWNob3Nlbm9uZSIsImlubmVyX3Rlc3QiLCJoaWRlIiwiZmFkZUluIiwic3RhcnRUaW1lciIsInNldEludGVydmFsIiwic3RvcFRpbWVyIiwiY2xlYXJJbnRlcnZhbCIsImVxIiwiaW5pdCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBQSxxREFBT0MsUUFBUCxFQUFpQkMsS0FBakIsQ0FBdUIsVUFBVUMsQ0FBVixFQUFhOztBQUVoQyxRQUFJQyxPQUFRLFlBQVk7O0FBRXBCLFlBQUlDLFlBQVksU0FBWkEsU0FBWSxHQUFXOztBQUV2QjtBQUNBRixjQUFFLGFBQUYsRUFBaUJHLEVBQWpCLENBQW9CLE9BQXBCLEVBQTZCLFlBQVk7QUFDckNILGtCQUFFLG1CQUFGLEVBQXVCSSxRQUF2QixDQUFnQyxZQUFoQztBQUNBSixrQkFBRSx5QkFBRixF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QyxJQUFMO0FBTUgsQ0F0Y0QsRTs7Ozs7OztBQ0FBLHlDIiwiZmlsZSI6Ii9hc3NldHMvZGlzdC9qcy90aGVtZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImpRdWVyeShkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24gKCQpIHtcblxuICAgIHZhciBuYXNwID0gKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICB2YXIgbW9iaWxlTmF2ID0gZnVuY3Rpb24oKSB7XG5cbiAgICAgICAgICAgIC8vRnVsbCBTY3JlZW4gTWVudVxuICAgICAgICAgICAgJChcIi5uYXYtb3BlbmVyXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoXCIuZnVsbC1zY3JlZW4tbWVudVwiKS5hZGRDbGFzcyhcIm5hdi1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgJCgnLmZ1bGwtc2NyZWVuLW1lbnUtY2xvc2UnKS5kZWxheSg0MDApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcyhcImNsb3NlLWFjdGl2ZVwiKS5kZXF1ZXVlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJChcIi5mdWxsLXNjcmVlbi1tZW51LWNsb3NlXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJjbG9zZS1hY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgJChcIi5mdWxsLXNjcmVlbi1tZW51XCIpLmRlbGF5KDI1MCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwibmF2LWFjdGl2ZVwiKS5kZXF1ZXVlKCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLyogTWVudSAqL1xuICAgICAgICAgICAgJChcIi5mdWxsLXNjcmVlbi1tZW51LWNvbnRlbnQtbWVudSAuZHJvcGRvd24gYVwiKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCgnLmRyb3Bkb3duID4gdWwnKS5ub3QoJCh0aGlzKS5zaWJsaW5ncygndWwnKSkuc2xpZGVVcCgpO1xuICAgICAgICAgICAgICAgICQodGhpcykuc2libGluZ3MoJy5kcm9wZG93bi1tZW51Jykuc2xpZGVUb2dnbGUoKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHNsaWNrID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgIC8vIEJhbm5lciBTTElERVJcbiAgICAgICAgICAgICQoXCIuYmFubmVyLXNsaWRlci13cmFwXCIpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vYXBwZW5kQXJyb3dzOiAnLnByYWN0aWNlLXNsaWRlcl9fYXJyb3dzJywgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBUZXN0aW1vbmlhbCBTTElERVJcbiAgICAgICAgICAgICQoXCIudGVzdGltb25pYWxzLXNsaWRlclwiKS5zbGljayh7XG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMzAwcHgnLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFRlc3RpbW9uaWFsIFNMSURFUlxuICAgICAgICAgICAgJChcIi5jYXJkX2xpc3RfYm94XCIpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8aSBjbGFzcz1cImZhbCBmYS1hcnJvdy1jaXJjbGUtbGVmdFwiPjwvaT4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxpIGNsYXNzPVwiZmFsIGZhLWFycm93LWNpcmNsZS1yaWdodFwiPjwvaT4nLCBcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgY2FyZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLyoqIGhvbWUgcGFnZSBjYXJkcyBzZWN0aW9uICoqL1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUNhcmROdW1iZXIgPSAxO1xuICAgICAgICAgICAgdmFyIG1vdmluZ0NhcmRzID0gbnVsbDtcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgICAgICAgICAgbW92aW5nQ2FyZHMgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgIH0sIDcwMDApO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgZnVuY3Rpb24gc3RvcFRpbWVyKCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobW92aW5nQ2FyZHMpO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgZnVuY3Rpb24gbW92ZVJpZ2h0KCkge1xuICAgICAgICAgICAgICAgIHZhciBsZW4gPSAkKCcuY2FyZF9saXN0IHVsLmNhcmRfbGlzdF9ib3ggbGknKTtcbiAgICAgICAgICAgICAgICBpZiAobGVuLmxlbmd0aCA9PSBhY3RpdmVDYXJkTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIuY2FyZF9saXN0IHVsLmNhcmRfbGlzdF9ib3ggbGk6bnRoLWNoaWxkKDEpXCIpLmNoaWxkcmVuKCdhJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKFwiLmNhcmRfbGlzdCB1bC5jYXJkX2xpc3RfYm94IGxpOm50aC1jaGlsZChcIiArIGFjdGl2ZUNhcmROdW1iZXIgKyBcIilcIikubmV4dCgpLmNoaWxkcmVuKCdhJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgIGlmICgkKCcuY2FyZF9saXN0JykubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICQoJy5jYXJkMV9jbGljaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDYXJkTnVtYmVyID0gMTtcbiAgICAgICAgICAgICAgIC8vIHN0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgIC8vc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdyZWwnLCAnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKCdyZWwnKTtcblxuXG4gICAgICAgICAgICAgICAgLyoqIGNhcmQgZnVuY3Rpb25hbGl0eSBzdGFydCBoZXJlICoqL1xuICAgICAgICAgICAgICAgICQoJy5maXJzdF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKDBlbSkgc2NhbGUoMSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk5J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMS42ZW0pIHNjYWxlKDAuOTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNGVtKSBzY2FsZSgwLjg1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZvdXJ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC02LjVlbSkgc2NhbGUoMC43NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5maWZ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC05ZW0pIHNjYWxlKDAuNjUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2l4dGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTEuNWVtKSBzY2FsZSgwLjU1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJy5jYXJkMl9jbGljaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDYXJkTnVtYmVyID0gMjtcbiAgICAgICAgICAgICAgICAvL3N0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgIC8vc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdyZWwnLCAnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKCdyZWwnKTtcblxuICAgICAgICAgICAgICAgIC8qKiBjYXJkIGZ1bmN0aW9uYWxpdHkgc3RhcnQgaGVyZSAqKi9cbiAgICAgICAgICAgICAgICAkKCcuZmlyc3RfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTEuNWVtKSBzY2FsZSgwLjU1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKDBlbSkgc2NhbGUoMSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk5J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy50aGlyZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xLjZlbSkgc2NhbGUoMC45NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5mb3VydGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNGVtKSBzY2FsZSgwLjg1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZpZnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTYuNWVtKSBzY2FsZSgwLjc1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTYnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNpeHRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTllbSkgc2NhbGUoMC42NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk1J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCcuY2FyZDNfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDM7XG4gICAgICAgICAgICAgICAgLy9zdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cigncmVsJywgJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cigncmVsJyk7XG5cbiAgICAgICAgICAgICAgICAvKiogY2FyZCBmdW5jdGlvbmFsaXR5IHN0YXJ0IGhlcmUgKiovXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0X2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTllbSkgc2NhbGUoMC42NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk1J1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xMS41ZW0pIHNjYWxlKDAuNTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZm91cnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTEuNmVtKSBzY2FsZSgwLjk1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTgnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZpZnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTRlbSkgc2NhbGUoMC44NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk3J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zaXh0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC02LjVlbSkgc2NhbGUoMC43NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCcuY2FyZDRfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDQ7XG4gICAgICAgICAgICAgICAgLy9zdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cigncmVsJywgJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cigncmVsJyk7XG5cbiAgICAgICAgICAgICAgICAvKiogY2FyZCBmdW5jdGlvbmFsaXR5IHN0YXJ0IGhlcmUgKiovXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0X2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTYuNWVtKSBzY2FsZSgwLjc1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTYnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC05ZW0pIHNjYWxlKDAuNjUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTEuNWVtKSBzY2FsZSgwLjU1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZvdXJ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKDBlbSkgc2NhbGUoMSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk5J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5maWZ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xLjZlbSkgc2NhbGUoMC45NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zaXh0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC00ZW0pIHNjYWxlKDAuODUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuY2FyZDVfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDU7XG4gICAgICAgICAgICAgICAgLy9zdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cigncmVsJywgJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cigncmVsJyk7XG5cbiAgICAgICAgICAgICAgICAvKiogY2FyZCBmdW5jdGlvbmFsaXR5IHN0YXJ0IGhlcmUgKiovXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0X2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTRlbSkgc2NhbGUoMC44NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk3J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNi41ZW0pIHNjYWxlKDAuNzUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtOWVtKSBzY2FsZSgwLjY1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTUnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZvdXJ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xMS41ZW0pIHNjYWxlKDAuNTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZmlmdGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2l4dGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMS42ZW0pIHNjYWxlKDAuOTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuY2FyZDZfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDY7XG4gICAgICAgICAgICAgICAgLy9zdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cigncmVsJywgJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cigncmVsJyk7XG5cbiAgICAgICAgICAgICAgICAvKiogY2FyZCBmdW5jdGlvbmFsaXR5IHN0YXJ0IGhlcmUgKiovXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0X2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTEuNmVtKSBzY2FsZSgwLjk1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTgnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC00ZW0pIHNjYWxlKDAuODUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNi41ZW0pIHNjYWxlKDAuNzUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZm91cnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTllbSkgc2NhbGUoMC42NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk1J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5maWZ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xMS41ZW0pIHNjYWxlKDAuNTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2l4dGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcucHVsc2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBhY3RpdmVDYXJkTnVtYmVyID0gJCh0aGlzKS5hdHRyKCdkYXRhLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIC8vc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy9zdGFydFRpbWVyKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGhlY2hvc2Vub25lID0gJCh0aGlzKS5hdHRyKCdkYXRhLWJveCcpO1xuICAgICAgICAgICAgICAgIHZhciBpbm5lcl90ZXN0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRleHQnKTtcblxuICAgICAgICAgICAgICAgIC8vZGF0YS1ib3g9XCJuZXdib3hlczQtMlwiIGRhdGEtdGV4dD1cImlubmVyLTRcIlxuXG4gICAgICAgICAgICAgICAgJCgnLnB1bHNlJykucmVtb3ZlQ2xhc3MoJ3B1bHNlQWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncHVsc2VBY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICQoJy5uZXdib3hlcy0yJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICQoJy51c2VyRXhwQm94aW5uZXInKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJCgnIycgKyB0aGVjaG9zZW5vbmUpLmZhZGVJbig2MDApO1xuICAgICAgICAgICAgICAgICQoJyMnICsgaW5uZXJfdGVzdCkuZmFkZUluKDYwMCk7XG4gICAgICAgICAgICAgICAgLy8kKCcjJyArIHRoZWNob3Nlbm9uZSkuc2hvdygpO1xuICAgICAgICAgICAgICAgIC8vJCgnIycgKyBpbm5lcl90ZXN0KS5zaG93KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCQoJy5wdWxzZScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdGFydFRpbWVyKCkge1xuICAgICAgICAgICAgICAgICAgICBtb3ZpbmdDYXJkcyA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCA3MDAwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdG9wVGltZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobW92aW5nQ2FyZHMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vdmVSaWdodCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbiA9ICQoJy5wdWxzZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGVuLmxlbmd0aCA9PSBhY3RpdmVDYXJkTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnB1bHNlXCIpLmVxKDApLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnB1bHNlXCIpLmVxKGFjdGl2ZUNhcmROdW1iZXIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgICAgICQoXCIucHVsc2VcIikuZXEoMCkudHJpZ2dlcignY2xpY2snKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfTtcblxuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBtb2JpbGVOYXYoKTtcbiAgICAgICAgICAgICAgICBzbGljaygpO1xuICAgICAgICAgICAgICAgIGNhcmRzKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfSkoKTtcblxuICAgIG5hc3AuaW5pdCgpO1xuXG5cblxuXG5cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jdXN0b20vdGhlbWUuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3Njc3MvdGhlbWUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gM1xuLy8gbW9kdWxlIGNodW5rcyA9IDEiXSwic291cmNlUm9vdCI6IiJ9