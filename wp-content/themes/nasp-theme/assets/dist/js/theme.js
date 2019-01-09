/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(1);
module.exports = __webpack_require__(2);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

jQuery(document).ready(function ($) {

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

        var search = function search() {
            $(".btn-search").on("click", function () {
                $('.search-bar').toggleClass("active");
                console.log('search click');
            });
        };

        var onHashChange = function onHashChange() {
            var hash = window.location.hash;

            if (hash) {
                // using ES6 template string syntax
                $("[data-toggle=\"list\"][href=\"" + hash + "\"]").trigger('click');
            }
        };

        window.addEventListener('hashchange', onHashChange, false);

        var slick = function slick() {

            // Banner SLIDER
            $(".banner-slider-wrap").slick({
                slidesToShow: 1,
                infinite: false,
                autoplay: true,
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
                }, {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 2
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

        var autoPlay = function autoPlay() {
            // Play video on play

            $(".modal").on('shown.bs.modal', function (ev) {
                var $this2 = $(this);
                var $frame2 = $this2.find('.modal-content iframe');
                //$frame2[0].src += "1"; 
                $frame2.attr("src", $frame2.attr("src").replace("autoplay=0", "autoplay=1"));
            });

            //Stop video on play

            $(".modal").on('hidden.bs.modal', function (e) {
                var $this = $(this);
                var $frame = $this.find('.modal-content iframe');
                $frame.attr("src", $frame.attr("src").replace("autoplay=1", "autoplay=0"));
                //$frame.attr("src", $frame.attr("src")); 
            });
        };

        var reveal = function reveal() {
            $('.banner-slider').addClass('reveal');
            console.log('reveal');
        };

        var faqScroll = function faqScroll() {
            $('.page-faq a[href*="#"]:not([href="#"])').click(function () {
                var offset = -200; // <-- change the value here
                if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html, body').animate({
                            scrollTop: target.offset().top + offset
                        }, 1000);
                        return false;
                    }
                }
            });
        };

        return {

            init: function init() {
                mobileNav();
                search();
                slick();
                cards();
                onHashChange();
                autoPlay();
                reveal();
                faqScroll();
            }

        };
    }();

    nasp.init();
});

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYTZkYjYyZGI2NmQ3NTUxOTk0NTEiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy90aGVtZS5zY3NzPzhmODYiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJuYXNwIiwibW9iaWxlTmF2Iiwib24iLCJhZGRDbGFzcyIsImRlbGF5IiwicXVldWUiLCJkZXF1ZXVlIiwicmVtb3ZlQ2xhc3MiLCJjbGljayIsIm5vdCIsInNpYmxpbmdzIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwic2VhcmNoIiwidG9nZ2xlQ2xhc3MiLCJjb25zb2xlIiwibG9nIiwib25IYXNoQ2hhbmdlIiwiaGFzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwidHJpZ2dlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsImluZmluaXRlIiwiYXV0b3BsYXkiLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsImRvdHMiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJjYXJkcyIsImFjdGl2ZUNhcmROdW1iZXIiLCJtb3ZpbmdDYXJkcyIsIm1vdmVSaWdodCIsImxlbiIsImxlbmd0aCIsImNoaWxkcmVuIiwibmV4dCIsImF0dHIiLCJwYXJlbnQiLCJyZW1vdmVBdHRyIiwiY3NzIiwidGhlY2hvc2Vub25lIiwiaW5uZXJfdGVzdCIsImhpZGUiLCJmYWRlSW4iLCJzdGFydFRpbWVyIiwic2V0SW50ZXJ2YWwiLCJzdG9wVGltZXIiLCJjbGVhckludGVydmFsIiwiZXEiLCJhdXRvUGxheSIsImV2IiwiJHRoaXMyIiwiJGZyYW1lMiIsImZpbmQiLCJyZXBsYWNlIiwiZSIsIiR0aGlzIiwiJGZyYW1lIiwicmV2ZWFsIiwiZmFxU2Nyb2xsIiwib2Zmc2V0IiwicGF0aG5hbWUiLCJob3N0bmFtZSIsInRhcmdldCIsInNsaWNlIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInRvcCIsImluaXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBQSxPQUFPQyxRQUFQLEVBQWlCQyxLQUFqQixDQUF1QixVQUFVQyxDQUFWLEVBQWE7O0FBRWhDLFFBQUlDLE9BQVEsWUFBWTs7QUFFcEIsWUFBSUMsWUFBWSxTQUFaQSxTQUFZLEdBQVc7O0FBRXZCO0FBQ0FGLGNBQUUsYUFBRixFQUFpQkcsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBWTtBQUNyQ0gsa0JBQUUsbUJBQUYsRUFBdUJJLFFBQXZCLENBQWdDLFlBQWhDO0FBQ0FKLGtCQUFFLHlCQUFGLEVBQTZCSyxLQUE3QixDQUFtQyxHQUFuQyxFQUF3Q0MsS0FBeEMsQ0FBOEMsWUFBWTtBQUN0RE4sc0JBQUUsSUFBRixFQUFRSSxRQUFSLENBQWlCLGNBQWpCLEVBQWlDRyxPQUFqQztBQUNILGlCQUZEO0FBR0gsYUFMRDs7QUFPQVAsY0FBRSx5QkFBRixFQUE2QkcsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBWTtBQUNqREgsa0JBQUUsSUFBRixFQUFRUSxXQUFSLENBQW9CLGNBQXBCO0FBQ0FS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QkFBUUMsR0FBUixDQUFZLFFBQVo7QUFDRCxTQUhEOztBQUtBLFlBQUlvRCxZQUFZLFNBQVpBLFNBQVksR0FBVztBQUN2QnJFLGNBQUUsd0NBQUYsRUFBNENTLEtBQTVDLENBQWtELFlBQVc7QUFDekQsb0JBQUk2RCxTQUFTLENBQUMsR0FBZCxDQUR5RCxDQUN0QztBQUNuQixvQkFBSWpELFNBQVNrRCxRQUFULENBQWtCUCxPQUFsQixDQUEwQixLQUExQixFQUFnQyxFQUFoQyxLQUF1QyxLQUFLTyxRQUFMLENBQWNQLE9BQWQsQ0FBc0IsS0FBdEIsRUFBNEIsRUFBNUIsQ0FBdkMsSUFBMEUzQyxTQUFTbUQsUUFBVCxJQUFxQixLQUFLQSxRQUF4RyxFQUFrSDtBQUM5Ryx3QkFBSUMsU0FBU3pFLEVBQUUsS0FBS21CLElBQVAsQ0FBYjtBQUNBc0QsNkJBQVNBLE9BQU85QixNQUFQLEdBQWdCOEIsTUFBaEIsR0FBeUJ6RSxFQUFFLFdBQVcsS0FBS21CLElBQUwsQ0FBVXVELEtBQVYsQ0FBZ0IsQ0FBaEIsQ0FBWCxHQUErQixHQUFqQyxDQUFsQztBQUNBLHdCQUFJRCxPQUFPOUIsTUFBWCxFQUFtQjtBQUNmM0MsMEJBQUUsWUFBRixFQUFnQjJFLE9BQWhCLENBQXdCO0FBQ3BCQyx1Q0FBV0gsT0FBT0gsTUFBUCxHQUFnQk8sR0FBaEIsR0FBc0JQO0FBRGIseUJBQXhCLEVBRUcsSUFGSDtBQUdBLCtCQUFPLEtBQVA7QUFDSDtBQUNKO0FBQ0osYUFaRDtBQWFILFNBZEQ7O0FBaUJBLGVBQU87O0FBRUhRLGtCQUFNLGdCQUFZO0FBQ2Q1RTtBQUNBWTtBQUNBVTtBQUNBYztBQUNBcEI7QUFDQXlDO0FBQ0FTO0FBQ0FDO0FBQ0g7O0FBWEUsU0FBUDtBQWVILEtBM2dCVSxFQUFYOztBQTZnQkFwRSxTQUFLNkUsSUFBTDtBQU1ILENBcmhCRCxFOzs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvYXNzZXRzL2Rpc3QvanMvdGhlbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgYTZkYjYyZGI2NmQ3NTUxOTk0NTEiLCJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgbmFzcCA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIG1vYmlsZU5hdiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAvL0Z1bGwgU2NyZWVuIE1lbnVcbiAgICAgICAgICAgICQoXCIubmF2LW9wZW5lclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnVcIikuYWRkQ2xhc3MoXCJuYXYtYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICQoJy5mdWxsLXNjcmVlbi1tZW51LWNsb3NlJykuZGVsYXkoNDAwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJjbG9zZS1hY3RpdmVcIikuZGVxdWV1ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoXCIuZnVsbC1zY3JlZW4tbWVudS1jbG9zZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiY2xvc2UtYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICQoXCIuZnVsbC1zY3JlZW4tbWVudVwiKS5kZWxheSgyNTApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5hdi1hY3RpdmVcIikuZGVxdWV1ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8qIE1lbnUgKi9cbiAgICAgICAgICAgICQoXCIuZnVsbC1zY3JlZW4tbWVudS1jb250ZW50LW1lbnUgLmRyb3Bkb3duIGFcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJy5kcm9wZG93biA+IHVsJykubm90KCQodGhpcykuc2libGluZ3MoJ3VsJykpLnNsaWRlVXAoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuZHJvcGRvd24tbWVudScpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgdmFyIHNlYXJjaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChcIi5idG4tc2VhcmNoXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnLnNlYXJjaC1iYXInKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VhcmNoIGNsaWNrJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgb25IYXNoQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXG4gICAgICAgICAgICBpZiAoaGFzaCkge1xuICAgICAgICAgICAgICAgIC8vIHVzaW5nIEVTNiB0ZW1wbGF0ZSBzdHJpbmcgc3ludGF4XG4gICAgICAgICAgICAgICAgJChgW2RhdGEtdG9nZ2xlPVwibGlzdFwiXVtocmVmPVwiJHtoYXNofVwiXWApLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIG9uSGFzaENoYW5nZSwgZmFsc2UpO1xuXG4gICAgICAgIHZhciBzbGljayA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAvLyBCYW5uZXIgU0xJREVSXG4gICAgICAgICAgICAkKFwiLmJhbm5lci1zbGlkZXItd3JhcFwiKS5zbGljayh7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vYXBwZW5kQXJyb3dzOiAnLnByYWN0aWNlLXNsaWRlcl9fYXJyb3dzJywgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBUZXN0aW1vbmlhbCBTTElERVJcbiAgICAgICAgICAgICQoXCIudGVzdGltb25pYWxzLXNsaWRlclwiKS5zbGljayh7XG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMzAwcHgnLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFRlc3RpbW9uaWFsIFNMSURFUlxuICAgICAgICAgICAgJChcIi5jYXJkX2xpc3RfYm94XCIpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8aSBjbGFzcz1cImZhbCBmYS1hcnJvdy1jaXJjbGUtbGVmdFwiPjwvaT4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxpIGNsYXNzPVwiZmFsIGZhLWFycm93LWNpcmNsZS1yaWdodFwiPjwvaT4nLCBcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgY2FyZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLyoqIGhvbWUgcGFnZSBjYXJkcyBzZWN0aW9uICoqL1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUNhcmROdW1iZXIgPSAxO1xuICAgICAgICAgICAgdmFyIG1vdmluZ0NhcmRzID0gbnVsbDtcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgICAgICAgICAgbW92aW5nQ2FyZHMgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgIH0sIDcwMDApO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgZnVuY3Rpb24gc3RvcFRpbWVyKCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobW92aW5nQ2FyZHMpO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgZnVuY3Rpb24gbW92ZVJpZ2h0KCkge1xuICAgICAgICAgICAgICAgIHZhciBsZW4gPSAkKCcuY2FyZF9saXN0IHVsLmNhcmRfbGlzdF9ib3ggbGknKTtcbiAgICAgICAgICAgICAgICBpZiAobGVuLmxlbmd0aCA9PSBhY3RpdmVDYXJkTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIuY2FyZF9saXN0IHVsLmNhcmRfbGlzdF9ib3ggbGk6bnRoLWNoaWxkKDEpXCIpLmNoaWxkcmVuKCdhJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKFwiLmNhcmRfbGlzdCB1bC5jYXJkX2xpc3RfYm94IGxpOm50aC1jaGlsZChcIiArIGFjdGl2ZUNhcmROdW1iZXIgKyBcIilcIikubmV4dCgpLmNoaWxkcmVuKCdhJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgIGlmICgkKCcuY2FyZF9saXN0JykubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICQoJy5jYXJkMV9jbGljaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDYXJkTnVtYmVyID0gMTtcbiAgICAgICAgICAgICAgIC8vIHN0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgIC8vc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdyZWwnLCAnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKCdyZWwnKTtcblxuXG4gICAgICAgICAgICAgICAgLyoqIGNhcmQgZnVuY3Rpb25hbGl0eSBzdGFydCBoZXJlICoqL1xuICAgICAgICAgICAgICAgICQoJy5maXJzdF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKDBlbSkgc2NhbGUoMSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk5J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMS42ZW0pIHNjYWxlKDAuOTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNGVtKSBzY2FsZSgwLjg1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZvdXJ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC02LjVlbSkgc2NhbGUoMC43NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5maWZ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC05ZW0pIHNjYWxlKDAuNjUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2l4dGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTEuNWVtKSBzY2FsZSgwLjU1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJy5jYXJkMl9jbGljaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDYXJkTnVtYmVyID0gMjtcbiAgICAgICAgICAgICAgICAvL3N0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgIC8vc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdyZWwnLCAnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKCdyZWwnKTtcblxuICAgICAgICAgICAgICAgIC8qKiBjYXJkIGZ1bmN0aW9uYWxpdHkgc3RhcnQgaGVyZSAqKi9cbiAgICAgICAgICAgICAgICAkKCcuZmlyc3RfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTEuNWVtKSBzY2FsZSgwLjU1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKDBlbSkgc2NhbGUoMSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk5J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy50aGlyZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xLjZlbSkgc2NhbGUoMC45NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5mb3VydGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNGVtKSBzY2FsZSgwLjg1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZpZnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTYuNWVtKSBzY2FsZSgwLjc1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTYnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNpeHRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTllbSkgc2NhbGUoMC42NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk1J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCcuY2FyZDNfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDM7XG4gICAgICAgICAgICAgICAgLy9zdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cigncmVsJywgJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cigncmVsJyk7XG5cbiAgICAgICAgICAgICAgICAvKiogY2FyZCBmdW5jdGlvbmFsaXR5IHN0YXJ0IGhlcmUgKiovXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0X2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTllbSkgc2NhbGUoMC42NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk1J1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xMS41ZW0pIHNjYWxlKDAuNTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZm91cnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTEuNmVtKSBzY2FsZSgwLjk1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTgnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZpZnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTRlbSkgc2NhbGUoMC44NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk3J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zaXh0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC02LjVlbSkgc2NhbGUoMC43NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCcuY2FyZDRfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDQ7XG4gICAgICAgICAgICAgICAgLy9zdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cigncmVsJywgJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cigncmVsJyk7XG5cbiAgICAgICAgICAgICAgICAvKiogY2FyZCBmdW5jdGlvbmFsaXR5IHN0YXJ0IGhlcmUgKiovXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0X2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTYuNWVtKSBzY2FsZSgwLjc1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTYnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC05ZW0pIHNjYWxlKDAuNjUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTEuNWVtKSBzY2FsZSgwLjU1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZvdXJ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKDBlbSkgc2NhbGUoMSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk5J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5maWZ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xLjZlbSkgc2NhbGUoMC45NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zaXh0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC00ZW0pIHNjYWxlKDAuODUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuY2FyZDVfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDU7XG4gICAgICAgICAgICAgICAgLy9zdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cigncmVsJywgJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cigncmVsJyk7XG5cbiAgICAgICAgICAgICAgICAvKiogY2FyZCBmdW5jdGlvbmFsaXR5IHN0YXJ0IGhlcmUgKiovXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0X2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTRlbSkgc2NhbGUoMC44NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk3J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNi41ZW0pIHNjYWxlKDAuNzUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtOWVtKSBzY2FsZSgwLjY1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTUnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZvdXJ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xMS41ZW0pIHNjYWxlKDAuNTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZmlmdGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2l4dGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMS42ZW0pIHNjYWxlKDAuOTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuY2FyZDZfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDY7XG4gICAgICAgICAgICAgICAgLy9zdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cigncmVsJywgJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cigncmVsJyk7XG5cbiAgICAgICAgICAgICAgICAvKiogY2FyZCBmdW5jdGlvbmFsaXR5IHN0YXJ0IGhlcmUgKiovXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0X2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTEuNmVtKSBzY2FsZSgwLjk1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTgnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC00ZW0pIHNjYWxlKDAuODUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNi41ZW0pIHNjYWxlKDAuNzUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZm91cnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTllbSkgc2NhbGUoMC42NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk1J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5maWZ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xMS41ZW0pIHNjYWxlKDAuNTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2l4dGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcucHVsc2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBhY3RpdmVDYXJkTnVtYmVyID0gJCh0aGlzKS5hdHRyKCdkYXRhLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIC8vc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy9zdGFydFRpbWVyKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGhlY2hvc2Vub25lID0gJCh0aGlzKS5hdHRyKCdkYXRhLWJveCcpO1xuICAgICAgICAgICAgICAgIHZhciBpbm5lcl90ZXN0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRleHQnKTtcblxuICAgICAgICAgICAgICAgIC8vZGF0YS1ib3g9XCJuZXdib3hlczQtMlwiIGRhdGEtdGV4dD1cImlubmVyLTRcIlxuXG4gICAgICAgICAgICAgICAgJCgnLnB1bHNlJykucmVtb3ZlQ2xhc3MoJ3B1bHNlQWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncHVsc2VBY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICQoJy5uZXdib3hlcy0yJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICQoJy51c2VyRXhwQm94aW5uZXInKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJCgnIycgKyB0aGVjaG9zZW5vbmUpLmZhZGVJbig2MDApO1xuICAgICAgICAgICAgICAgICQoJyMnICsgaW5uZXJfdGVzdCkuZmFkZUluKDYwMCk7XG4gICAgICAgICAgICAgICAgLy8kKCcjJyArIHRoZWNob3Nlbm9uZSkuc2hvdygpO1xuICAgICAgICAgICAgICAgIC8vJCgnIycgKyBpbm5lcl90ZXN0KS5zaG93KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCQoJy5wdWxzZScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdGFydFRpbWVyKCkge1xuICAgICAgICAgICAgICAgICAgICBtb3ZpbmdDYXJkcyA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCA3MDAwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdG9wVGltZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobW92aW5nQ2FyZHMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vdmVSaWdodCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbiA9ICQoJy5wdWxzZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGVuLmxlbmd0aCA9PSBhY3RpdmVDYXJkTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnB1bHNlXCIpLmVxKDApLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnB1bHNlXCIpLmVxKGFjdGl2ZUNhcmROdW1iZXIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgICAgICQoXCIucHVsc2VcIikuZXEoMCkudHJpZ2dlcignY2xpY2snKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgYXV0b1BsYXkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gUGxheSB2aWRlbyBvbiBwbGF5XG5cbiAgICAgICAgICQoXCIubW9kYWxcIikub24oJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKGV2KSB7IFxuICAgICAgICAgICAgdmFyICR0aGlzMiA9ICQodGhpcyk7IFxuICAgICAgICAgICAgdmFyICRmcmFtZTIgPSAkdGhpczIuZmluZCgnLm1vZGFsLWNvbnRlbnQgaWZyYW1lJyk7IFxuICAgICAgICAgICAgLy8kZnJhbWUyWzBdLnNyYyArPSBcIjFcIjsgXG4gICAgICAgICAgICAkZnJhbWUyLmF0dHIoXCJzcmNcIiwgJGZyYW1lMi5hdHRyKFwic3JjXCIpLnJlcGxhY2UoXCJhdXRvcGxheT0wXCIsIFwiYXV0b3BsYXk9MVwiKSlcbiAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vU3RvcCB2aWRlbyBvbiBwbGF5XG5cbiAgICAgICAgICQoXCIubW9kYWxcIikub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7IFxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTsgXG4gICAgICAgICAgICB2YXIgJGZyYW1lID0gJHRoaXMuZmluZCgnLm1vZGFsLWNvbnRlbnQgaWZyYW1lJyk7XG4gICAgICAgICAgICAkZnJhbWUuYXR0cihcInNyY1wiLCAkZnJhbWUuYXR0cihcInNyY1wiKS5yZXBsYWNlKFwiYXV0b3BsYXk9MVwiLCBcImF1dG9wbGF5PTBcIikpXG4gICAgICAgICAgICAvLyRmcmFtZS5hdHRyKFwic3JjXCIsICRmcmFtZS5hdHRyKFwic3JjXCIpKTsgXG4gICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZXZlYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKCcuYmFubmVyLXNsaWRlcicpLmFkZENsYXNzKCdyZXZlYWwnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmV2ZWFsJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGZhcVNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLnBhZ2UtZmFxIGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IC0yMDA7IC8vIDwtLSBjaGFuZ2UgdGhlIHZhbHVlIGhlcmVcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyddJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wICsgb2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbW9iaWxlTmF2KCk7XG4gICAgICAgICAgICAgICAgc2VhcmNoKCk7XG4gICAgICAgICAgICAgICAgc2xpY2soKTtcbiAgICAgICAgICAgICAgICBjYXJkcygpO1xuICAgICAgICAgICAgICAgIG9uSGFzaENoYW5nZSgpO1xuICAgICAgICAgICAgICAgIGF1dG9QbGF5KCk7XG4gICAgICAgICAgICAgICAgcmV2ZWFsKCk7XG4gICAgICAgICAgICAgICAgZmFxU2Nyb2xsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfSkoKTtcblxuICAgIG5hc3AuaW5pdCgpO1xuXG5cblxuXG5cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jdXN0b20vdGhlbWUuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3Njc3MvdGhlbWUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9