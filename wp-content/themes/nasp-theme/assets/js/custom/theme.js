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
        
        var search = function() {
            $(".btn-search").on("click", function() {
                $('.search-bar').toggleClass("active");
                console.log('search click');
            });
        };

        var onHashChange = function() {
            var hash = window.location.hash;

            if (hash) {
                // using ES6 template string syntax
                $(`[data-toggle="list"][href="${hash}"]`).trigger('click');
            }
        }

        window.addEventListener('hashchange', onHashChange, false);

        var slick = function () {

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
                dots: true,
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
                    },
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
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

        var autoPlay = function() {
        // Play video on play

         $(".modal").on('shown.bs.modal', function (ev) { 
            var $this2 = $(this); 
            var $frame2 = $this2.find('.modal-content iframe'); 
            //$frame2[0].src += "1"; 
            $frame2.attr("src", $frame2.attr("src").replace("autoplay=0", "autoplay=1"))
         });

        //Stop video on play

         $(".modal").on('hidden.bs.modal', function (e) { 
            var $this = $(this); 
            var $frame = $this.find('.modal-content iframe');
            $frame.attr("src", $frame.attr("src").replace("autoplay=1", "autoplay=0"))
            //$frame.attr("src", $frame.attr("src")); 
         });

        };

        var reveal = function() {
          $('.banner-slider').addClass('reveal');
          console.log('reveal');
        };

        var faqScroll = function() {
            $('.page-faq a[href*="#"]:not([href="#"])').click(function() {
                var offset = -200; // <-- change the value here
                if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
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
          const src = img.getAttribute('data-src');
          if (!src) { return; }
          img.src = src;
        }

        function preloadBackImage(img) {
          const src = img.getAttribute('data-style');
          
          if (!src) {
            var className = img.className;
            img.className = className + ' visible';

          } else {  
            if(img.getAttribute('style')) {
              var style = img.getAttribute('style');
              img.style = src + "; " + style;
            } else {
              img.style = src;
            }   
          }
        }

        var lazyLoad = function(){
            /* LAZY LOAD IMAGES */
            var imagesType = ["[data-src]", ".lazy-background"];   
            
            if ('IntersectionObserver' in window) { // if it's supported

                const config = {
                  rootMargin: '0px 0px 50px 0px',
                  threshold: 0
                };

                let observer = new IntersectionObserver(function (entries, self) {
                  entries.forEach(entry => {
                    if (entry.isIntersecting) {
                      // console.log(`Image ${entry.target.src} is in the viewport!`);
                      if(entry.target.getAttribute('data-src')) {
                        preloadImage(entry.target);
                      }
                      else {
                        preloadBackImage(entry.target);
                      }          
                      // Stop watching and load the image
                      self.unobserve(entry.target);
                    }
                  });
                }, config); 
          
              for (i = 0; i < imagesType.length; i++) {
                var images = document.querySelectorAll(imagesType[i]);

                images.forEach(image => {
                  observer.observe(image);
                });
              }  
            } else { // not supported
              for (i = 0; i < imagesType.length; i++) {
                var images = document.querySelectorAll(imagesType[i]);

                images.forEach(image => {
                  if(image.getAttribute('data-src')) {
                      preloadImage(image);
                  }
                  else {
                      preloadBackImage(image);
                  }  
                });
              } 
            }
        };
        var vidDefer = function(){
            document.getElementsByTagName('iframe');
            for (var i=0; i<vidDefer.length; i++) {
                if(vidDefer[i].getAttribute('data-src')) {
                    vidDefer[i].setAttribute('src',vidDefer[i].getAttribute('data-src'));
                } 
            }
        };




        return {

            init: function () {
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

        }

    })();

    nasp.init();





});