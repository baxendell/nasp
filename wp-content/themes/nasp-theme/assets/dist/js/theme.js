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

            // Deal SLIDER
            $(".deal-bar-slider").slick({
                slidesToShow: 1,
                infinite: true,
                autoplay: true,
                slidesToScroll: 1,
                arrows: false,
                //appendArrows: '.practice-slider__arrows',                
                dots: false,
                speed: 500,
                autoplaySpeed: 5000,
                fade: true,
                cssEase: 'linear'
            });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzJkZGFhODQzZjE2ODNiZDZhYTkiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy90aGVtZS5zY3NzPzhmODYiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJuYXNwIiwibW9iaWxlTmF2Iiwib24iLCJhZGRDbGFzcyIsImRlbGF5IiwicXVldWUiLCJkZXF1ZXVlIiwicmVtb3ZlQ2xhc3MiLCJjbGljayIsIm5vdCIsInNpYmxpbmdzIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwic2VhcmNoIiwidG9nZ2xlQ2xhc3MiLCJjb25zb2xlIiwibG9nIiwib25IYXNoQ2hhbmdlIiwiaGFzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwidHJpZ2dlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsImluZmluaXRlIiwiYXV0b3BsYXkiLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsImRvdHMiLCJzcGVlZCIsImF1dG9wbGF5U3BlZWQiLCJmYWRlIiwiY3NzRWFzZSIsImNlbnRlck1vZGUiLCJjZW50ZXJQYWRkaW5nIiwicHJldkFycm93IiwibmV4dEFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImNhcmRzIiwiYWN0aXZlQ2FyZE51bWJlciIsIm1vdmluZ0NhcmRzIiwibW92ZVJpZ2h0IiwibGVuIiwibGVuZ3RoIiwiY2hpbGRyZW4iLCJuZXh0IiwiYXR0ciIsInBhcmVudCIsInJlbW92ZUF0dHIiLCJjc3MiLCJ0aGVjaG9zZW5vbmUiLCJpbm5lcl90ZXN0IiwiaGlkZSIsImZhZGVJbiIsInN0YXJ0VGltZXIiLCJzZXRJbnRlcnZhbCIsInN0b3BUaW1lciIsImNsZWFySW50ZXJ2YWwiLCJlcSIsImF1dG9QbGF5IiwiZXYiLCIkdGhpczIiLCIkZnJhbWUyIiwiZmluZCIsInJlcGxhY2UiLCJlIiwiJHRoaXMiLCIkZnJhbWUiLCJyZXZlYWwiLCJmYXFTY3JvbGwiLCJvZmZzZXQiLCJwYXRobmFtZSIsImhvc3RuYW1lIiwidGFyZ2V0Iiwic2xpY2UiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidG9wIiwicHJlbG9hZEltYWdlIiwiaW1nIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwicHJlbG9hZEJhY2tJbWFnZSIsImNsYXNzTmFtZSIsInN0eWxlIiwibGF6eUxvYWQiLCJpbWFnZXNUeXBlIiwiaW1hZ2VzIiwiY29uZmlnIiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwic2VsZiIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidW5vYnNlcnZlIiwiaSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvYnNlcnZlIiwiaW1hZ2UiLCJ2aWREZWZlciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2V0QXR0cmlidXRlIiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3REFBLE9BQU9DLFFBQVAsRUFBaUJDLEtBQWpCLENBQXVCLFVBQVVDLENBQVYsRUFBYTs7QUFFaEMsUUFBSUMsT0FBUSxZQUFZOztB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QyxFQUF3QztBQUN0Qyx3QkFBSVosU0FBUzdGLFNBQVMwRyxnQkFBVCxDQUEwQmQsV0FBV2EsQ0FBWCxDQUExQixDQUFiOztBQUVBWiwyQkFBT1EsT0FBUCxDQUFlLGlCQUFTO0FBQ3RCLDRCQUFHTyxNQUFNckIsWUFBTixDQUFtQixVQUFuQixDQUFILEVBQW1DO0FBQy9CSCx5Q0FBYXdCLEtBQWI7QUFDSCx5QkFGRCxNQUdLO0FBQ0RwQiw2Q0FBaUJvQixLQUFqQjtBQUNIO0FBQ0YscUJBUEQ7QUFRRDtBQUNGO0FBQ0osU0FoREQ7QUFpREEsWUFBSUMsV0FBVyxTQUFYQSxRQUFXLEdBQVU7QUFDckI3RyxxQkFBUzhHLG9CQUFULENBQThCLFFBQTlCO0FBQ0EsaUJBQUssSUFBSUwsSUFBRSxDQUFYLEVBQWNBLElBQUVJLFNBQVM1RCxNQUF6QixFQUFpQ3dELEdBQWpDLEVBQXNDO0FBQ2xDLG9CQUFHSSxTQUFTSixDQUFULEVBQVlsQixZQUFaLENBQXlCLFVBQXpCLENBQUgsRUFBeUM7QUFDckNzQiw2QkFBU0osQ0FBVCxFQUFZTSxZQUFaLENBQXlCLEtBQXpCLEVBQStCRixTQUFTSixDQUFULEVBQVlsQixZQUFaLENBQXlCLFVBQXpCLENBQS9CO0FBQ0g7QUFDSjtBQUNKLFNBUEQ7O0FBWUEsZUFBTzs7QUFFSHlCLGtCQUFNLGdCQUFZO0FBQ2Q1RztBQUNBWTtBQUNBVTtBQUNBa0I7QUFDQXhCO0FBQ0E2QztBQUNBUztBQUNBQztBQUNBZ0I7QUFDQWtCO0FBQ0g7O0FBYkUsU0FBUDtBQWlCSCxLQWpuQlUsRUFBWDs7QUFtbkJBMUcsU0FBSzZHLElBQUw7QUFNSCxDQTNuQkQsRTs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiL2Fzc2V0cy9kaXN0L2pzL3RoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDMyZGRhYTg0M2YxNjgzYmQ2YWE5IiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIG5hc3AgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBtb2JpbGVOYXYgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLy9GdWxsIFNjcmVlbiBNZW51XG4gICAgICAgICAgICAkKFwiLm5hdi1vcGVuZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJChcIi5mdWxsLXNjcmVlbi1tZW51XCIpLmFkZENsYXNzKFwibmF2LWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkKCcuZnVsbC1zY3JlZW4tbWVudS1jbG9zZScpLmRlbGF5KDQwMCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiY2xvc2UtYWN0aXZlXCIpLmRlcXVldWUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnUtY2xvc2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImNsb3NlLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnVcIikuZGVsYXkoMjUwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJuYXYtYWN0aXZlXCIpLmRlcXVldWUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvKiBNZW51ICovXG4gICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnUtY29udGVudC1tZW51IC5kcm9wZG93biBhXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCcuZHJvcGRvd24gPiB1bCcpLm5vdCgkKHRoaXMpLnNpYmxpbmdzKCd1bCcpKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmRyb3Bkb3duLW1lbnUnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHZhciBzZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIuYnRuLXNlYXJjaFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoJy5zZWFyY2gtYmFyJykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlYXJjaCBjbGljaycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG9uSGFzaENoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblxuICAgICAgICAgICAgaWYgKGhhc2gpIHtcbiAgICAgICAgICAgICAgICAvLyB1c2luZyBFUzYgdGVtcGxhdGUgc3RyaW5nIHN5bnRheFxuICAgICAgICAgICAgICAgICQoYFtkYXRhLXRvZ2dsZT1cImxpc3RcIl1baHJlZj1cIiR7aGFzaH1cIl1gKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBvbkhhc2hDaGFuZ2UsIGZhbHNlKTtcblxuICAgICAgICB2YXIgc2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgLy8gRGVhbCBTTElERVJcbiAgICAgICAgICAgICQoXCIuZGVhbC1iYXItc2xpZGVyXCIpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvL2FwcGVuZEFycm93czogJy5wcmFjdGljZS1zbGlkZXJfX2Fycm93cycsICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcbiAgICAgICAgICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgLy8gQmFubmVyIFNMSURFUlxuICAgICAgICAgICAgJChcIi5iYW5uZXItc2xpZGVyLXdyYXBcIikuc2xpY2soe1xuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvL2FwcGVuZEFycm93czogJy5wcmFjdGljZS1zbGlkZXJfX2Fycm93cycsICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRvdHM6IHRydWUsXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgLy8gVGVzdGltb25pYWwgU0xJREVSXG4gICAgICAgICAgICAkKFwiLnRlc3RpbW9uaWFscy1zbGlkZXJcIikuc2xpY2soe1xuICAgICAgICAgICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY2VudGVyUGFkZGluZzogJzMwMHB4JyxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXlTcGVlZDogNTAwMCxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFRlc3RpbW9uaWFsIFNMSURFUlxuICAgICAgICAgICAgJChcIi5jYXJkX2xpc3RfYm94XCIpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDQsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFycm93czogdHJ1ZSxcbiAgICAgICAgICAgICAgICBwcmV2QXJyb3c6ICc8aSBjbGFzcz1cImZhbCBmYS1hcnJvdy1jaXJjbGUtbGVmdFwiPjwvaT4nLFxuICAgICAgICAgICAgICAgIG5leHRBcnJvdzogJzxpIGNsYXNzPVwiZmFsIGZhLWFycm93LWNpcmNsZS1yaWdodFwiPjwvaT4nLCBcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICByZXNwb25zaXZlOiBbXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrcG9pbnQ6IDk5MSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAzLFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA3NjcsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMixcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0pOyAgICAgICAgICAgICAgICAgICAgICAgXG5cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgY2FyZHMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLyoqIGhvbWUgcGFnZSBjYXJkcyBzZWN0aW9uICoqL1xuICAgICAgICAgICAgdmFyIGFjdGl2ZUNhcmROdW1iZXIgPSAxO1xuICAgICAgICAgICAgdmFyIG1vdmluZ0NhcmRzID0gbnVsbDtcblxuICAgICAgICAgICAgLypcbiAgICAgICAgICAgIGZ1bmN0aW9uIHN0YXJ0VGltZXIoKSB7XG4gICAgICAgICAgICAgICAgbW92aW5nQ2FyZHMgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIG1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgIH0sIDcwMDApO1xuICAgICAgICAgICAgfSAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAgZnVuY3Rpb24gc3RvcFRpbWVyKCkge1xuICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobW92aW5nQ2FyZHMpO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICAgICAgKi9cblxuICAgICAgICAgICAgZnVuY3Rpb24gbW92ZVJpZ2h0KCkge1xuICAgICAgICAgICAgICAgIHZhciBsZW4gPSAkKCcuY2FyZF9saXN0IHVsLmNhcmRfbGlzdF9ib3ggbGknKTtcbiAgICAgICAgICAgICAgICBpZiAobGVuLmxlbmd0aCA9PSBhY3RpdmVDYXJkTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICQoXCIuY2FyZF9saXN0IHVsLmNhcmRfbGlzdF9ib3ggbGk6bnRoLWNoaWxkKDEpXCIpLmNoaWxkcmVuKCdhJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAkKFwiLmNhcmRfbGlzdCB1bC5jYXJkX2xpc3RfYm94IGxpOm50aC1jaGlsZChcIiArIGFjdGl2ZUNhcmROdW1iZXIgKyBcIilcIikubmV4dCgpLmNoaWxkcmVuKCdhJykudHJpZ2dlcignY2xpY2snKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvKlxuICAgICAgICAgICAgIGlmICgkKCcuY2FyZF9saXN0JykubGVuZ3RoID4gMCkge1xuXG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICQoJy5jYXJkMV9jbGljaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDYXJkTnVtYmVyID0gMTtcbiAgICAgICAgICAgICAgIC8vIHN0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgIC8vc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdyZWwnLCAnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKCdyZWwnKTtcblxuXG4gICAgICAgICAgICAgICAgLyoqIGNhcmQgZnVuY3Rpb25hbGl0eSBzdGFydCBoZXJlICoqL1xuICAgICAgICAgICAgICAgICQoJy5maXJzdF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKDBlbSkgc2NhbGUoMSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk5J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMS42ZW0pIHNjYWxlKDAuOTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNGVtKSBzY2FsZSgwLjg1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZvdXJ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC02LjVlbSkgc2NhbGUoMC43NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5maWZ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC05ZW0pIHNjYWxlKDAuNjUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2l4dGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTEuNWVtKSBzY2FsZSgwLjU1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICQoJy5jYXJkMl9jbGljaycpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVDYXJkTnVtYmVyID0gMjtcbiAgICAgICAgICAgICAgICAvL3N0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgIC8vc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hdHRyKCdyZWwnLCAnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLnBhcmVudCgpLnNpYmxpbmdzKCkuY2hpbGRyZW4oKS5yZW1vdmVBdHRyKCdyZWwnKTtcblxuICAgICAgICAgICAgICAgIC8qKiBjYXJkIGZ1bmN0aW9uYWxpdHkgc3RhcnQgaGVyZSAqKi9cbiAgICAgICAgICAgICAgICAkKCcuZmlyc3RfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTEuNWVtKSBzY2FsZSgwLjU1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKDBlbSkgc2NhbGUoMSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk5J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy50aGlyZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xLjZlbSkgc2NhbGUoMC45NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5mb3VydGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNGVtKSBzY2FsZSgwLjg1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZpZnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTYuNWVtKSBzY2FsZSgwLjc1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTYnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNpeHRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTllbSkgc2NhbGUoMC42NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk1J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCcuY2FyZDNfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDM7XG4gICAgICAgICAgICAgICAgLy9zdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cigncmVsJywgJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cigncmVsJyk7XG5cbiAgICAgICAgICAgICAgICAvKiogY2FyZCBmdW5jdGlvbmFsaXR5IHN0YXJ0IGhlcmUgKiovXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0X2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTllbSkgc2NhbGUoMC42NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk1J1xuXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xMS41ZW0pIHNjYWxlKDAuNTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZm91cnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTEuNmVtKSBzY2FsZSgwLjk1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTgnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZpZnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTRlbSkgc2NhbGUoMC44NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk3J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zaXh0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC02LjVlbSkgc2NhbGUoMC43NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCcuY2FyZDRfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDQ7XG4gICAgICAgICAgICAgICAgLy9zdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cigncmVsJywgJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cigncmVsJyk7XG5cbiAgICAgICAgICAgICAgICAvKiogY2FyZCBmdW5jdGlvbmFsaXR5IHN0YXJ0IGhlcmUgKiovXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0X2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTYuNWVtKSBzY2FsZSgwLjc1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTYnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC05ZW0pIHNjYWxlKDAuNjUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTEuNWVtKSBzY2FsZSgwLjU1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZvdXJ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKDBlbSkgc2NhbGUoMSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk5J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5maWZ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xLjZlbSkgc2NhbGUoMC45NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zaXh0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC00ZW0pIHNjYWxlKDAuODUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuY2FyZDVfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDU7XG4gICAgICAgICAgICAgICAgLy9zdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cigncmVsJywgJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cigncmVsJyk7XG5cbiAgICAgICAgICAgICAgICAvKiogY2FyZCBmdW5jdGlvbmFsaXR5IHN0YXJ0IGhlcmUgKiovXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0X2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTRlbSkgc2NhbGUoMC44NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk3J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNi41ZW0pIHNjYWxlKDAuNzUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtOWVtKSBzY2FsZSgwLjY1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTUnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZvdXJ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xMS41ZW0pIHNjYWxlKDAuNTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZmlmdGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2l4dGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMS42ZW0pIHNjYWxlKDAuOTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcuY2FyZDZfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDY7XG4gICAgICAgICAgICAgICAgLy9zdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cigncmVsJywgJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cigncmVsJyk7XG5cbiAgICAgICAgICAgICAgICAvKiogY2FyZCBmdW5jdGlvbmFsaXR5IHN0YXJ0IGhlcmUgKiovXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0X2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTEuNmVtKSBzY2FsZSgwLjk1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTgnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNlY29uZF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC00ZW0pIHNjYWxlKDAuODUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNi41ZW0pIHNjYWxlKDAuNzUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZm91cnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTllbSkgc2NhbGUoMC42NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk1J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5maWZ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xMS41ZW0pIHNjYWxlKDAuNTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2l4dGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKCcucHVsc2UnKS5jbGljayhmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgICAgICBhY3RpdmVDYXJkTnVtYmVyID0gJCh0aGlzKS5hdHRyKCdkYXRhLWFjdGl2ZScpO1xuICAgICAgICAgICAgICAgIC8vc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy9zdGFydFRpbWVyKCk7XG5cbiAgICAgICAgICAgICAgICB2YXIgdGhlY2hvc2Vub25lID0gJCh0aGlzKS5hdHRyKCdkYXRhLWJveCcpO1xuICAgICAgICAgICAgICAgIHZhciBpbm5lcl90ZXN0ID0gJCh0aGlzKS5hdHRyKCdkYXRhLXRleHQnKTtcblxuICAgICAgICAgICAgICAgIC8vZGF0YS1ib3g9XCJuZXdib3hlczQtMlwiIGRhdGEtdGV4dD1cImlubmVyLTRcIlxuXG4gICAgICAgICAgICAgICAgJCgnLnB1bHNlJykucmVtb3ZlQ2xhc3MoJ3B1bHNlQWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygncHVsc2VBY3RpdmUnKTtcblxuICAgICAgICAgICAgICAgICQoJy5uZXdib3hlcy0yJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICQoJy51c2VyRXhwQm94aW5uZXInKS5oaWRlKCk7XG4gICAgICAgICAgICAgICAgJCgnIycgKyB0aGVjaG9zZW5vbmUpLmZhZGVJbig2MDApO1xuICAgICAgICAgICAgICAgICQoJyMnICsgaW5uZXJfdGVzdCkuZmFkZUluKDYwMCk7XG4gICAgICAgICAgICAgICAgLy8kKCcjJyArIHRoZWNob3Nlbm9uZSkuc2hvdygpO1xuICAgICAgICAgICAgICAgIC8vJCgnIycgKyBpbm5lcl90ZXN0KS5zaG93KCk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgaWYgKCQoJy5wdWxzZScpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdGFydFRpbWVyKCkge1xuICAgICAgICAgICAgICAgICAgICBtb3ZpbmdDYXJkcyA9IHNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vdmVSaWdodCgpO1xuICAgICAgICAgICAgICAgICAgICB9LCA3MDAwKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBzdG9wVGltZXIoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwobW92aW5nQ2FyZHMpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIG1vdmVSaWdodCgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGxlbiA9ICQoJy5wdWxzZScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGVuLmxlbmd0aCA9PSBhY3RpdmVDYXJkTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnB1bHNlXCIpLmVxKDApLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKFwiLnB1bHNlXCIpLmVxKGFjdGl2ZUNhcmROdW1iZXIpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc3RhcnRUaW1lcigpO1xuICAgICAgICAgICAgICAgICQoXCIucHVsc2VcIikuZXEoMCkudHJpZ2dlcignY2xpY2snKTtcblxuICAgICAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgYXV0b1BsYXkgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gUGxheSB2aWRlbyBvbiBwbGF5XG5cbiAgICAgICAgICQoXCIubW9kYWxcIikub24oJ3Nob3duLmJzLm1vZGFsJywgZnVuY3Rpb24gKGV2KSB7IFxuICAgICAgICAgICAgdmFyICR0aGlzMiA9ICQodGhpcyk7IFxuICAgICAgICAgICAgdmFyICRmcmFtZTIgPSAkdGhpczIuZmluZCgnLm1vZGFsLWNvbnRlbnQgaWZyYW1lJyk7IFxuICAgICAgICAgICAgLy8kZnJhbWUyWzBdLnNyYyArPSBcIjFcIjsgXG4gICAgICAgICAgICAkZnJhbWUyLmF0dHIoXCJzcmNcIiwgJGZyYW1lMi5hdHRyKFwic3JjXCIpLnJlcGxhY2UoXCJhdXRvcGxheT0wXCIsIFwiYXV0b3BsYXk9MVwiKSlcbiAgICAgICAgIH0pO1xuXG4gICAgICAgIC8vU3RvcCB2aWRlbyBvbiBwbGF5XG5cbiAgICAgICAgICQoXCIubW9kYWxcIikub24oJ2hpZGRlbi5icy5tb2RhbCcsIGZ1bmN0aW9uIChlKSB7IFxuICAgICAgICAgICAgdmFyICR0aGlzID0gJCh0aGlzKTsgXG4gICAgICAgICAgICB2YXIgJGZyYW1lID0gJHRoaXMuZmluZCgnLm1vZGFsLWNvbnRlbnQgaWZyYW1lJyk7XG4gICAgICAgICAgICAkZnJhbWUuYXR0cihcInNyY1wiLCAkZnJhbWUuYXR0cihcInNyY1wiKS5yZXBsYWNlKFwiYXV0b3BsYXk9MVwiLCBcImF1dG9wbGF5PTBcIikpXG4gICAgICAgICAgICAvLyRmcmFtZS5hdHRyKFwic3JjXCIsICRmcmFtZS5hdHRyKFwic3JjXCIpKTsgXG4gICAgICAgICB9KTtcblxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciByZXZlYWwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAkKCcuYmFubmVyLXNsaWRlcicpLmFkZENsYXNzKCdyZXZlYWwnKTtcbiAgICAgICAgICBjb25zb2xlLmxvZygncmV2ZWFsJyk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGZhcVNjcm9sbCA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgJCgnLnBhZ2UtZmFxIGFbaHJlZio9XCIjXCJdOm5vdChbaHJlZj1cIiNcIl0pJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldCA9IC0yMDA7IC8vIDwtLSBjaGFuZ2UgdGhlIHZhbHVlIGhlcmVcbiAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpID09IHRoaXMucGF0aG5hbWUucmVwbGFjZSgvXlxcLy8sJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRhcmdldCA9ICQodGhpcy5oYXNoKTtcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0Lmxlbmd0aCA/IHRhcmdldCA6ICQoJ1tuYW1lPScgKyB0aGlzLmhhc2guc2xpY2UoMSkgKyddJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAkKCdodG1sLCBib2R5JykuYW5pbWF0ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsVG9wOiB0YXJnZXQub2Zmc2V0KCkudG9wICsgb2Zmc2V0XG4gICAgICAgICAgICAgICAgICAgICAgICB9LCAxMDAwKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9O1xuXG5cblxuICAgICAgICBmdW5jdGlvbiBwcmVsb2FkSW1hZ2UoaW1nKSB7XG4gICAgICAgICAgY29uc3Qgc3JjID0gaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcbiAgICAgICAgICBpZiAoIXNyYykgeyByZXR1cm47IH1cbiAgICAgICAgICBpbWcuc3JjID0gc3JjO1xuICAgICAgICB9XG5cbiAgICAgICAgZnVuY3Rpb24gcHJlbG9hZEJhY2tJbWFnZShpbWcpIHtcbiAgICAgICAgICBjb25zdCBzcmMgPSBpbWcuZ2V0QXR0cmlidXRlKCdkYXRhLXN0eWxlJyk7XG4gICAgICAgICAgXG4gICAgICAgICAgaWYgKCFzcmMpIHtcbiAgICAgICAgICAgIHZhciBjbGFzc05hbWUgPSBpbWcuY2xhc3NOYW1lO1xuICAgICAgICAgICAgaW1nLmNsYXNzTmFtZSA9IGNsYXNzTmFtZSArICcgdmlzaWJsZSc7XG5cbiAgICAgICAgICB9IGVsc2UgeyAgXG4gICAgICAgICAgICBpZihpbWcuZ2V0QXR0cmlidXRlKCdzdHlsZScpKSB7XG4gICAgICAgICAgICAgIHZhciBzdHlsZSA9IGltZy5nZXRBdHRyaWJ1dGUoJ3N0eWxlJyk7XG4gICAgICAgICAgICAgIGltZy5zdHlsZSA9IHNyYyArIFwiOyBcIiArIHN0eWxlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgaW1nLnN0eWxlID0gc3JjO1xuICAgICAgICAgICAgfSAgIFxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBsYXp5TG9hZCA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICAvKiBMQVpZIExPQUQgSU1BR0VTICovXG4gICAgICAgICAgICB2YXIgaW1hZ2VzVHlwZSA9IFtcIltkYXRhLXNyY11cIiwgXCIubGF6eS1iYWNrZ3JvdW5kXCJdOyAgIFxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHsgLy8gaWYgaXQncyBzdXBwb3J0ZWRcblxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbmZpZyA9IHtcbiAgICAgICAgICAgICAgICAgIHJvb3RNYXJnaW46ICcwcHggMHB4IDUwcHggMHB4JyxcbiAgICAgICAgICAgICAgICAgIHRocmVzaG9sZDogMFxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICBsZXQgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24gKGVudHJpZXMsIHNlbGYpIHtcbiAgICAgICAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaChlbnRyeSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGBJbWFnZSAke2VudHJ5LnRhcmdldC5zcmN9IGlzIGluIHRoZSB2aWV3cG9ydCFgKTtcbiAgICAgICAgICAgICAgICAgICAgICBpZihlbnRyeS50YXJnZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVsb2FkSW1hZ2UoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcmVsb2FkQmFja0ltYWdlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgfSAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAvLyBTdG9wIHdhdGNoaW5nIGFuZCBsb2FkIHRoZSBpbWFnZVxuICAgICAgICAgICAgICAgICAgICAgIHNlbGYudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0sIGNvbmZpZyk7IFxuICAgICAgICAgIFxuICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW1hZ2VzVHlwZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGltYWdlc1R5cGVbaV0pO1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICAgICAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShpbWFnZSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgfSBlbHNlIHsgLy8gbm90IHN1cHBvcnRlZFxuICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgaW1hZ2VzVHlwZS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBpbWFnZXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGltYWdlc1R5cGVbaV0pO1xuXG4gICAgICAgICAgICAgICAgaW1hZ2VzLmZvckVhY2goaW1hZ2UgPT4ge1xuICAgICAgICAgICAgICAgICAgaWYoaW1hZ2UuZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZEltYWdlKGltYWdlKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHByZWxvYWRCYWNrSW1hZ2UoaW1hZ2UpO1xuICAgICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHZhciB2aWREZWZlciA9IGZ1bmN0aW9uKCl7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaWZyYW1lJyk7XG4gICAgICAgICAgICBmb3IgKHZhciBpPTA7IGk8dmlkRGVmZXIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZih2aWREZWZlcltpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpIHtcbiAgICAgICAgICAgICAgICAgICAgdmlkRGVmZXJbaV0uc2V0QXR0cmlidXRlKCdzcmMnLHZpZERlZmVyW2ldLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKSk7XG4gICAgICAgICAgICAgICAgfSBcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcblxuXG5cblxuICAgICAgICByZXR1cm4ge1xuXG4gICAgICAgICAgICBpbml0OiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgbW9iaWxlTmF2KCk7XG4gICAgICAgICAgICAgICAgc2VhcmNoKCk7XG4gICAgICAgICAgICAgICAgc2xpY2soKTtcbiAgICAgICAgICAgICAgICBjYXJkcygpO1xuICAgICAgICAgICAgICAgIG9uSGFzaENoYW5nZSgpO1xuICAgICAgICAgICAgICAgIGF1dG9QbGF5KCk7XG4gICAgICAgICAgICAgICAgcmV2ZWFsKCk7XG4gICAgICAgICAgICAgICAgZmFxU2Nyb2xsKCk7XG4gICAgICAgICAgICAgICAgbGF6eUxvYWQoKTtcbiAgICAgICAgICAgICAgICB2aWREZWZlcigpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgIH1cblxuICAgIH0pKCk7XG5cbiAgICBuYXNwLmluaXQoKTtcblxuXG5cblxuXG59KTtcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9hc3NldHMvanMvY3VzdG9tL3RoZW1lLmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2Fzc2V0cy9zY3NzL3RoZW1lLnNjc3Ncbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIl0sInNvdXJjZVJvb3QiOiIifQ==