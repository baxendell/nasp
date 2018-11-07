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
        };

        var cards = function cards() {
            /** home page cards section **/
            var activeCardNumber = 1;
            var movingCards = null;

            function startTimer() {
                movingCards = setInterval(function () {
                    moveRight();
                }, 7000);
            }

            function stopTimer() {
                clearInterval(movingCards);
            }

            function moveRight() {
                var len = $('.card_list ul.card_list_box li');
                if (len.length == activeCardNumber) {
                    $(".card_list ul.card_list_box li:nth-child(1)").children('a').trigger('click');
                } else {
                    $(".card_list ul.card_list_box li:nth-child(" + activeCardNumber + ")").next().children('a').trigger('click');
                }
            }

            if ($('.card_list').length > 0) {

                startTimer();
            }

            $('.card1_click').click(function () {
                activeCardNumber = 1;
                stopTimer();
                startTimer();
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
            });
            $('.card2_click').click(function () {
                activeCardNumber = 2;
                stopTimer();
                startTimer();
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
            });
            $('.card3_click').click(function () {
                activeCardNumber = 3;
                stopTimer();
                startTimer();
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
            });
            $('.card4_click').click(function () {
                activeCardNumber = 4;
                stopTimer();
                startTimer();
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
                    'transform': 'translateY(0em) scale(1)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '99'
                });
            });

            $('.card5_click').click(function () {
                activeCardNumber = 4;
                stopTimer();
                startTimer();
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
                    'transform': 'translateY(0em) scale(1)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '99'
                });
            });

            $('.card6_click').click(function () {
                activeCardNumber = 4;
                stopTimer();
                startTimer();
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
                    'transform': 'translateY(0em) scale(1)',
                    'opacity': '1',
                    'visibility': 'visible',
                    'z-index': '99'
                });
            });

            $('.pulse').click(function () {

                activeCardNumber = $(this).attr('data-active');
                stopTimer();
                startTimer();

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
                var _startTimer = function _startTimer() {
                    movingCards = setInterval(function () {
                        _moveRight();
                    }, 7000);
                };

                var _stopTimer = function _stopTimer() {
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

                _startTimer();
                $(".pulse").eq(0).trigger('click');
            }
        };

        return {

            init: function init() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY3VzdG9tL3RoZW1lLmpzIiwid2VicGFjazovLy8uL2Fzc2V0cy9zY3NzL3RoZW1lLnNjc3MiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJuYXNwIiwic2xpY2siLCJzbGlkZXNUb1Nob3ciLCJpbmZpbml0ZSIsImF1dG9wbGF5Iiwic2xpZGVzVG9TY3JvbGwiLCJhcnJvd3MiLCJkb3RzIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJjYXJkcyIsImFjdGl2ZUNhcmROdW1iZXIiLCJtb3ZpbmdDYXJkcyIsInN0YXJ0VGltZXIiLCJzZXRJbnRlcnZhbCIsIm1vdmVSaWdodCIsInN0b3BUaW1lciIsImNsZWFySW50ZXJ2YWwiLCJsZW4iLCJsZW5ndGgiLCJjaGlsZHJlbiIsInRyaWdnZXIiLCJuZXh0IiwiY2xpY2siLCJhZGRDbGFzcyIsImF0dHIiLCJwYXJlbnQiLCJzaWJsaW5ncyIsInJlbW92ZUNsYXNzIiwicmVtb3ZlQXR0ciIsImNzcyIsInRoZWNob3Nlbm9uZSIsImlubmVyX3Rlc3QiLCJoaWRlIiwiZmFkZUluIiwiZXEiLCJpbml0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUFBLHFEQUFPQyxRQUFQLEVBQWlCQyxLQUFqQixDQUF1QixVQUFVQyxDQUFWLEVBQWE7O0FBRWhDLFFBQUlDLE9BQVEsWUFBWTs7QUFFcEIsWUFBSUMsUUFBUSxTQUFSQSxLQUFRLEdBQVk7O0FBRXJCO0FBQ0NGLGNBQUUscUJBQUYsRUFBeUJFLEtBQXpCLENBQStCO0FBQzNCQyw4QkFBYyxDQURhO0FBRTNCQywwQkFBVSxLQUZpQjtBQUczQkMsMEJBQVUsS0FIaUI7QUFJM0JDLGdDQUFnQixDQUpXO0FBSzNCQyx3QkFBUSxLQUxtQjtBQU0zQjtBQUNBQyxzQkFBTTtBQVBxQixhQUEvQjs7QUFVQTtBQUNBUixjQUFFLHNCQUFGLEVBQTBCRSxLQUExQixDQUFnQztBQUM1Qk8sNEJB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LGlCQVR1Qjs7QUFBQSxvQkFXZkcsVUFYZSxHQVd4QixTQUFTQSxVQUFULEdBQXFCO0FBQ2pCLHdCQUFJRyxNQUFNbkIsRUFBRSxRQUFGLENBQVY7QUFDQSx3QkFBSW1CLElBQUlDLE1BQUosSUFBY1IsZ0JBQWxCLEVBQW9DO0FBQ2hDWiwwQkFBRSxRQUFGLEVBQVlvQyxFQUFaLENBQWUsQ0FBZixFQUFrQmQsT0FBbEIsQ0FBMEIsT0FBMUI7QUFDSCxxQkFGRCxNQUVPO0FBQ0h0QiwwQkFBRSxRQUFGLEVBQVlvQyxFQUFaLENBQWV4QixnQkFBZixFQUFpQ1UsT0FBakMsQ0FBeUMsT0FBekM7QUFDSDtBQUNKLGlCQWxCdUI7O0FBbUJ4QlI7QUFDQWQsa0JBQUUsUUFBRixFQUFZb0MsRUFBWixDQUFlLENBQWYsRUFBa0JkLE9BQWxCLENBQTBCLE9BQTFCO0FBRUg7QUFHSixTQW5TRDs7QUFzU0EsZUFBTzs7QUFFSGUsa0JBQU0sZ0JBQVk7QUFDZG5DO0FBQ0FTO0FBQ0g7O0FBTEUsU0FBUDtBQVNILEtBNVVVLEVBQVg7O0FBOFVBVixTQUFLb0MsSUFBTDtBQU1ILENBdFZELEU7Ozs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvYXNzZXRzL2Rpc3QvanMvdGhlbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgbmFzcCA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIHNsaWNrID0gZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgIC8vIEJhbm5lciBTTElERVJcbiAgICAgICAgICAgICQoXCIuYmFubmVyLXNsaWRlci13cmFwXCIpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vYXBwZW5kQXJyb3dzOiAnLnByYWN0aWNlLXNsaWRlcl9fYXJyb3dzJywgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBUZXN0aW1vbmlhbCBTTElERVJcbiAgICAgICAgICAgICQoXCIudGVzdGltb25pYWxzLXNsaWRlclwiKS5zbGljayh7XG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMzAwcHgnLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgfSk7ICAgICAgICAgICAgXG5cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgY2FyZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLyoqIGhvbWUgcGFnZSBjYXJkcyBzZWN0aW9uICoqL1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUNhcmROdW1iZXIgPSAxO1xuICAgICAgICAgICAgdmFyIG1vdmluZ0NhcmRzID0gbnVsbDtcblxuICAgICAgICAgICAgZnVuY3Rpb24gc3RhcnRUaW1lcigpIHtcbiAgICAgICAgICAgICAgICBtb3ZpbmdDYXJkcyA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfSwgNzAwMCk7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICBmdW5jdGlvbiBzdG9wVGltZXIoKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChtb3ZpbmdDYXJkcyk7XG4gICAgICAgICAgICB9ICAgXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vdmVSaWdodCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGVuID0gJCgnLmNhcmRfbGlzdCB1bC5jYXJkX2xpc3RfYm94IGxpJyk7XG4gICAgICAgICAgICAgICAgaWYgKGxlbi5sZW5ndGggPT0gYWN0aXZlQ2FyZE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAkKFwiLmNhcmRfbGlzdCB1bC5jYXJkX2xpc3RfYm94IGxpOm50aC1jaGlsZCgxKVwiKS5jaGlsZHJlbignYScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5jYXJkX2xpc3QgdWwuY2FyZF9saXN0X2JveCBsaTpudGgtY2hpbGQoXCIgKyBhY3RpdmVDYXJkTnVtYmVyICsgXCIpXCIpLm5leHQoKS5jaGlsZHJlbignYScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgaWYgKCQoJy5jYXJkX2xpc3QnKS5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICBzdGFydFRpbWVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICQoJy5jYXJkMV9jbGljaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDYXJkTnVtYmVyID0gMTtcbiAgICAgICAgICAgICAgICBzdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlbCcsICdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3JlbCcpO1xuXG5cbiAgICAgICAgICAgICAgICAvKiogY2FyZCBmdW5jdGlvbmFsaXR5IHN0YXJ0IGhlcmUgKiovXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0X2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMGVtKSBzY2FsZSgxKScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTknXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xLjZlbSkgc2NhbGUoMC45NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy50aGlyZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC00ZW0pIHNjYWxlKDAuODUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZm91cnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTYuNWVtKSBzY2FsZSgwLjc1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTYnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJy5jYXJkMl9jbGljaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDYXJkTnVtYmVyID0gMjtcbiAgICAgICAgICAgICAgICBzdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICBzdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlbCcsICdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3JlbCcpO1xuXG4gICAgICAgICAgICAgICAgLyoqIGNhcmQgZnVuY3Rpb25hbGl0eSBzdGFydCBoZXJlICoqL1xuICAgICAgICAgICAgICAgICQoJy5maXJzdF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC02LjVlbSkgc2NhbGUoMC43NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMS42ZW0pIHNjYWxlKDAuOTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZm91cnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTRlbSkgc2NhbGUoMC44NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk3J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCcuY2FyZDNfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDM7XG4gICAgICAgICAgICAgICAgc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdyZWwnLCAnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKCdyZWwnKTtcblxuICAgICAgICAgICAgICAgIC8qKiBjYXJkIGZ1bmN0aW9uYWxpdHkgc3RhcnQgaGVyZSAqKi9cbiAgICAgICAgICAgICAgICAkKCcuZmlyc3RfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNGVtKSBzY2FsZSgwLjg1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTcnXG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2Vjb25kX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTYuNWVtKSBzY2FsZSgwLjc1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTYnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnRoaXJkX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMGVtKSBzY2FsZSgxKScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTknXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZvdXJ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xLjZlbSkgc2NhbGUoMC45NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCcuY2FyZDRfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDQ7XG4gICAgICAgICAgICAgICAgc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdyZWwnLCAnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKCdyZWwnKTtcblxuICAgICAgICAgICAgICAgIC8qKiBjYXJkIGZ1bmN0aW9uYWxpdHkgc3RhcnQgaGVyZSAqKi9cbiAgICAgICAgICAgICAgICAkKCcuZmlyc3RfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMS42ZW0pIHNjYWxlKDAuOTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2Vjb25kX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTRlbSkgc2NhbGUoMC44NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk3J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy50aGlyZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC02LjVlbSkgc2NhbGUoMC43NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5mb3VydGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuY2FyZDVfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDQ7XG4gICAgICAgICAgICAgICAgc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdyZWwnLCAnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKCdyZWwnKTtcblxuICAgICAgICAgICAgICAgIC8qKiBjYXJkIGZ1bmN0aW9uYWxpdHkgc3RhcnQgaGVyZSAqKi9cbiAgICAgICAgICAgICAgICAkKCcuZmlyc3RfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMS42ZW0pIHNjYWxlKDAuOTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2Vjb25kX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTRlbSkgc2NhbGUoMC44NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk3J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy50aGlyZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC02LjVlbSkgc2NhbGUoMC43NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5mb3VydGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuY2FyZDZfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDQ7XG4gICAgICAgICAgICAgICAgc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdyZWwnLCAnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKCdyZWwnKTtcblxuICAgICAgICAgICAgICAgIC8qKiBjYXJkIGZ1bmN0aW9uYWxpdHkgc3RhcnQgaGVyZSAqKi9cbiAgICAgICAgICAgICAgICAkKCcuZmlyc3RfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMS42ZW0pIHNjYWxlKDAuOTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2Vjb25kX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTRlbSkgc2NhbGUoMC44NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk3J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy50aGlyZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC02LjVlbSkgc2NhbGUoMC43NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5mb3VydGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcucHVsc2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBhY3RpdmVDYXJkTnVtYmVyID0gJCh0aGlzKS5hdHRyKCdkYXRhLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHN0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgIHN0YXJ0VGltZXIoKTtcblxuICAgICAgICAgICAgICAgIHZhciB0aGVjaG9zZW5vbmUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtYm94Jyk7XG4gICAgICAgICAgICAgICAgdmFyIGlubmVyX3Rlc3QgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGV4dCcpO1xuXG4gICAgICAgICAgICAgICAgLy9kYXRhLWJveD1cIm5ld2JveGVzNC0yXCIgZGF0YS10ZXh0PVwiaW5uZXItNFwiXG5cbiAgICAgICAgICAgICAgICAkKCcucHVsc2UnKS5yZW1vdmVDbGFzcygncHVsc2VBY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdwdWxzZUFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgJCgnLm5ld2JveGVzLTInKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJCgnLnVzZXJFeHBCb3hpbm5lcicpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkKCcjJyArIHRoZWNob3Nlbm9uZSkuZmFkZUluKDYwMCk7XG4gICAgICAgICAgICAgICAgJCgnIycgKyBpbm5lcl90ZXN0KS5mYWRlSW4oNjAwKTtcbiAgICAgICAgICAgICAgICAvLyQoJyMnICsgdGhlY2hvc2Vub25lKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgLy8kKCcjJyArIGlubmVyX3Rlc3QpLnNob3coKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoJCgnLnB1bHNlJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmluZ0NhcmRzID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDcwMDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN0b3BUaW1lcigpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChtb3ZpbmdDYXJkcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbW92ZVJpZ2h0KCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuID0gJCgnLnB1bHNlJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZW4ubGVuZ3RoID09IGFjdGl2ZUNhcmROdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucHVsc2VcIikuZXEoMCkudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucHVsc2VcIikuZXEoYWN0aXZlQ2FyZE51bWJlcikudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgJChcIi5wdWxzZVwiKS5lcSgwKS50cmlnZ2VyKCdjbGljaycpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIH07XG5cblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgc2xpY2soKTtcbiAgICAgICAgICAgICAgICBjYXJkcygpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0pKCk7XG5cbiAgICBuYXNwLmluaXQoKTtcblxuXG5cblxuXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY3VzdG9tL3RoZW1lLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zY3NzL3RoZW1lLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAxIl0sInNvdXJjZVJvb3QiOiIifQ==