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
                autoplaySpeed: 5000,
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

        function preloadImage(img) {
            var src = img.getAttribute('data-src');
            if (!src) {
                return;
            }
            img.src = src;
        }

        function preloadBackImage(img) {
            var src = img.getAttribute('data-style');

            if (!src) {
                var className = img.className;
                img.className = className + ' visible';
            } else {
                if (img.getAttribute('style')) {
                    var style = img.getAttribute('style');
                    img.style = src + "; " + style;
                } else {
                    img.style = src;
                }
            }
        }

        var lazyLoad = function lazyLoad() {
            /* LAZY LOAD IMAGES */
            var imagesType = ["[data-src]", ".lazy-background"];

            if ('IntersectionObserver' in window) {
                var images;

                (function () {
                    // if it's supported

                    var config = {
                        rootMargin: '0px 0px 50px 0px',
                        threshold: 0
                    };

                    var observer = new IntersectionObserver(function (entries, self) {
                        entries.forEach(function (entry) {
                            if (entry.isIntersecting) {
                                // console.log(`Image ${entry.target.src} is in the viewport!`);
                                if (entry.target.getAttribute('data-src')) {
                                    preloadImage(entry.target);
                                } else {
                                    preloadBackImage(entry.target);
                                }
                                // Stop watching and load the image
                                self.unobserve(entry.target);
                            }
                        });
                    }, config);

                    for (i = 0; i < imagesType.length; i++) {
                        images = document.querySelectorAll(imagesType[i]);


                        images.forEach(function (image) {
                            observer.observe(image);
                        });
                    }
                })();
            } else {
                // not supported
                for (i = 0; i < imagesType.length; i++) {
                    var images = document.querySelectorAll(imagesType[i]);

                    images.forEach(function (image) {
                        if (image.getAttribute('data-src')) {
                            preloadImage(image);
                        } else {
                            preloadBackImage(image);
                        }
                    });
                }
            }
        };
        var vidDefer = function vidDefer() {
            document.getElementsByTagName('iframe');
            for (var i = 0; i < vidDefer.length; i++) {
                if (vidDefer[i].getAttribute('data-src')) {
                    vidDefer[i].setAttribute('src', vidDefer[i].getAttribute('data-src'));
                }
            }
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
                lazyLoad();
                vidDefer();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTUxNTIwNWFiZmQ0YTQ4ZjQyODgiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy90aGVtZS5zY3NzPzhmODYiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJuYXNwIiwibW9iaWxlTmF2Iiwib24iLCJhZGRDbGFzcyIsImRlbGF5IiwicXVldWUiLCJkZXF1ZXVlIiwicmVtb3ZlQ2xhc3MiLCJjbGljayIsIm5vdCIsInNpYmxpbmdzIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwic2VhcmNoIiwidG9nZ2xlQ2xhc3MiLCJjb25zb2xlIiwibG9nIiwib25IYXNoQ2hhbmdlIiwiaGFzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwidHJpZ2dlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsImluZmluaXRlIiwiYXV0b3BsYXkiLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsImRvdHMiLCJjZW50ZXJNb2RlIiwiY2VudGVyUGFkZGluZyIsImF1dG9wbGF5U3BlZWQiLCJwcmV2QXJyb3ciLCJuZXh0QXJyb3ciLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwiY2FyZHMiLCJhY3RpdmVDYXJkTnVtYmVyIiwibW92aW5nQ2FyZHMiLCJtb3ZlUmlnaHQiLCJsZW4iLCJsZW5ndGgiLCJjaGlsZHJlbiIsIm5leHQiLCJhdHRyIiwicGFyZW50IiwicmVtb3ZlQXR0ciIsImNzcyIsInRoZWNob3Nlbm9uZSIsImlubmVyX3Rlc3QiLCJoaWRlIiwiZmFkZUluIiwic3RhcnRUaW1lciIsInNldEludGVydmFsIiwic3RvcFRpbWVyIiwiY2xlYXJJbnRlcnZhbCIsImVxIiwiYXV0b1BsYXkiLCJldiIsIiR0aGlzMiIsIiRmcmFtZTIiLCJmaW5kIiwicmVwbGFjZSIsImUiLCIkdGhpcyIsIiRmcmFtZSIsInJldmVhbCIsImZhcVNjcm9sbCIsIm9mZnNldCIsInBhdGhuYW1lIiwiaG9zdG5hbWUiLCJ0YXJnZXQiLCJzbGljZSIsImFuaW1hdGUiLCJzY3JvbGxUb3AiLCJ0b3AiLCJwcmVsb2FkSW1hZ2UiLCJpbWciLCJzcmMiLCJnZXRBdHRyaWJ1dGUiLCJwcmVsb2FkQmFja0ltYWdlIiwiY2xhc3NOYW1lIiwic3R5bGUiLCJsYXp5TG9hZCIsImltYWdlc1R5cGUiLCJpbWFnZXMiLCJjb25maWciLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJzZWxmIiwiZm9yRWFjaCIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ1bm9ic2VydmUiLCJpIiwicXVlcnlTZWxlY3RvckFsbCIsIm9ic2VydmUiLCJpbWFnZSIsInZpZERlZmVyIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzZXRBdHRyaWJ1dGUiLCJpbml0Il0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG1DQUEyQiwwQkFBMEIsRUFBRTtBQUN2RCx5Q0FBaUMsZUFBZTtBQUNoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw4REFBc0QsK0RBQStEOztBQUVySDtBQUNBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7OztBQzdEQUEsT0FBT0MsUUFBUCxFQUFpQkMsS0FBakIsQ0FBdUIsVUFBVUMsQ0FBVixFQUFhOztBQUVoQyxRQUFJQyxPQUFRLFlBQVk7O0FBRXBCLFlBQUlDLFlBQVksU0FBWkEsU0FB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QUFXLEdBQVU7QUFDckIxRyxxQkFBUzJHLG9CQUFULENBQThCLFFBQTlCO0FBQ0EsaUJBQUssSUFBSUwsSUFBRSxDQUFYLEVBQWNBLElBQUVJLFNBQVM1RCxNQUF6QixFQUFpQ3dELEdBQWpDLEVBQXNDO0FBQ2xDLG9CQUFHSSxTQUFTSixDQUFULEVBQVlsQixZQUFaLENBQXlCLFVBQXpCLENBQUgsRUFBeUM7QUFDckNzQiw2QkFBU0osQ0FBVCxFQUFZTSxZQUFaLENBQXlCLEtBQXpCLEVBQStCRixTQUFTSixDQUFULEVBQVlsQixZQUFaLENBQXlCLFVBQXpCLENBQS9CO0FBQ0g7QUFDSjtBQUNKLFNBUEQ7O0FBWUEsZUFBTzs7QUFFSHlCLGtCQUFNLGdCQUFZO0FBQ2R6RztBQUNBWTtBQUNBVTtBQUNBZTtBQUNBckI7QUFDQTBDO0FBQ0FTO0FBQ0FDO0FBQ0FnQjtBQUNBa0I7QUFDSDs7QUFiRSxTQUFQO0FBaUJILEtBbm1CVSxFQUFYOztBQXFtQkF2RyxTQUFLMEcsSUFBTDtBQU1ILENBN21CRCxFOzs7Ozs7QUNBQSx5QyIsImZpbGUiOiIvYXNzZXRzL2Rpc3QvanMvdGhlbWUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCIvXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTUxNTIwNWFiZmQ0YTQ4ZjQyODgiLCJqUXVlcnkoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uICgkKSB7XG5cbiAgICB2YXIgbmFzcCA9IChmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgdmFyIG1vYmlsZU5hdiA9IGZ1bmN0aW9uKCkge1xuXG4gICAgICAgICAgICAvL0Z1bGwgU2NyZWVuIE1lbnVcbiAgICAgICAgICAgICQoXCIubmF2LW9wZW5lclwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnVcIikuYWRkQ2xhc3MoXCJuYXYtYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICQoJy5mdWxsLXNjcmVlbi1tZW51LWNsb3NlJykuZGVsYXkoNDAwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoXCJjbG9zZS1hY3RpdmVcIikuZGVxdWV1ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoXCIuZnVsbC1zY3JlZW4tbWVudS1jbG9zZVwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnJlbW92ZUNsYXNzKFwiY2xvc2UtYWN0aXZlXCIpO1xuICAgICAgICAgICAgICAgICQoXCIuZnVsbC1zY3JlZW4tbWVudVwiKS5kZWxheSgyNTApLnF1ZXVlKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcIm5hdi1hY3RpdmVcIikuZGVxdWV1ZSgpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8qIE1lbnUgKi9cbiAgICAgICAgICAgICQoXCIuZnVsbC1zY3JlZW4tbWVudS1jb250ZW50LW1lbnUgLmRyb3Bkb3duIGFcIikuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICQoJy5kcm9wZG93biA+IHVsJykubm90KCQodGhpcykuc2libGluZ3MoJ3VsJykpLnNsaWRlVXAoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnNpYmxpbmdzKCcuZHJvcGRvd24tbWVudScpLnNsaWRlVG9nZ2xlKCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgdmFyIHNlYXJjaCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJChcIi5idG4tc2VhcmNoXCIpLm9uKFwiY2xpY2tcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgJCgnLnNlYXJjaC1iYXInKS50b2dnbGVDbGFzcyhcImFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2VhcmNoIGNsaWNrJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgb25IYXNoQ2hhbmdlID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgaGFzaCA9IHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXG4gICAgICAgICAgICBpZiAoaGFzaCkge1xuICAgICAgICAgICAgICAgIC8vIHVzaW5nIEVTNiB0ZW1wbGF0ZSBzdHJpbmcgc3ludGF4XG4gICAgICAgICAgICAgICAgJChgW2RhdGEtdG9nZ2xlPVwibGlzdFwiXVtocmVmPVwiJHtoYXNofVwiXWApLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignaGFzaGNoYW5nZScsIG9uSGFzaENoYW5nZSwgZmFsc2UpO1xuXG4gICAgICAgIHZhciBzbGljayA9IGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAvLyBCYW5uZXIgU0xJREVSXG4gICAgICAgICAgICAkKFwiLmJhbm5lci1zbGlkZXItd3JhcFwiKS5zbGljayh7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIC8vYXBwZW5kQXJyb3dzOiAnLnByYWN0aWNlLXNsaWRlcl9fYXJyb3dzJywgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZG90czogdHJ1ZSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBUZXN0aW1vbmlhbCBTTElERVJcbiAgICAgICAgICAgICQoXCIudGVzdGltb25pYWxzLXNsaWRlclwiKS5zbGljayh7XG4gICAgICAgICAgICAgICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjZW50ZXJQYWRkaW5nOiAnMzAwcHgnLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gVGVzdGltb25pYWwgU0xJREVSXG4gICAgICAgICAgICAkKFwiLmNhcmRfbGlzdF9ib3hcIikuc2xpY2soe1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogNCxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBhdXRvcGxheTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiB0cnVlLFxuICAgICAgICAgICAgICAgIHByZXZBcnJvdzogJzxpIGNsYXNzPVwiZmFsIGZhLWFycm93LWNpcmNsZS1sZWZ0XCI+PC9pPicsXG4gICAgICAgICAgICAgICAgbmV4dEFycm93OiAnPGkgY2xhc3M9XCJmYWwgZmEtYXJyb3ctY2lyY2xlLXJpZ2h0XCI+PC9pPicsIFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHJlc3BvbnNpdmU6IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogOTkxLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDc2NyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAyLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSk7ICAgICAgICAgICAgICAgICAgICAgICBcblxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBjYXJkcyA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvKiogaG9tZSBwYWdlIGNhcmRzIHNlY3Rpb24gKiovXG4gICAgICAgICAgICB2YXIgYWN0aXZlQ2FyZE51bWJlciA9IDE7XG4gICAgICAgICAgICB2YXIgbW92aW5nQ2FyZHMgPSBudWxsO1xuXG4gICAgICAgICAgICAvKlxuICAgICAgICAgICAgZnVuY3Rpb24gc3RhcnRUaW1lcigpIHtcbiAgICAgICAgICAgICAgICBtb3ZpbmdDYXJkcyA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgfSwgNzAwMCk7XG4gICAgICAgICAgICB9ICAgICAgICAgICAgXG5cbiAgICAgICAgICAgICBmdW5jdGlvbiBzdG9wVGltZXIoKSB7XG4gICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChtb3ZpbmdDYXJkcyk7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgICAqL1xuXG4gICAgICAgICAgICBmdW5jdGlvbiBtb3ZlUmlnaHQoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGxlbiA9ICQoJy5jYXJkX2xpc3QgdWwuY2FyZF9saXN0X2JveCBsaScpO1xuICAgICAgICAgICAgICAgIGlmIChsZW4ubGVuZ3RoID09IGFjdGl2ZUNhcmROdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5jYXJkX2xpc3QgdWwuY2FyZF9saXN0X2JveCBsaTpudGgtY2hpbGQoMSlcIikuY2hpbGRyZW4oJ2EnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIuY2FyZF9saXN0IHVsLmNhcmRfbGlzdF9ib3ggbGk6bnRoLWNoaWxkKFwiICsgYWN0aXZlQ2FyZE51bWJlciArIFwiKVwiKS5uZXh0KCkuY2hpbGRyZW4oJ2EnKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8qXG4gICAgICAgICAgICAgaWYgKCQoJy5jYXJkX2xpc3QnKS5sZW5ndGggPiAwKSB7XG5cbiAgICAgICAgICAgICAgICBzdGFydFRpbWVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAqL1xuICAgICAgICAgICAgJCgnLmNhcmQxX2NsaWNrJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNhcmROdW1iZXIgPSAxO1xuICAgICAgICAgICAgICAgLy8gc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy9zdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlbCcsICdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3JlbCcpO1xuXG5cbiAgICAgICAgICAgICAgICAvKiogY2FyZCBmdW5jdGlvbmFsaXR5IHN0YXJ0IGhlcmUgKiovXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0X2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMGVtKSBzY2FsZSgxKScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTknXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xLjZlbSkgc2NhbGUoMC45NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy50aGlyZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC00ZW0pIHNjYWxlKDAuODUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZm91cnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTYuNWVtKSBzY2FsZSgwLjc1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTYnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZpZnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTllbSkgc2NhbGUoMC42NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk1J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zaXh0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xMS41ZW0pIHNjYWxlKDAuNTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnLmNhcmQyX2NsaWNrJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNhcmROdW1iZXIgPSAyO1xuICAgICAgICAgICAgICAgIC8vc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy9zdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlbCcsICdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3JlbCcpO1xuXG4gICAgICAgICAgICAgICAgLyoqIGNhcmQgZnVuY3Rpb25hbGl0eSBzdGFydCBoZXJlICoqL1xuICAgICAgICAgICAgICAgICQoJy5maXJzdF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xMS41ZW0pIHNjYWxlKDAuNTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2Vjb25kX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMGVtKSBzY2FsZSgxKScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTknXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnRoaXJkX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTEuNmVtKSBzY2FsZSgwLjk1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTgnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZvdXJ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC00ZW0pIHNjYWxlKDAuODUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZmlmdGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNi41ZW0pIHNjYWxlKDAuNzUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2l4dGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtOWVtKSBzY2FsZSgwLjY1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTUnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJy5jYXJkM19jbGljaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDYXJkTnVtYmVyID0gMztcbiAgICAgICAgICAgICAgICAvL3N0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgIC8vc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdyZWwnLCAnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKCdyZWwnKTtcblxuICAgICAgICAgICAgICAgIC8qKiBjYXJkIGZ1bmN0aW9uYWxpdHkgc3RhcnQgaGVyZSAqKi9cbiAgICAgICAgICAgICAgICAkKCcuZmlyc3RfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtOWVtKSBzY2FsZSgwLjY1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTUnXG5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2Vjb25kX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTExLjVlbSkgc2NhbGUoMC41NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk0J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy50aGlyZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKDBlbSkgc2NhbGUoMSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk5J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5mb3VydGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMS42ZW0pIHNjYWxlKDAuOTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZmlmdGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNGVtKSBzY2FsZSgwLjg1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNpeHRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTYuNWVtKSBzY2FsZSgwLjc1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTYnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJy5jYXJkNF9jbGljaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDYXJkTnVtYmVyID0gNDtcbiAgICAgICAgICAgICAgICAvL3N0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgIC8vc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdyZWwnLCAnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKCdyZWwnKTtcblxuICAgICAgICAgICAgICAgIC8qKiBjYXJkIGZ1bmN0aW9uYWxpdHkgc3RhcnQgaGVyZSAqKi9cbiAgICAgICAgICAgICAgICAkKCcuZmlyc3RfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNi41ZW0pIHNjYWxlKDAuNzUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2Vjb25kX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTllbSkgc2NhbGUoMC42NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk1J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy50aGlyZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xMS41ZW0pIHNjYWxlKDAuNTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZm91cnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMGVtKSBzY2FsZSgxKScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTknXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZpZnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTEuNmVtKSBzY2FsZSgwLjk1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTgnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNpeHRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTRlbSkgc2NhbGUoMC44NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk3J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5jYXJkNV9jbGljaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDYXJkTnVtYmVyID0gNTtcbiAgICAgICAgICAgICAgICAvL3N0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgIC8vc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdyZWwnLCAnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKCdyZWwnKTtcblxuICAgICAgICAgICAgICAgIC8qKiBjYXJkIGZ1bmN0aW9uYWxpdHkgc3RhcnQgaGVyZSAqKi9cbiAgICAgICAgICAgICAgICAkKCcuZmlyc3RfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNGVtKSBzY2FsZSgwLjg1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC02LjVlbSkgc2NhbGUoMC43NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy50aGlyZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC05ZW0pIHNjYWxlKDAuNjUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZm91cnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTExLjVlbSkgc2NhbGUoMC41NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk0J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5maWZ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKDBlbSkgc2NhbGUoMSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk5J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zaXh0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xLjZlbSkgc2NhbGUoMC45NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5jYXJkNl9jbGljaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDYXJkTnVtYmVyID0gNjtcbiAgICAgICAgICAgICAgICAvL3N0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgIC8vc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdyZWwnLCAnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKCdyZWwnKTtcblxuICAgICAgICAgICAgICAgIC8qKiBjYXJkIGZ1bmN0aW9uYWxpdHkgc3RhcnQgaGVyZSAqKi9cbiAgICAgICAgICAgICAgICAkKCcuZmlyc3RfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMS42ZW0pIHNjYWxlKDAuOTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2Vjb25kX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTRlbSkgc2NhbGUoMC44NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk3J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy50aGlyZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC02LjVlbSkgc2NhbGUoMC43NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5mb3VydGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtOWVtKSBzY2FsZSgwLjY1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTUnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZpZnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTExLjVlbSkgc2NhbGUoMC41NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk0J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zaXh0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKDBlbSkgc2NhbGUoMSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk5J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICQoJy5wdWxzZScpLmNsaWNrKGZ1bmN0aW9uICgpIHtcblxuICAgICAgICAgICAgICAgIGFjdGl2ZUNhcmROdW1iZXIgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgLy9zdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcblxuICAgICAgICAgICAgICAgIHZhciB0aGVjaG9zZW5vbmUgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtYm94Jyk7XG4gICAgICAgICAgICAgICAgdmFyIGlubmVyX3Rlc3QgPSAkKHRoaXMpLmF0dHIoJ2RhdGEtdGV4dCcpO1xuXG4gICAgICAgICAgICAgICAgLy9kYXRhLWJveD1cIm5ld2JveGVzNC0yXCIgZGF0YS10ZXh0PVwiaW5uZXItNFwiXG5cbiAgICAgICAgICAgICAgICAkKCcucHVsc2UnKS5yZW1vdmVDbGFzcygncHVsc2VBY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdwdWxzZUFjdGl2ZScpO1xuXG4gICAgICAgICAgICAgICAgJCgnLm5ld2JveGVzLTInKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJCgnLnVzZXJFeHBCb3hpbm5lcicpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkKCcjJyArIHRoZWNob3Nlbm9uZSkuZmFkZUluKDYwMCk7XG4gICAgICAgICAgICAgICAgJCgnIycgKyBpbm5lcl90ZXN0KS5mYWRlSW4oNjAwKTtcbiAgICAgICAgICAgICAgICAvLyQoJyMnICsgdGhlY2hvc2Vub25lKS5zaG93KCk7XG4gICAgICAgICAgICAgICAgLy8kKCcjJyArIGlubmVyX3Rlc3QpLnNob3coKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICBpZiAoJCgnLnB1bHNlJykubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmluZ0NhcmRzID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgbW92ZVJpZ2h0KCk7XG4gICAgICAgICAgICAgICAgICAgIH0sIDcwMDApO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIHN0b3BUaW1lcigpIHtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChtb3ZpbmdDYXJkcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gbW92ZVJpZ2h0KCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbGVuID0gJCgnLnB1bHNlJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsZW4ubGVuZ3RoID09IGFjdGl2ZUNhcmROdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucHVsc2VcIikuZXEoMCkudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoXCIucHVsc2VcIikuZXEoYWN0aXZlQ2FyZE51bWJlcikudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgJChcIi5wdWxzZVwiKS5lcSgwKS50cmlnZ2VyKCdjbGljaycpO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBhdXRvUGxheSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAvLyBQbGF5IHZpZGVvIG9uIHBsYXlcblxuICAgICAgICAgJChcIi5tb2RhbFwiKS5vbignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbiAoZXYpIHsgXG4gICAgICAgICAgICB2YXIgJHRoaXMyID0gJCh0aGlzKTsgXG4gICAgICAgICAgICB2YXIgJGZyYW1lMiA9ICR0aGlzMi5maW5kKCcubW9kYWwtY29udGVudCBpZnJhbWUnKTsgXG4gICAgICAgICAgICAvLyRmcmFtZTJbMF0uc3JjICs9IFwiMVwiOyBcbiAgICAgICAgICAgICRmcmFtZTIuYXR0cihcInNyY1wiLCAkZnJhbWUyLmF0dHIoXCJzcmNcIikucmVwbGFjZShcImF1dG9wbGF5PTBcIiwgXCJhdXRvcGxheT0xXCIpKVxuICAgICAgICAgfSk7XG5cbiAgICAgICAgLy9TdG9wIHZpZGVvIG9uIHBsYXlcblxuICAgICAgICAgJChcIi5tb2RhbFwiKS5vbignaGlkZGVuLmJzLm1vZGFsJywgZnVuY3Rpb24gKGUpIHsgXG4gICAgICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpOyBcbiAgICAgICAgICAgIHZhciAkZnJhbWUgPSAkdGhpcy5maW5kKCcubW9kYWwtY29udGVudCBpZnJhbWUnKTtcbiAgICAgICAgICAgICRmcmFtZS5hdHRyKFwic3JjXCIsICRmcmFtZS5hdHRyKFwic3JjXCIpLnJlcGxhY2UoXCJhdXRvcGxheT0xXCIsIFwiYXV0b3BsYXk9MFwiKSlcbiAgICAgICAgICAgIC8vJGZyYW1lLmF0dHIoXCJzcmNcIiwgJGZyYW1lLmF0dHIoXCJzcmNcIikpOyBcbiAgICAgICAgIH0pO1xuXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJldmVhbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICQoJy5iYW5uZXItc2xpZGVyJykuYWRkQ2xhc3MoJ3JldmVhbCcpO1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdyZXZlYWwnKTtcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgZmFxU2Nyb2xsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKCcucGFnZS1mYXEgYVtocmVmKj1cIiNcIl06bm90KFtocmVmPVwiI1wiXSknKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gLTIwMDsgLy8gPC0tIGNoYW5nZSB0aGUgdmFsdWUgaGVyZVxuICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbi5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywnJykgJiYgbG9jYXRpb24uaG9zdG5hbWUgPT0gdGhpcy5ob3N0bmFtZSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgdGFyZ2V0ID0gJCh0aGlzLmhhc2gpO1xuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArJ10nKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRhcmdldC5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3AgKyBvZmZzZXRcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sIDEwMDApO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cblxuXG4gICAgICAgIGZ1bmN0aW9uIHByZWxvYWRJbWFnZShpbWcpIHtcbiAgICAgICAgICBjb25zdCBzcmMgPSBpbWcuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpO1xuICAgICAgICAgIGlmICghc3JjKSB7IHJldHVybjsgfVxuICAgICAgICAgIGltZy5zcmMgPSBzcmM7XG4gICAgICAgIH1cblxuICAgICAgICBmdW5jdGlvbiBwcmVsb2FkQmFja0ltYWdlKGltZykge1xuICAgICAgICAgIGNvbnN0IHNyYyA9IGltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3R5bGUnKTtcbiAgICAgICAgICBcbiAgICAgICAgICBpZiAoIXNyYykge1xuICAgICAgICAgICAgdmFyIGNsYXNzTmFtZSA9IGltZy5jbGFzc05hbWU7XG4gICAgICAgICAgICBpbWcuY2xhc3NOYW1lID0gY2xhc3NOYW1lICsgJyB2aXNpYmxlJztcblxuICAgICAgICAgIH0gZWxzZSB7ICBcbiAgICAgICAgICAgIGlmKGltZy5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykpIHtcbiAgICAgICAgICAgICAgdmFyIHN0eWxlID0gaW1nLmdldEF0dHJpYnV0ZSgnc3R5bGUnKTtcbiAgICAgICAgICAgICAgaW1nLnN0eWxlID0gc3JjICsgXCI7IFwiICsgc3R5bGU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBpbWcuc3R5bGUgPSBzcmM7XG4gICAgICAgICAgICB9ICAgXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGxhenlMb2FkID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIC8qIExBWlkgTE9BRCBJTUFHRVMgKi9cbiAgICAgICAgICAgIHZhciBpbWFnZXNUeXBlID0gW1wiW2RhdGEtc3JjXVwiLCBcIi5sYXp5LWJhY2tncm91bmRcIl07ICAgXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykgeyAvLyBpZiBpdCdzIHN1cHBvcnRlZFxuXG4gICAgICAgICAgICAgICAgY29uc3QgY29uZmlnID0ge1xuICAgICAgICAgICAgICAgICAgcm9vdE1hcmdpbjogJzBweCAwcHggNTBweCAwcHgnLFxuICAgICAgICAgICAgICAgICAgdGhyZXNob2xkOiAwXG4gICAgICAgICAgICAgICAgfTtcblxuICAgICAgICAgICAgICAgIGxldCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihmdW5jdGlvbiAoZW50cmllcywgc2VsZikge1xuICAgICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKGVudHJ5ID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coYEltYWdlICR7ZW50cnkudGFyZ2V0LnNyY30gaXMgaW4gdGhlIHZpZXdwb3J0IWApO1xuICAgICAgICAgICAgICAgICAgICAgIGlmKGVudHJ5LnRhcmdldC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWxvYWRJbWFnZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByZWxvYWRCYWNrSW1hZ2UoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICB9ICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAgIC8vIFN0b3Agd2F0Y2hpbmcgYW5kIGxvYWQgdGhlIGltYWdlXG4gICAgICAgICAgICAgICAgICAgICAgc2VsZi51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSwgY29uZmlnKTsgXG4gICAgICAgICAgXG4gICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbWFnZXNUeXBlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaW1hZ2VzVHlwZVtpXSk7XG5cbiAgICAgICAgICAgICAgICBpbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgICAgICAgICAgICBvYnNlcnZlci5vYnNlcnZlKGltYWdlKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICB9IGVsc2UgeyAvLyBub3Qgc3VwcG9ydGVkXG4gICAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBpbWFnZXNUeXBlLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGltYWdlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoaW1hZ2VzVHlwZVtpXSk7XG5cbiAgICAgICAgICAgICAgICBpbWFnZXMuZm9yRWFjaChpbWFnZSA9PiB7XG4gICAgICAgICAgICAgICAgICBpZihpbWFnZS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpIHtcbiAgICAgICAgICAgICAgICAgICAgICBwcmVsb2FkSW1hZ2UoaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZEJhY2tJbWFnZShpbWFnZSk7XG4gICAgICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgdmFyIHZpZERlZmVyID0gZnVuY3Rpb24oKXtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKTtcbiAgICAgICAgICAgIGZvciAodmFyIGk9MDsgaTx2aWREZWZlci5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmKHZpZERlZmVyW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKSkge1xuICAgICAgICAgICAgICAgICAgICB2aWREZWZlcltpXS5zZXRBdHRyaWJ1dGUoJ3NyYycsdmlkRGVmZXJbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpKTtcbiAgICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG5cblxuXG4gICAgICAgIHJldHVybiB7XG5cbiAgICAgICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBtb2JpbGVOYXYoKTtcbiAgICAgICAgICAgICAgICBzZWFyY2goKTtcbiAgICAgICAgICAgICAgICBzbGljaygpO1xuICAgICAgICAgICAgICAgIGNhcmRzKCk7XG4gICAgICAgICAgICAgICAgb25IYXNoQ2hhbmdlKCk7XG4gICAgICAgICAgICAgICAgYXV0b1BsYXkoKTtcbiAgICAgICAgICAgICAgICByZXZlYWwoKTtcbiAgICAgICAgICAgICAgICBmYXFTY3JvbGwoKTtcbiAgICAgICAgICAgICAgICBsYXp5TG9hZCgpO1xuICAgICAgICAgICAgICAgIHZpZERlZmVyKCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgfVxuXG4gICAgfSkoKTtcblxuICAgIG5hc3AuaW5pdCgpO1xuXG5cblxuXG5cbn0pO1xuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL2Fzc2V0cy9qcy9jdXN0b20vdGhlbWUuanMiLCIvLyByZW1vdmVkIGJ5IGV4dHJhY3QtdGV4dC13ZWJwYWNrLXBsdWdpblxuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIC4vYXNzZXRzL3Njc3MvdGhlbWUuc2Nzc1xuLy8gbW9kdWxlIGlkID0gMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwic291cmNlUm9vdCI6IiJ9