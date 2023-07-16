import gulp from 'gulp';
import htmlmin from 'gulp-htmlmin';
import cleanCSS from 'gulp-clean-css';
import imagemin from 'gulp-imagemin';
import imageminWebp from 'imagemin-webp';

gulp.task('minify-html', () => {
    return gulp.src('./*.html')
        .pipe(htmlmin({ collapseWhitespace: true }))
        .pipe(gulp.dest('.'));
});


gulp.task('minify-css', () => {
    return gulp.src('assets/styles*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('.'));
});


gulp.task('convert-svg-webp', () => {
    return gulp.src('assets/images*.svg')
        .pipe(imagemin([
            imageminWebp({
                quality: 75
            })
        ]))
        .pipe(gulp.dest('.'));
});


gulp.task('convert-png-webp', () => {
    return gulp.src('assets/images*.png')
        .pipe(imagemin([
            imageminWebp({
                quality: 75
            })
        ]))
        .pipe(gulp.dest('.'));
});


gulp.task('default', gulp.parallel('minify-html', 'minify-css', 'convert-svg-webp', 'convert-png-webp'));
