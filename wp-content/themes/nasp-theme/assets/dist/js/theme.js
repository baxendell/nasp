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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgY2ZkNTdhNzY5OTlkMWJlYmQ1MDQiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2N1c3RvbS90aGVtZS5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvc2Nzcy90aGVtZS5zY3NzPzhmODYiXSwibmFtZXMiOlsialF1ZXJ5IiwiZG9jdW1lbnQiLCJyZWFkeSIsIiQiLCJuYXNwIiwibW9iaWxlTmF2Iiwib24iLCJhZGRDbGFzcyIsImRlbGF5IiwicXVldWUiLCJkZXF1ZXVlIiwicmVtb3ZlQ2xhc3MiLCJjbGljayIsIm5vdCIsInNpYmxpbmdzIiwic2xpZGVVcCIsInNsaWRlVG9nZ2xlIiwic2VhcmNoIiwidG9nZ2xlQ2xhc3MiLCJjb25zb2xlIiwibG9nIiwib25IYXNoQ2hhbmdlIiwiaGFzaCIsIndpbmRvdyIsImxvY2F0aW9uIiwidHJpZ2dlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJzbGljayIsInNsaWRlc1RvU2hvdyIsImluZmluaXRlIiwiYXV0b3BsYXkiLCJzbGlkZXNUb1Njcm9sbCIsImFycm93cyIsImRvdHMiLCJzcGVlZCIsImZhZGUiLCJjc3NFYXNlIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJhdXRvcGxheVNwZWVkIiwicHJldkFycm93IiwibmV4dEFycm93IiwicmVzcG9uc2l2ZSIsImJyZWFrcG9pbnQiLCJzZXR0aW5ncyIsImNhcmRzIiwiYWN0aXZlQ2FyZE51bWJlciIsIm1vdmluZ0NhcmRzIiwibW92ZVJpZ2h0IiwibGVuIiwibGVuZ3RoIiwiY2hpbGRyZW4iLCJuZXh0IiwiYXR0ciIsInBhcmVudCIsInJlbW92ZUF0dHIiLCJjc3MiLCJ0aGVjaG9zZW5vbmUiLCJpbm5lcl90ZXN0IiwiaGlkZSIsImZhZGVJbiIsInN0YXJ0VGltZXIiLCJzZXRJbnRlcnZhbCIsInN0b3BUaW1lciIsImNsZWFySW50ZXJ2YWwiLCJlcSIsImF1dG9QbGF5IiwiZXYiLCIkdGhpczIiLCIkZnJhbWUyIiwiZmluZCIsInJlcGxhY2UiLCJlIiwiJHRoaXMiLCIkZnJhbWUiLCJyZXZlYWwiLCJmYXFTY3JvbGwiLCJvZmZzZXQiLCJwYXRobmFtZSIsImhvc3RuYW1lIiwidGFyZ2V0Iiwic2xpY2UiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwidG9wIiwicHJlbG9hZEltYWdlIiwiaW1nIiwic3JjIiwiZ2V0QXR0cmlidXRlIiwicHJlbG9hZEJhY2tJbWFnZSIsImNsYXNzTmFtZSIsInN0eWxlIiwibGF6eUxvYWQiLCJpbWFnZXNUeXBlIiwiaW1hZ2VzIiwiY29uZmlnIiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwic2VsZiIsImZvckVhY2giLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidW5vYnNlcnZlIiwiaSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJvYnNlcnZlIiwiaW1hZ2UiLCJ2aWREZWZlciIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2V0QXR0cmlidXRlIiwiaW5pdCJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFLO0FBQ0w7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7QUFFQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM3REFBLE9BQU9DLFFBQVAsRUFBaUJDLEtBQWpCLENBQXVCLFVBQVVDLENBQVYsRUFBYTs7QUFFaEMsUUFBSUMsT0FBUSxZQUFZOztB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SVosU0FBUzdGLFNBQVMwRyxnQkFBVCxDQUEwQmQsV0FBV2EsQ0FBWCxDQUExQixDQUFiOztBQUVBWiwyQkFBT1EsT0FBUCxDQUFlLGlCQUFTO0FBQ3RCLDRCQUFHTyxNQUFNckIsWUFBTixDQUFtQixVQUFuQixDQUFILEVBQW1DO0FBQy9CSCx5Q0FBYXdCLEtBQWI7QUFDSCx5QkFGRCxNQUdLO0FBQ0RwQiw2Q0FBaUJvQixLQUFqQjtBQUNIO0FBQ0YscUJBUEQ7QUFRRDtBQUNGO0FBQ0osU0FoREQ7QUFpREEsWUFBSUMsV0FBVyxTQUFYQSxRQUFXLEdBQVU7QUFDckI3RyxxQkFBUzhHLG9CQUFULENBQThCLFFBQTlCO0FBQ0EsaUJBQUssSUFBSUwsSUFBRSxDQUFYLEVBQWNBLElBQUVJLFNBQVM1RCxNQUF6QixFQUFpQ3dELEdBQWpDLEVBQXNDO0FBQ2xDLG9CQUFHSSxTQUFTSixDQUFULEVBQVlsQixZQUFaLENBQXlCLFVBQXpCLENBQUgsRUFBeUM7QUFDckNzQiw2QkFBU0osQ0FBVCxFQUFZTSxZQUFaLENBQXlCLEtBQXpCLEVBQStCRixTQUFTSixDQUFULEVBQVlsQixZQUFaLENBQXlCLFVBQXpCLENBQS9CO0FBQ0g7QUFDSjtBQUNKLFNBUEQ7O0FBWUEsZUFBTzs7QUFFSHlCLGtCQUFNLGdCQUFZO0FBQ2Q1RztBQUNBWTtBQUNBVTtBQUNBa0I7QUFDQXhCO0FBQ0E2QztBQUNBUztBQUNBQztBQUNBZ0I7QUFDQWtCO0FBQ0g7O0FBYkUsU0FBUDtBQWlCSCxLQWhuQlUsRUFBWDs7QUFrbkJBMUcsU0FBSzZHLElBQUw7QUFNSCxDQTFuQkQsRTs7Ozs7O0FDQUEseUMiLCJmaWxlIjoiL2Fzc2V0cy9kaXN0L2pzL3RoZW1lLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL1wiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGNmZDU3YTc2OTk5ZDFiZWJkNTA0IiwialF1ZXJ5KGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbiAoJCkge1xuXG4gICAgdmFyIG5hc3AgPSAoZnVuY3Rpb24gKCkge1xuXG4gICAgICAgIHZhciBtb2JpbGVOYXYgPSBmdW5jdGlvbigpIHtcblxuICAgICAgICAgICAgLy9GdWxsIFNjcmVlbiBNZW51XG4gICAgICAgICAgICAkKFwiLm5hdi1vcGVuZXJcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJChcIi5mdWxsLXNjcmVlbi1tZW51XCIpLmFkZENsYXNzKFwibmF2LWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkKCcuZnVsbC1zY3JlZW4tbWVudS1jbG9zZScpLmRlbGF5KDQwMCkucXVldWUoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKFwiY2xvc2UtYWN0aXZlXCIpLmRlcXVldWUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnUtY2xvc2VcIikub24oXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5yZW1vdmVDbGFzcyhcImNsb3NlLWFjdGl2ZVwiKTtcbiAgICAgICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnVcIikuZGVsYXkoMjUwKS5xdWV1ZShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICQodGhpcykucmVtb3ZlQ2xhc3MoXCJuYXYtYWN0aXZlXCIpLmRlcXVldWUoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvKiBNZW51ICovXG4gICAgICAgICAgICAkKFwiLmZ1bGwtc2NyZWVuLW1lbnUtY29udGVudC1tZW51IC5kcm9wZG93biBhXCIpLmNsaWNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAkKCcuZHJvcGRvd24gPiB1bCcpLm5vdCgkKHRoaXMpLnNpYmxpbmdzKCd1bCcpKS5zbGlkZVVwKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5zaWJsaW5ncygnLmRyb3Bkb3duLW1lbnUnKS5zbGlkZVRvZ2dsZSgpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIHZhciBzZWFyY2ggPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIuYnRuLXNlYXJjaFwiKS5vbihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICQoJy5zZWFyY2gtYmFyJykudG9nZ2xlQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3NlYXJjaCBjbGljaycpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIG9uSGFzaENoYW5nZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgdmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaDtcblxuICAgICAgICAgICAgaWYgKGhhc2gpIHtcbiAgICAgICAgICAgICAgICAvLyB1c2luZyBFUzYgdGVtcGxhdGUgc3RyaW5nIHN5bnRheFxuICAgICAgICAgICAgICAgICQoYFtkYXRhLXRvZ2dsZT1cImxpc3RcIl1baHJlZj1cIiR7aGFzaH1cIl1gKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ2hhc2hjaGFuZ2UnLCBvbkhhc2hDaGFuZ2UsIGZhbHNlKTtcblxuICAgICAgICB2YXIgc2xpY2sgPSBmdW5jdGlvbiAoKSB7XG5cbiAgICAgICAgICAgLy8gRGVhbCBTTElERVJcbiAgICAgICAgICAgICQoXCIuZGVhbC1iYXItc2xpZGVyXCIpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgICAgICAgICAgYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAvL2FwcGVuZEFycm93czogJy5wcmFjdGljZS1zbGlkZXJfX2Fycm93cycsICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGRvdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgICAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgICAgICAgICBjc3NFYXNlOiAnbGluZWFyJ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgIC8vIEJhbm5lciBTTElERVJcbiAgICAgICAgICAgICQoXCIuYmFubmVyLXNsaWRlci13cmFwXCIpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDEsXG4gICAgICAgICAgICAgICAgaW5maW5pdGU6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICAgICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgICAgICAgICAgLy9hcHBlbmRBcnJvd3M6ICcucHJhY3RpY2Utc2xpZGVyX19hcnJvd3MnLCAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBkb3RzOiB0cnVlLFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIFRlc3RpbW9uaWFsIFNMSURFUlxuICAgICAgICAgICAgJChcIi50ZXN0aW1vbmlhbHMtc2xpZGVyXCIpLnNsaWNrKHtcbiAgICAgICAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGNlbnRlclBhZGRpbmc6ICczMDBweCcsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5U3BlZWQ6IDUwMDAsXG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgICAgICAgICAgYXJyb3dzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBkb3RzOiBmYWxzZSxcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBUZXN0aW1vbmlhbCBTTElERVJcbiAgICAgICAgICAgICQoXCIuY2FyZF9saXN0X2JveFwiKS5zbGljayh7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiA0LFxuICAgICAgICAgICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIGF1dG9wbGF5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzbGlkZXNUb1Njcm9sbDogMSxcbiAgICAgICAgICAgICAgICBhcnJvd3M6IHRydWUsXG4gICAgICAgICAgICAgICAgcHJldkFycm93OiAnPGkgY2xhc3M9XCJmYWwgZmEtYXJyb3ctY2lyY2xlLWxlZnRcIj48L2k+JyxcbiAgICAgICAgICAgICAgICBuZXh0QXJyb3c6ICc8aSBjbGFzcz1cImZhbCBmYS1hcnJvdy1jaXJjbGUtcmlnaHRcIj48L2k+JywgXG4gICAgICAgICAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgICAgICAgICAgcmVzcG9uc2l2ZTogW1xuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVha3BvaW50OiA5OTEsXG4gICAgICAgICAgICAgICAgICAgICAgICBzZXR0aW5nczoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWtwb2ludDogNzY3LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzbGlkZXNUb1Nob3c6IDIsXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9KTsgICAgICAgICAgICAgICAgICAgICAgIFxuXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGNhcmRzID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8qKiBob21lIHBhZ2UgY2FyZHMgc2VjdGlvbiAqKi9cbiAgICAgICAgICAgIHZhciBhY3RpdmVDYXJkTnVtYmVyID0gMTtcbiAgICAgICAgICAgIHZhciBtb3ZpbmdDYXJkcyA9IG51bGw7XG5cbiAgICAgICAgICAgIC8qXG4gICAgICAgICAgICBmdW5jdGlvbiBzdGFydFRpbWVyKCkge1xuICAgICAgICAgICAgICAgIG1vdmluZ0NhcmRzID0gc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBtb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgICAgICB9LCA3MDAwKTtcbiAgICAgICAgICAgIH0gICAgICAgICAgICBcblxuICAgICAgICAgICAgIGZ1bmN0aW9uIHN0b3BUaW1lcigpIHtcbiAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG1vdmluZ0NhcmRzKTtcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgICAgICovXG5cbiAgICAgICAgICAgIGZ1bmN0aW9uIG1vdmVSaWdodCgpIHtcbiAgICAgICAgICAgICAgICB2YXIgbGVuID0gJCgnLmNhcmRfbGlzdCB1bC5jYXJkX2xpc3RfYm94IGxpJyk7XG4gICAgICAgICAgICAgICAgaWYgKGxlbi5sZW5ndGggPT0gYWN0aXZlQ2FyZE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAkKFwiLmNhcmRfbGlzdCB1bC5jYXJkX2xpc3RfYm94IGxpOm50aC1jaGlsZCgxKVwiKS5jaGlsZHJlbignYScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgJChcIi5jYXJkX2xpc3QgdWwuY2FyZF9saXN0X2JveCBsaTpudGgtY2hpbGQoXCIgKyBhY3RpdmVDYXJkTnVtYmVyICsgXCIpXCIpLm5leHQoKS5jaGlsZHJlbignYScpLnRyaWdnZXIoJ2NsaWNrJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgLypcbiAgICAgICAgICAgICBpZiAoJCgnLmNhcmRfbGlzdCcpLmxlbmd0aCA+IDApIHtcblxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgICovXG4gICAgICAgICAgICAkKCcuY2FyZDFfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDE7XG4gICAgICAgICAgICAgICAvLyBzdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cigncmVsJywgJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cigncmVsJyk7XG5cblxuICAgICAgICAgICAgICAgIC8qKiBjYXJkIGZ1bmN0aW9uYWxpdHkgc3RhcnQgaGVyZSAqKi9cbiAgICAgICAgICAgICAgICAkKCcuZmlyc3RfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2Vjb25kX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTEuNmVtKSBzY2FsZSgwLjk1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTgnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnRoaXJkX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTRlbSkgc2NhbGUoMC44NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk3J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5mb3VydGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNi41ZW0pIHNjYWxlKDAuNzUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZmlmdGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtOWVtKSBzY2FsZSgwLjY1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTUnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNpeHRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTExLjVlbSkgc2NhbGUoMC41NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk0J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAkKCcuY2FyZDJfY2xpY2snKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9IDI7XG4gICAgICAgICAgICAgICAgLy9zdG9wVGltZXIoKTtcbiAgICAgICAgICAgICAgICAvL3N0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYXR0cigncmVsJywgJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQ2xhc3MoJ2FjdGl2ZS1jYXJkJyk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5wYXJlbnQoKS5zaWJsaW5ncygpLmNoaWxkcmVuKCkucmVtb3ZlQXR0cigncmVsJyk7XG5cbiAgICAgICAgICAgICAgICAvKiogY2FyZCBmdW5jdGlvbmFsaXR5IHN0YXJ0IGhlcmUgKiovXG4gICAgICAgICAgICAgICAgJCgnLmZpcnN0X2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTExLjVlbSkgc2NhbGUoMC41NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk0J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcudGhpcmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMS42ZW0pIHNjYWxlKDAuOTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZm91cnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTRlbSkgc2NhbGUoMC44NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk3J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5maWZ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC02LjVlbSkgc2NhbGUoMC43NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zaXh0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC05ZW0pIHNjYWxlKDAuNjUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnLmNhcmQzX2NsaWNrJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNhcmROdW1iZXIgPSAzO1xuICAgICAgICAgICAgICAgIC8vc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy9zdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlbCcsICdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3JlbCcpO1xuXG4gICAgICAgICAgICAgICAgLyoqIGNhcmQgZnVuY3Rpb25hbGl0eSBzdGFydCBoZXJlICoqL1xuICAgICAgICAgICAgICAgICQoJy5maXJzdF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC05ZW0pIHNjYWxlKDAuNjUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NSdcblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTEuNWVtKSBzY2FsZSgwLjU1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnRoaXJkX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMGVtKSBzY2FsZSgxKScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTknXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZvdXJ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xLjZlbSkgc2NhbGUoMC45NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5maWZ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC00ZW0pIHNjYWxlKDAuODUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2l4dGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNi41ZW0pIHNjYWxlKDAuNzUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NidcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgJCgnLmNhcmQ0X2NsaWNrJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNhcmROdW1iZXIgPSA0O1xuICAgICAgICAgICAgICAgIC8vc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy9zdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlbCcsICdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3JlbCcpO1xuXG4gICAgICAgICAgICAgICAgLyoqIGNhcmQgZnVuY3Rpb25hbGl0eSBzdGFydCBoZXJlICoqL1xuICAgICAgICAgICAgICAgICQoJy5maXJzdF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC02LjVlbSkgc2NhbGUoMC43NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk2J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtOWVtKSBzY2FsZSgwLjY1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTUnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnRoaXJkX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTExLjVlbSkgc2NhbGUoMC41NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk0J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5mb3VydGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgwZW0pIHNjYWxlKDEpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZmlmdGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMS42ZW0pIHNjYWxlKDAuOTUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5OCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2l4dGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNGVtKSBzY2FsZSgwLjg1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLmNhcmQ1X2NsaWNrJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNhcmROdW1iZXIgPSA1O1xuICAgICAgICAgICAgICAgIC8vc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy9zdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlbCcsICdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3JlbCcpO1xuXG4gICAgICAgICAgICAgICAgLyoqIGNhcmQgZnVuY3Rpb25hbGl0eSBzdGFydCBoZXJlICoqL1xuICAgICAgICAgICAgICAgICQoJy5maXJzdF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC00ZW0pIHNjYWxlKDAuODUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NydcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuc2Vjb25kX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTYuNWVtKSBzY2FsZSgwLjc1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTYnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnRoaXJkX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTllbSkgc2NhbGUoMC42NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk1J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5mb3VydGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTEuNWVtKSBzY2FsZSgwLjU1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZpZnRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMGVtKSBzY2FsZSgxKScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTknXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNpeHRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTEuNmVtKSBzY2FsZSgwLjk1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTgnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLmNhcmQ2X2NsaWNrJykuY2xpY2soZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGFjdGl2ZUNhcmROdW1iZXIgPSA2O1xuICAgICAgICAgICAgICAgIC8vc3RvcFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgLy9zdGFydFRpbWVyKCk7XG4gICAgICAgICAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlLWNhcmQnKTtcbiAgICAgICAgICAgICAgICAkKHRoaXMpLmF0dHIoJ3JlbCcsICdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUNsYXNzKCdhY3RpdmUtY2FyZCcpO1xuICAgICAgICAgICAgICAgICQodGhpcykucGFyZW50KCkuc2libGluZ3MoKS5jaGlsZHJlbigpLnJlbW92ZUF0dHIoJ3JlbCcpO1xuXG4gICAgICAgICAgICAgICAgLyoqIGNhcmQgZnVuY3Rpb25hbGl0eSBzdGFydCBoZXJlICoqL1xuICAgICAgICAgICAgICAgICQoJy5maXJzdF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC0xLjZlbSkgc2NhbGUoMC45NSknLFxuICAgICAgICAgICAgICAgICAgICAnb3BhY2l0eSc6ICcxJyxcbiAgICAgICAgICAgICAgICAgICAgJ3Zpc2liaWxpdHknOiAndmlzaWJsZScsXG4gICAgICAgICAgICAgICAgICAgICd6LWluZGV4JzogJzk4J1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICQoJy5zZWNvbmRfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtNGVtKSBzY2FsZSgwLjg1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTcnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnRoaXJkX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoLTYuNWVtKSBzY2FsZSgwLjc1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTYnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLmZvdXJ0aF9jYXJkJykuY3NzKHtcbiAgICAgICAgICAgICAgICAgICAgJ3RyYW5zZm9ybSc6ICd0cmFuc2xhdGVZKC05ZW0pIHNjYWxlKDAuNjUpJyxcbiAgICAgICAgICAgICAgICAgICAgJ29wYWNpdHknOiAnMScsXG4gICAgICAgICAgICAgICAgICAgICd2aXNpYmlsaXR5JzogJ3Zpc2libGUnLFxuICAgICAgICAgICAgICAgICAgICAnei1pbmRleCc6ICc5NSdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAkKCcuZmlmdGhfY2FyZCcpLmNzcyh7XG4gICAgICAgICAgICAgICAgICAgICd0cmFuc2Zvcm0nOiAndHJhbnNsYXRlWSgtMTEuNWVtKSBzY2FsZSgwLjU1KScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTQnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgJCgnLnNpeHRoX2NhcmQnKS5jc3Moe1xuICAgICAgICAgICAgICAgICAgICAndHJhbnNmb3JtJzogJ3RyYW5zbGF0ZVkoMGVtKSBzY2FsZSgxKScsXG4gICAgICAgICAgICAgICAgICAgICdvcGFjaXR5JzogJzEnLFxuICAgICAgICAgICAgICAgICAgICAndmlzaWJpbGl0eSc6ICd2aXNpYmxlJyxcbiAgICAgICAgICAgICAgICAgICAgJ3otaW5kZXgnOiAnOTknXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgJCgnLnB1bHNlJykuY2xpY2soZnVuY3Rpb24gKCkge1xuXG4gICAgICAgICAgICAgICAgYWN0aXZlQ2FyZE51bWJlciA9ICQodGhpcykuYXR0cignZGF0YS1hY3RpdmUnKTtcbiAgICAgICAgICAgICAgICAvL3N0b3BUaW1lcigpO1xuICAgICAgICAgICAgICAgIC8vc3RhcnRUaW1lcigpO1xuXG4gICAgICAgICAgICAgICAgdmFyIHRoZWNob3Nlbm9uZSA9ICQodGhpcykuYXR0cignZGF0YS1ib3gnKTtcbiAgICAgICAgICAgICAgICB2YXIgaW5uZXJfdGVzdCA9ICQodGhpcykuYXR0cignZGF0YS10ZXh0Jyk7XG5cbiAgICAgICAgICAgICAgICAvL2RhdGEtYm94PVwibmV3Ym94ZXM0LTJcIiBkYXRhLXRleHQ9XCJpbm5lci00XCJcblxuICAgICAgICAgICAgICAgICQoJy5wdWxzZScpLnJlbW92ZUNsYXNzKCdwdWxzZUFjdGl2ZScpO1xuICAgICAgICAgICAgICAgICQodGhpcykuYWRkQ2xhc3MoJ3B1bHNlQWN0aXZlJyk7XG5cbiAgICAgICAgICAgICAgICAkKCcubmV3Ym94ZXMtMicpLmhpZGUoKTtcbiAgICAgICAgICAgICAgICAkKCcudXNlckV4cEJveGlubmVyJykuaGlkZSgpO1xuICAgICAgICAgICAgICAgICQoJyMnICsgdGhlY2hvc2Vub25lKS5mYWRlSW4oNjAwKTtcbiAgICAgICAgICAgICAgICAkKCcjJyArIGlubmVyX3Rlc3QpLmZhZGVJbig2MDApO1xuICAgICAgICAgICAgICAgIC8vJCgnIycgKyB0aGVjaG9zZW5vbmUpLnNob3coKTtcbiAgICAgICAgICAgICAgICAvLyQoJyMnICsgaW5uZXJfdGVzdCkuc2hvdygpO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGlmICgkKCcucHVsc2UnKS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc3RhcnRUaW1lcigpIHtcbiAgICAgICAgICAgICAgICAgICAgbW92aW5nQ2FyZHMgPSBzZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtb3ZlUmlnaHQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSwgNzAwMCk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgZnVuY3Rpb24gc3RvcFRpbWVyKCkge1xuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKG1vdmluZ0NhcmRzKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBmdW5jdGlvbiBtb3ZlUmlnaHQoKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBsZW4gPSAkKCcucHVsc2UnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxlbi5sZW5ndGggPT0gYWN0aXZlQ2FyZE51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wdWxzZVwiKS5lcSgwKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgJChcIi5wdWxzZVwiKS5lcShhY3RpdmVDYXJkTnVtYmVyKS50cmlnZ2VyKCdjbGljaycpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHN0YXJ0VGltZXIoKTtcbiAgICAgICAgICAgICAgICAkKFwiLnB1bHNlXCIpLmVxKDApLnRyaWdnZXIoJ2NsaWNrJyk7XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGF1dG9QbGF5ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIFBsYXkgdmlkZW8gb24gcGxheVxuXG4gICAgICAgICAkKFwiLm1vZGFsXCIpLm9uKCdzaG93bi5icy5tb2RhbCcsIGZ1bmN0aW9uIChldikgeyBcbiAgICAgICAgICAgIHZhciAkdGhpczIgPSAkKHRoaXMpOyBcbiAgICAgICAgICAgIHZhciAkZnJhbWUyID0gJHRoaXMyLmZpbmQoJy5tb2RhbC1jb250ZW50IGlmcmFtZScpOyBcbiAgICAgICAgICAgIC8vJGZyYW1lMlswXS5zcmMgKz0gXCIxXCI7IFxuICAgICAgICAgICAgJGZyYW1lMi5hdHRyKFwic3JjXCIsICRmcmFtZTIuYXR0cihcInNyY1wiKS5yZXBsYWNlKFwiYXV0b3BsYXk9MFwiLCBcImF1dG9wbGF5PTFcIikpXG4gICAgICAgICB9KTtcblxuICAgICAgICAvL1N0b3AgdmlkZW8gb24gcGxheVxuXG4gICAgICAgICAkKFwiLm1vZGFsXCIpLm9uKCdoaWRkZW4uYnMubW9kYWwnLCBmdW5jdGlvbiAoZSkgeyBcbiAgICAgICAgICAgIHZhciAkdGhpcyA9ICQodGhpcyk7IFxuICAgICAgICAgICAgdmFyICRmcmFtZSA9ICR0aGlzLmZpbmQoJy5tb2RhbC1jb250ZW50IGlmcmFtZScpO1xuICAgICAgICAgICAgJGZyYW1lLmF0dHIoXCJzcmNcIiwgJGZyYW1lLmF0dHIoXCJzcmNcIikucmVwbGFjZShcImF1dG9wbGF5PTFcIiwgXCJhdXRvcGxheT0wXCIpKVxuICAgICAgICAgICAgLy8kZnJhbWUuYXR0cihcInNyY1wiLCAkZnJhbWUuYXR0cihcInNyY1wiKSk7IFxuICAgICAgICAgfSk7XG5cbiAgICAgICAgfTtcblxuICAgICAgICB2YXIgcmV2ZWFsID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCgnLmJhbm5lci1zbGlkZXInKS5hZGRDbGFzcygncmV2ZWFsJyk7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3JldmVhbCcpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBmYXFTY3JvbGwgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoJy5wYWdlLWZhcSBhW2hyZWYqPVwiI1wiXTpub3QoW2hyZWY9XCIjXCJdKScpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSAtMjAwOyAvLyA8LS0gY2hhbmdlIHRoZSB2YWx1ZSBoZXJlXG4gICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSA9PSB0aGlzLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCcnKSAmJiBsb2NhdGlvbi5ob3N0bmFtZSA9PSB0aGlzLmhvc3RuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldC5sZW5ndGggPyB0YXJnZXQgOiAkKCdbbmFtZT0nICsgdGhpcy5oYXNoLnNsaWNlKDEpICsnXScpO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGFyZ2V0Lmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogdGFyZ2V0Lm9mZnNldCgpLnRvcCArIG9mZnNldFxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgMTAwMCk7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfTtcblxuXG5cbiAgICAgICAgZnVuY3Rpb24gcHJlbG9hZEltYWdlKGltZykge1xuICAgICAgICAgIGNvbnN0IHNyYyA9IGltZy5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgICAgICAgaWYgKCFzcmMpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgaW1nLnNyYyA9IHNyYztcbiAgICAgICAgfVxuXG4gICAgICAgIGZ1bmN0aW9uIHByZWxvYWRCYWNrSW1hZ2UoaW1nKSB7XG4gICAgICAgICAgY29uc3Qgc3JjID0gaW1nLmdldEF0dHJpYnV0ZSgnZGF0YS1zdHlsZScpO1xuICAgICAgICAgIFxuICAgICAgICAgIGlmICghc3JjKSB7XG4gICAgICAgICAgICB2YXIgY2xhc3NOYW1lID0gaW1nLmNsYXNzTmFtZTtcbiAgICAgICAgICAgIGltZy5jbGFzc05hbWUgPSBjbGFzc05hbWUgKyAnIHZpc2libGUnO1xuXG4gICAgICAgICAgfSBlbHNlIHsgIFxuICAgICAgICAgICAgaWYoaW1nLmdldEF0dHJpYnV0ZSgnc3R5bGUnKSkge1xuICAgICAgICAgICAgICB2YXIgc3R5bGUgPSBpbWcuZ2V0QXR0cmlidXRlKCdzdHlsZScpO1xuICAgICAgICAgICAgICBpbWcuc3R5bGUgPSBzcmMgKyBcIjsgXCIgKyBzdHlsZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGltZy5zdHlsZSA9IHNyYztcbiAgICAgICAgICAgIH0gICBcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgbGF6eUxvYWQgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgLyogTEFaWSBMT0FEIElNQUdFUyAqL1xuICAgICAgICAgICAgdmFyIGltYWdlc1R5cGUgPSBbXCJbZGF0YS1zcmNdXCIsIFwiLmxhenktYmFja2dyb3VuZFwiXTsgICBcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSB7IC8vIGlmIGl0J3Mgc3VwcG9ydGVkXG5cbiAgICAgICAgICAgICAgICBjb25zdCBjb25maWcgPSB7XG4gICAgICAgICAgICAgICAgICByb290TWFyZ2luOiAnMHB4IDBweCA1MHB4IDBweCcsXG4gICAgICAgICAgICAgICAgICB0aHJlc2hvbGQ6IDBcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICAgICAgbGV0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKGZ1bmN0aW9uIChlbnRyaWVzLCBzZWxmKSB7XG4gICAgICAgICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goZW50cnkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhgSW1hZ2UgJHtlbnRyeS50YXJnZXQuc3JjfSBpcyBpbiB0aGUgdmlld3BvcnQhYCk7XG4gICAgICAgICAgICAgICAgICAgICAgaWYoZW50cnkudGFyZ2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZEltYWdlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJlbG9hZEJhY2tJbWFnZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICAgIH0gICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgLy8gU3RvcCB3YXRjaGluZyBhbmQgbG9hZCB0aGUgaW1hZ2VcbiAgICAgICAgICAgICAgICAgICAgICBzZWxmLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9LCBjb25maWcpOyBcbiAgICAgICAgICBcbiAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGltYWdlc1R5cGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChpbWFnZXNUeXBlW2ldKTtcblxuICAgICAgICAgICAgICAgIGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgICAgICAgICAgIG9ic2VydmVyLm9ic2VydmUoaW1hZ2UpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9ICBcbiAgICAgICAgICAgIH0gZWxzZSB7IC8vIG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IGltYWdlc1R5cGUubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgaW1hZ2VzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChpbWFnZXNUeXBlW2ldKTtcblxuICAgICAgICAgICAgICAgIGltYWdlcy5mb3JFYWNoKGltYWdlID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmKGltYWdlLmdldEF0dHJpYnV0ZSgnZGF0YS1zcmMnKSkge1xuICAgICAgICAgICAgICAgICAgICAgIHByZWxvYWRJbWFnZShpbWFnZSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBwcmVsb2FkQmFja0ltYWdlKGltYWdlKTtcbiAgICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICB9IFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB2YXIgdmlkRGVmZXIgPSBmdW5jdGlvbigpe1xuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2lmcmFtZScpO1xuICAgICAgICAgICAgZm9yICh2YXIgaT0wOyBpPHZpZERlZmVyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYodmlkRGVmZXJbaV0uZ2V0QXR0cmlidXRlKCdkYXRhLXNyYycpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZpZERlZmVyW2ldLnNldEF0dHJpYnV0ZSgnc3JjJyx2aWREZWZlcltpXS5nZXRBdHRyaWJ1dGUoJ2RhdGEtc3JjJykpO1xuICAgICAgICAgICAgICAgIH0gXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cblxuXG5cbiAgICAgICAgcmV0dXJuIHtcblxuICAgICAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIG1vYmlsZU5hdigpO1xuICAgICAgICAgICAgICAgIHNlYXJjaCgpO1xuICAgICAgICAgICAgICAgIHNsaWNrKCk7XG4gICAgICAgICAgICAgICAgY2FyZHMoKTtcbiAgICAgICAgICAgICAgICBvbkhhc2hDaGFuZ2UoKTtcbiAgICAgICAgICAgICAgICBhdXRvUGxheSgpO1xuICAgICAgICAgICAgICAgIHJldmVhbCgpO1xuICAgICAgICAgICAgICAgIGZhcVNjcm9sbCgpO1xuICAgICAgICAgICAgICAgIGxhenlMb2FkKCk7XG4gICAgICAgICAgICAgICAgdmlkRGVmZXIoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9XG5cbiAgICB9KSgpO1xuXG4gICAgbmFzcC5pbml0KCk7XG5cblxuXG5cblxufSk7XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vYXNzZXRzL2pzL2N1c3RvbS90aGVtZS5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hc3NldHMvc2Nzcy90aGVtZS5zY3NzXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCJdLCJzb3VyY2VSb290IjoiIn0=