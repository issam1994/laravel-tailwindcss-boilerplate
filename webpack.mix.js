const mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix
//  handle js
    .js("resources/js/main.js", "public/client/js")
    .copy("resources/js/libs", "public/client/js/libs")
    // handle css
    .postCss("resources/css/main.css", "public/client/css", [
        require("postcss-import"),
        require("tailwindcss/nesting"),
        require("tailwindcss"),
        require("autoprefixer"),
    ])
    // for versioning
    .version()
    //
    .browserSync({ proxy: "127.0.0.1:8000" })
    // disable notifications
    .disableNotifications();
