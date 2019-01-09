let mix = require('laravel-mix');
let ImageMinPlugin = require('imagemin-webpack-plugin').default;
let CopyWebpackPlugin = require('copy-webpack-plugin');
var LiveReloadPlugin = require('webpack-livereload-plugin');

//require("laravel-mix-purgecss");

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for your application, as well as bundling up your JS files.
 |
 */

// Set Public Path Current Directory
mix.setPublicPath('./');

mix.scripts(
    [
        './assets/js/vendors/bootstrap.bundle.min.js',
        './assets/js/vendors/jquery.smooth-scroll.js',
        './assets/js/vendors/match-height.min.js',
        './assets/js/vendors/slick.js',
        './assets/js/vendors/enquire.min.js',
        './assets/js/vendors/sticky.js'
    ],
    'assets/dist/js/vendor.js'
);

// Compile Javascript and Sass files.
mix.js('assets/js/custom/theme.js', 'assets/dist/js/').sourceMaps();

mix.sass('assets/scss/theme.scss', 'assets/dist/css/', {});

// Prevent mix from trying to resolve urls.
mix.options({
    processCssUrls: false
});

mix.disableNotifications();

// Source maps when not in production.
if (!mix.config.production) {

    mix.webpackConfig({
        devtool: "inline-source-map",
        plugins: [
            new LiveReloadPlugin()
        ]
    }).sourceMaps();

}

if (mix.config.production) {
    mix.version();

    // mix.webpackConfig({
    //     plugins: [
    //         new CopyWebpackPlugin([{
    //             from: 'assets/images',
    //             to: 'assets/images'
    //         }]),
    //         new ImageMinPlugin([{
    //             test: /\.(jpe?g|png|gif|svg)$/i
    //         }])
    //     ]
    // });

}

// Full API
// mix.js(src, output);
// mix.react(src, output); <-- Identical to mix.js(), but registers React Babel compilation.
// mix.extract(vendorLibs);
// mix.sass(src, output);
// mix.standaloneSass('src', output); <-- Faster, but isolated from Webpack.
// mix.fastSass('src', output); <-- Alias for mix.standaloneSass().
// mix.less(src, output);
// mix.stylus(src, output);
// mix.browserSync('my-site.dev');
// mix.combine(files, destination);
// mix.babel(files, destination); <-- Identical to mix.combine(), but also includes Babel compilation.
// mix.copy(from, to);
// mix.copyDirectory(fromDir, toDir);
// mix.minify(file);
// mix.sourceMaps(); // Enable sourcemaps
// mix.version(); // Enable versioning.
// mix.disableNotifications();
// mix.setPublicPath('path/to/public');
// mix.setResourceRoot('prefix/for/resource/locators');
// mix.autoload({}); <-- Will be passed to Webpack's ProvidePlugin.
// mix.webpackConfig({}); <-- Override webpack.config.js, without editing the file directly.
// mix.then(function () {}) <-- Will be triggered each time Webpack finishes building.
// mix.options({
//   extractVueStyles: false, // Extract .vue component styling to file, rather than inline.
//   processCssUrls: true, // Process/optimize relative stylesheet url()'s. Set to false, if you don't want them touched.
//   purifyCss: false, // Remove unused CSS selectors.
//   uglify: {}, // Uglify-specific options. https://webpack.github.io/docs/list-of-plugins.html#uglifyjsplugin
//   postCss: [] // Post-CSS options: https://github.com/postcss/postcss/blob/master/docs/plugins.md
// });