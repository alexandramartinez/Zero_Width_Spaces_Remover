const gulp = require('gulp');
const replace = require('gulp-replace');
const watch = require('gulp-watch');
const path = require('path');
const fs = require('fs');

gulp.task('default', ['watch']);

gulp.task('watch', () => {
  watch('./src/*.csv', (vinyl) => {

    const relativePath = path.relative(__dirname, vinyl.path);
    const fileName = path.relative('src', relativePath);
    console.log(`File ${fileName} updated [✓]`);

    if (vinyl.event === 'unlink') {
      fs.unlink(__dirname + '/cleansed/' + fileName);

    } else {
      gulp.src(['./src/*.csv'])
        // There's an invisible-non-breakable space as first paramete of replace!
        .pipe(replace('﻿', ''))
        .pipe(gulp.dest('./cleansed/'));
    }
  });
});
