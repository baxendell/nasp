import HelloWorld from './components/HelloWorld';

let person = new HelloWorld();
//person.speak();

enquire.register("screen and (min-width: 45em)", {
    setup : function() {
        // Load in content via AJAX (just the once)
        //console.log('test');

    },
    match : function() {
        // Show sidebar
    },
    unmatch : function() {
        // Hide sidebar
    }
});


jQuery(document).ready(function ($) {

    var Theme5 = (function () {

        var test = function () {

            if (window.matchMedia("(min-width: 400px)").matches) {

                //console.log('test');

            } else {
                //console.log('not test');
            }

            var materials = [
                'Hydrogen',
                'Helium',
                'Lithium',
                'Beryllium'
            ];

            materials.map((material) => {
                return material.length;
            });

        };

        return {

            init: function () {
                test();
            }

        }

    })();

    Theme5.init();

});
