jQuery(document).ready(function ($) {

    var nasp = (function () {

        var slick = function () {

           // FULL SLIDER
            $(".banner-slider-wrap").slick({
                slidesToShow: 1,
                infinite: false,
                autoplay: false,
                slidesToScroll: 1,
                arrows: false,
                //appendArrows: '.practice-slider__arrows',                
                dots: true,
            });

        };

        return {

            init: function () {
                slick();
            }

        }

    })();

    nasp.init();

});