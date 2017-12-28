/**
 * gulpfile.babel.js
 * 
 * @author d-freak
 */

import gulp from 'gulp';
import babel from 'gulp-babel';

import remove from 'del';



const mainSourceDir = 'src/main/js';
const mainTargetDir = 'app/script';

gulp.task('clean', [ 'clean-main' ], () => {
});

gulp.task('clean-main', remove.bind(null,
    [ mainTargetDir ]
));

gulp.task('compile', [ 'clean-main' ], () => {
    return gulp.src(
        `${mainSourceDir}/**/*.js`
    ).pipe(
        babel()
    ).pipe(
        gulp.dest(mainTargetDir)
    );
});
