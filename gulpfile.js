const { src, dest, watch, parallel } = require("gulp");

//CSS
const sass = require("gulp-sass")(require("sass"));
const plumber = require("gulp-plumber");

//IMAGENES
const cache = require("gulp-cache");
const avif = require("gulp-avif");
const imagemin = require("gulp-imagemin");
const webp = require("gulp-webp");

function css(done) {
    src("src/scss/**/*.scss")
        .pipe(plumber())
        .pipe(sass())
        .pipe(dest("build/css"))
    done();
}

function imagenes(done) {

    const opciones = {
        optimizationLevel: 3
    }
    src("src/img/**/*.png")
        .pipe(cache(imagemin(opciones)))
        .pipe(dest("build/img"))
    done();
}

function versionWebp(done) {

    const opciones = {
        quality: 50
    };
    src("src/img/**/*.png")
        .pipe(webp(opciones))
        .pipe(dest("build/img"))
    done();
}

function versionAvif(done) {

    const opciones = {
        quality: 50
    };

    src("src/img/**/*.png")
        .pipe(avif(opciones))
        .pipe(dest("build/img"))
    done();
}

function javaScript(done) {
    src("src/js/**/*.js")
        .pipe(dest("build/js"))
    done()
}

function dev(done) {
    watch("src/scss/**/*.scss", css)
    watch("src/js/**/*.js", javaScript)

    done();
}
exports.css = css;
exports.js = javaScript;
exports.imagenes = imagenes;
exports.versionWebp = versionWebp;
exports.versionAvif = versionAvif;
exports.dev = parallel(versionWebp, dev,versionAvif, javaScript, imagenes);