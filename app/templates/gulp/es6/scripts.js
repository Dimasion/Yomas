'use strict';

import path from 'path';
import rollup from 'rollup-stream';
import babel from 'rollup-plugin-babel';
import sourcemaps from 'gulp-sourcemaps';
import source from 'vinyl-source-stream';
import buffer from 'vinyl-buffer';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget, dirs.scripts.replace(/^_/, ''));

  // Scripts
  gulp.task('scripts', () => {
    return rollup({
      sourcemap: true,
      input: path.join(dirs.source, dirs.scripts, 'app.js'),
      // any option supported by Rollup can be set here.
      // allowRealFiles: true,
      'format': 'iife',
      'plugins': [
        babel({
          presets: [
            [
              'es2015', {
                'modules': false
              }
            ]
          ],
          babelrc: false,
          exclude: 'node_modules/**'
        })
      ]
    })
    // point to the entry file.
    .pipe(source('app.js', dirs.source, dirs.scripts))
    
    // buffer the output. most gulp plugins, including gulp-sourcemaps, don't support streams.
    .pipe(buffer())
    
    // tell gulp-sourcemaps to load the inline sourcemap produced by rollup-stream.
    .pipe(sourcemaps.init({loadMaps: true}))
    
    // write the sourcemap alongside the output file.
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(dest));
  });
}
