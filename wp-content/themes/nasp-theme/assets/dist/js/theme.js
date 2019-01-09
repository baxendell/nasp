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
                $frame2[0].src += "1";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYjYzMmUxM2Q5ZDZiZTg5ZTMwZjYiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy90aGVtZS5zY3NzPzhmODYiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJuYXNwIiwibW9iaWxlTmF2Iiwib24iLCJhZGRDbGFzcyIsImRlbGF5IiwicXVldWUiLCJkZXF1ZXVlIiwicmVtb3ZlQ2xhc3MiLCJjbGljayIsIm5vdCIsInNpYmxpbmdzIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwic2VhcmNoIiwidG9nZ2xlQ2xhc3MiLCJjb25zb2xlIiwibG9nIiwib25IYXNoQ2hhbmdlIiwiaGFzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwidHJpZ2dlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsImluZmluaXRlIiwiYXV0b3BsYXkiLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsImRvdHMiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsInByZXZBcnJvdyIsIm5leHRBcnJvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJjYXJkcyIsImFjdGl2ZUNhcmROdW1iZXIiLCJtb3ZpbmdDYXJkcyIsIm1vdmVSaWdodCIsImxlbiIsImxlbmd0aCIsImNoaWxkcmVuIiwibmV4dCIsImF0dHIiLCJwYXJlbnQiLCJyZW1vdmVBdHRyIiwiY3NzIiwidGhlY2hvc2Vub25lIiwiaW5uZXJfdGVzdCIsImhpZGUiLCJmYWRlSW4iLCJzdGFydFRpbWVyIiwic2V0SW50ZXJ2YWwiLCJzdG9wVGltZXIiLCJjbGVhckludGVydmFsIiwiZXEiLCJhdXRvUGxheSIsImV2IiwiJHRoaXMyIiwiJGZyYW1lMiIsImZpbmQiLCJzcmMiLCJlIiwiJHRoaXMiLCIkZnJhbWUiLCJyZXBsYWNlIiwicmV2ZWFsIiwiZmFxU2Nyb2xsIiwib2Zmc2V0IiwicGF0aG5hbWUiLCJob3N0bmFtZSIsInRhcmdldCIsInNsaWNlIiwiYW5pbWF0ZSIsInNjcm9sbFRvcCIsInRvcCIsImluaXQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBQSxPQUFPQyxRQUFQLEVBQWlCQyxLQUFqQixDQUF1QixVQUFVQyxDQUFWLEVBQWE7O0FBRWhDLFFBQUlDLE9BQVEsWUFBWTs7QUFFcEIsWUFBSUMsWUFBWSxTQUFaQSxTQUFZLEdBQVc7O0FBRXZCO0FBQ0FGLGNBQUUsYUFBRixFQUFpQkcsRUFBakIsQ0FBb0IsT0FBcEIsRUFBNkIsWUFBWTtBQUNyQ0gsa0JBQUUsbUJBQUYsRUFBdUJJLFFBQXZCLENBQWdDLFlBQWhDO0FBQ0FKLGtCQUFFLHlCQUFGLEVBQTZCSyxLQUE3QixDQUFtQyxHQUFuQyxFQUF3Q0MsS0FBeEMsQ0FBOEMsWUFBWTtBQUN0RE4sc0JBQUUsSUFBRixFQUFRSSxRQUFSLENBQWlCLGNBQWpCLEVBQWlDRyxPQUFqQztBQUNILGlCQUZEO0FBR0gsYUFMRDs7QUFPQVAsY0FBRSx5QkFBRixFQUE2QkcsRUFBN0IsQ0FBZ0MsT0FBaEMsRUFBeUMsWUFBWTtBQUNqREgsa0JBQUUsSUFBRixFQUFRUSxXQUFSLENBQW9CLGNBQXBC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QVc7QUFDdkJ0RSxjQUFFLHdDQUFGLEVBQTRDUyxLQUE1QyxDQUFrRCxZQUFXO0FBQ3pELG9CQUFJOEQsU0FBUyxDQUFDLEdBQWQsQ0FEeUQsQ0FDdEM7QUFDbkIsb0JBQUlsRCxTQUFTbUQsUUFBVCxDQUFrQkosT0FBbEIsQ0FBMEIsS0FBMUIsRUFBZ0MsRUFBaEMsS0FBdUMsS0FBS0ksUUFBTCxDQUFjSixPQUFkLENBQXNCLEtBQXRCLEVBQTRCLEVBQTVCLENBQXZDLElBQTBFL0MsU0FBU29ELFFBQVQsSUFBcUIsS0FBS0EsUUFBeEcsRUFBa0g7QUFDOUcsd0JBQUlDLFNBQVMxRSxFQUFFLEtBQUttQixJQUFQLENBQWI7QUFDQXVELDZCQUFTQSxPQUFPL0IsTUFBUCxHQUFnQitCLE1BQWhCLEdBQXlCMUUsRUFBRSxXQUFXLEtBQUttQixJQUFMLENBQVV3RCxLQUFWLENBQWdCLENBQWhCLENBQVgsR0FBK0IsR0FBakMsQ0FBbEM7QUFDQSx3QkFBSUQsT0FBTy9CLE1BQVgsRUFBbUI7QUFDZjNDLDBCQUFFLFlBQUYsRUFBZ0I0RSxPQUFoQixDQUF3QjtBQUNwQkMsdUNBQVdILE9BQU9ILE1BQVAsR0FBZ0JPLEdBQWhCLEdBQXNCUDtBQURiLHlCQUF4QixFQUVHLElBRkg7QUFHQSwrQkFBTyxLQUFQO0FBQ0g7QUFDSjtBQUNKLGFBWkQ7QUFhSCxTQWREOztBQWlCQSxlQUFPOztBQUVIUSxrQkFBTSxnQkFBWTtBQUNkN0U7QUFDQVk7QUFDQVU7QUFDQWM7QUFDQXBCO0FBQ0F5QztBQUNBVTtBQUNBQztBQUNIOztBQVhFLFNBQVA7QUFlSCxLQTFnQlUsRUFBWDs7QUE0Z0JBckUsU0FBSzhFLElBQUw7QUFNSCxDQXBoQkQsRTs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiL2Fzc2V0cy9kaXN0L2pzL3RoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGI2MzJlMTNkOWQ2YmU4OWUzMGY2IiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIG5hc3AgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBtb2JpbGVOYXYgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLy9GdWxsIFNjcmVlbiBNZW51XG4gICAgICAgICAgICAkKFwiLm5hdi1vcGVuZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJChcIi5mdWxsLXNjcmVlbi1tZW51XCIpLmFkZENsYXNzKFwibmF2LWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkKCcuZnVsbC1zY3JlZW4tbWVudS1jbG9zZScpLmRlbGF5KDQwMCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiY2xvc2UtYWN0aXZlXCIpLmRlcXVldWUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnUtY2xvc2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImNsb3NlLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnVcIikuZGVsYXkoMjUwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJuYXYtYWN0aXZlXCIpLmRlcXVldWUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvKiBNZW51ICovXG4gICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnUtY29udGVudC1tZW51IC5kcm9wZG93biBhXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCcuZHJvcGRvd24gPiB1bCcpLm5vdCgkKHRoaXMpLnNpYmxpbmdzKCd1bCcpKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmRyb3Bkb3duLW1lbnUnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHZhciBzZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIuYnRuLXNlYXJjaFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoJy5zZWFyY2gtYmFyJykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlYXJjaCBjbGljaycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG9uSGFzaENoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblxuICAgICAgICAgICAgaWYgKGhhc2gpIHtcbiAgICAgICAgICAgICAgICAvLyB1c2luZyBFUzYgdGVtcGxhdGUgc3RyaW5nIHN5bnRheFxuICAgICAgICAgICAgICAgICQoYFtkYXRhLXRvZ2dsZT1cImxpc3RcIl1baHJlZj1cIiR7aGFzaH1cIl1gKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBvbkhhc2hDaGFuZ2UsIGZhbHNlKTtcblxuICAgICAgICB2YXIgc2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgLy8gQmFubmVyIFNMSURFUlxuICAgICAgICAgICAgJChcIi5iYW5uZXItc2xpZGVyLXdyYXBcIikuc2xpY2soe1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvL2FwcGVuZEFycm93czogJy5wcmFjdGljZS1zbGlkZXJfX2Fycm93cycsICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gVGVzdGltb25pYWwgU0xJREVSXG4gICAgICAgICAgICAkKFwiLnRlc3RpbW9uaWFscy1zbGlkZXJcIikuc2xpY2soe1xuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzMwMHB4JyxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBUZXN0aW1vbmlhbCBTTElERVJcbiAgICAgICAgICAgICQoXCIuY2FyZF9saXN0X2JveFwiKS5zbGljayh7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGkgY2xhc3M9XCJmYWwgZmEtYXJyb3ctY2lyY2xlLWxlZnRcIj48L2k+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8aSBjbGFzcz1cImZhbCBmYS1hcnJvdy1jaXJjbGUtcmlnaHRcIj48L2k+JywgXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTsgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNhcmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8qKiBob21lIHBhZ2UgY2FyZHMgc2VjdGlvbiAqKi9cbiAgICAgICAgICAgIHZhciBhY3RpdmVDYXJkTnVtYmVyID0gMTtcbiAgICAgICAgICAgIHZhciBtb3ZpbmdDYXJkcyA9IG51bGw7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBmdW5jdGlvbiBzdGFydFRpbWVyKCkge1xuICAgICAgICAgICAgICAgIG1vdmluZ0NhcmRzID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBtb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9LCA3MDAwKTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcblxuICAgICAgICAgICAgIGZ1bmN0aW9uIHN0b3BUaW1lcigpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG1vdmluZ0NhcmRzKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vdmVSaWdodCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGVuID0gJCgnLmNhcmRfbGlzdCB1bC5jYXJkX2xpc3RfYm94IGxpJyk7XG4gICAgICAgICAgICAgICAgaWYgKGxlbi5sZW5ndGggPT0gYWN0aXZlQ2FyZE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAkKFwiLmNhcmRfbGlzdCB1bC5jYXJkX2xpc3RfYm94IGxpOm50aC1jaGlsZCgxKVwiKS5jaGlsZHJlbignYScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5jYXJkX2xpc3QgdWwuY2FyZF9saXN0X2JveCBsaTpudGgtY2hpbGQoXCIgKyBhY3RpdmVDYXJkTnVtYmVyICsgXCIpXCIpLm5leHQoKS5jaGlsZHJlbignYScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICBpZiAoJCgnLmNhcmRfbGlzdCcpLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICAkKCcuY2FyZDFfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDE7XG4gICAgICAgICAgICAgICAvLyBzdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cigncmVsJywgJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cigncmVsJyk7XG5cblxuICAgICAgICAgICAgICAgIC8qKiBjYXJkIGZ1bmN0aW9uYWxpdHkgc3RhcnQgaGVyZSAqKi9cbiAgICAgICAgICAgICAgICAkKCcuZmlyc3RfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2Vjb25kX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTEuNmVtKSBzY2FsZSgwLjk1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTgnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnRoaXJkX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTRlbSkgc2NhbGUoMC44NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk3J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5mb3VydGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNi41ZW0pIHNjYWxlKDAuNzUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZmlmdGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtOWVtKSBzY2FsZSgwLjY1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTUnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNpeHRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTExLjVlbSkgc2NhbGUoMC41NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk0J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCcuY2FyZDJfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDI7XG4gICAgICAgICAgICAgICAgLy9zdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cigncmVsJywgJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cigncmVsJyk7XG5cbiAgICAgICAgICAgICAgICAvKiogY2FyZCBmdW5jdGlvbmFsaXR5IHN0YXJ0IGhlcmUgKiovXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0X2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTExLjVlbSkgc2NhbGUoMC41NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk0J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMS42ZW0pIHNjYWxlKDAuOTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZm91cnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTRlbSkgc2NhbGUoMC44NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk3J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5maWZ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC02LjVlbSkgc2NhbGUoMC43NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zaXh0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC05ZW0pIHNjYWxlKDAuNjUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnLmNhcmQzX2NsaWNrJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNhcmROdW1iZXIgPSAzO1xuICAgICAgICAgICAgICAgIC8vc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy9zdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlbCcsICdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3JlbCcpO1xuXG4gICAgICAgICAgICAgICAgLyoqIGNhcmQgZnVuY3Rpb25hbGl0eSBzdGFydCBoZXJlICoqL1xuICAgICAgICAgICAgICAgICQoJy5maXJzdF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC05ZW0pIHNjYWxlKDAuNjUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NSdcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTEuNWVtKSBzY2FsZSgwLjU1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnRoaXJkX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMGVtKSBzY2FsZSgxKScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTknXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZvdXJ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xLjZlbSkgc2NhbGUoMC45NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5maWZ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC00ZW0pIHNjYWxlKDAuODUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2l4dGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNi41ZW0pIHNjYWxlKDAuNzUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnLmNhcmQ0X2NsaWNrJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNhcmROdW1iZXIgPSA0O1xuICAgICAgICAgICAgICAgIC8vc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy9zdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlbCcsICdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3JlbCcpO1xuXG4gICAgICAgICAgICAgICAgLyoqIGNhcmQgZnVuY3Rpb25hbGl0eSBzdGFydCBoZXJlICoqL1xuICAgICAgICAgICAgICAgICQoJy5maXJzdF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC02LjVlbSkgc2NhbGUoMC43NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtOWVtKSBzY2FsZSgwLjY1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTUnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnRoaXJkX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTExLjVlbSkgc2NhbGUoMC41NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk0J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5mb3VydGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZmlmdGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMS42ZW0pIHNjYWxlKDAuOTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2l4dGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNGVtKSBzY2FsZSgwLjg1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLmNhcmQ1X2NsaWNrJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNhcmROdW1iZXIgPSA1O1xuICAgICAgICAgICAgICAgIC8vc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy9zdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlbCcsICdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3JlbCcpO1xuXG4gICAgICAgICAgICAgICAgLyoqIGNhcmQgZnVuY3Rpb25hbGl0eSBzdGFydCBoZXJlICoqL1xuICAgICAgICAgICAgICAgICQoJy5maXJzdF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC00ZW0pIHNjYWxlKDAuODUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2Vjb25kX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTYuNWVtKSBzY2FsZSgwLjc1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTYnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnRoaXJkX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTllbSkgc2NhbGUoMC42NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk1J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5mb3VydGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTEuNWVtKSBzY2FsZSgwLjU1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZpZnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMGVtKSBzY2FsZSgxKScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTknXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNpeHRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTEuNmVtKSBzY2FsZSgwLjk1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTgnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLmNhcmQ2X2NsaWNrJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNhcmROdW1iZXIgPSA2O1xuICAgICAgICAgICAgICAgIC8vc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy9zdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlbCcsICdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3JlbCcpO1xuXG4gICAgICAgICAgICAgICAgLyoqIGNhcmQgZnVuY3Rpb25hbGl0eSBzdGFydCBoZXJlICoqL1xuICAgICAgICAgICAgICAgICQoJy5maXJzdF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xLjZlbSkgc2NhbGUoMC45NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNGVtKSBzY2FsZSgwLjg1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnRoaXJkX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTYuNWVtKSBzY2FsZSgwLjc1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTYnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZvdXJ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC05ZW0pIHNjYWxlKDAuNjUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZmlmdGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTEuNWVtKSBzY2FsZSgwLjU1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNpeHRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMGVtKSBzY2FsZSgxKScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTknXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLnB1bHNlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9ICQodGhpcykuYXR0cignZGF0YS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAvL3N0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgIC8vc3RhcnRUaW1lcigpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHRoZWNob3Nlbm9uZSA9ICQodGhpcykuYXR0cignZGF0YS1ib3gnKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5uZXJfdGVzdCA9ICQodGhpcykuYXR0cignZGF0YS10ZXh0Jyk7XG5cbiAgICAgICAgICAgICAgICAvL2RhdGEtYm94PVwibmV3Ym94ZXM0LTJcIiBkYXRhLXRleHQ9XCJpbm5lci00XCJcblxuICAgICAgICAgICAgICAgICQoJy5wdWxzZScpLnJlbW92ZUNsYXNzKCdwdWxzZUFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3B1bHNlQWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAkKCcubmV3Ym94ZXMtMicpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkKCcudXNlckV4cEJveGlubmVyJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICQoJyMnICsgdGhlY2hvc2Vub25lKS5mYWRlSW4oNjAwKTtcbiAgICAgICAgICAgICAgICAkKCcjJyArIGlubmVyX3Rlc3QpLmZhZGVJbig2MDApO1xuICAgICAgICAgICAgICAgIC8vJCgnIycgKyB0aGVjaG9zZW5vbmUpLnNob3coKTtcbiAgICAgICAgICAgICAgICAvLyQoJyMnICsgaW5uZXJfdGVzdCkuc2hvdygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICgkKCcucHVsc2UnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc3RhcnRUaW1lcigpIHtcbiAgICAgICAgICAgICAgICAgICAgbW92aW5nQ2FyZHMgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNzAwMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc3RvcFRpbWVyKCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG1vdmluZ0NhcmRzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBtb3ZlUmlnaHQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZW4gPSAkKCcucHVsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxlbi5sZW5ndGggPT0gYWN0aXZlQ2FyZE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wdWxzZVwiKS5lcSgwKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wdWxzZVwiKS5lcShhY3RpdmVDYXJkTnVtYmVyKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKFwiLnB1bHNlXCIpLmVxKDApLnRyaWdnZXIoJ2NsaWNrJyk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGF1dG9QbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFBsYXkgdmlkZW8gb24gcGxheVxuXG4gICAgICAgICAkKFwiLm1vZGFsXCIpLm9uKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uIChldikgeyBcbiAgICAgICAgICAgIHZhciAkdGhpczIgPSAkKHRoaXMpOyBcbiAgICAgICAgICAgIHZhciAkZnJhbWUyID0gJHRoaXMyLmZpbmQoJy5tb2RhbC1jb250ZW50IGlmcmFtZScpOyBcbiAgICAgICAgICAgICRmcmFtZTJbMF0uc3JjICs9IFwiMVwiOyBcbiAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vU3RvcCB2aWRlbyBvbiBwbGF5XG5cbiAgICAgICAgICQoXCIubW9kYWxcIikub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7IFxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTsgXG4gICAgICAgICAgICB2YXIgJGZyYW1lID0gJHRoaXMuZmluZCgnLm1vZGFsLWNvbnRlbnQgaWZyYW1lJyk7XG4gICAgICAgICAgICAkZnJhbWUuYXR0cihcInNyY1wiLCAkZnJhbWUuYXR0cihcInNyY1wiKS5yZXBsYWNlKFwiYXV0b3BsYXk9MVwiLCBcImF1dG9wbGF5PTBcIikpXG4gICAgICAgICAgICAvLyRmcmFtZS5hdHRyKFwic3JjXCIsICRmcmFtZS5hdHRyKFwic3JjXCIpKTsgXG4gICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZXZlYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKCcuYmFubmVyLXNsaWRlcicpLmFkZENsYXNzKCdyZXZlYWwnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmV2ZWFsJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGZhcVNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLnBhZ2UtZmFxIGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IC0yMDA7IC8vIDwtLSBjaGFuZ2UgdGhlIHZhbHVlIGhlcmVcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyddJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wICsgb2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbW9iaWxlTmF2KCk7XG4gICAgICAgICAgICAgICAgc2VhcmNoKCk7XG4gICAgICAgICAgICAgICAgc2xpY2soKTtcbiAgICAgICAgICAgICAgICBjYXJkcygpO1xuICAgICAgICAgICAgICAgIG9uSGFzaENoYW5nZSgpO1xuICAgICAgICAgICAgICAgIGF1dG9QbGF5KCk7XG4gICAgICAgICAgICAgICAgcmV2ZWFsKCk7XG4gICAgICAgICAgICAgICAgZmFxU2Nyb2xsKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfSkoKTtcblxuICAgIG5hc3AuaW5pdCgpO1xuXG5cblxuXG5cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jdXN0b20vdGhlbWUuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3Njc3MvdGhlbWUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9