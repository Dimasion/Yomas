'use strict';

import path from 'path';
import rollup from 'rollup-stream';
import resolve from 'rollup-plugin-node-resolve';
import uglify from 'rollup-plugin-uglify';
import rename from 'gulp-rename';
import source from 'vinyl-source-stream';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let dest = path.join(taskTarget, dirs.scripts.replace(/^_/, ''));

  // Scripts
  gulp.task('vendor', () => {
    return rollup({
      'format': 'es',
      onwarn: function(warning) {
        // Skip certain warnings
        // should intercept ... but doesn't in some rollup versions
        if ( warning.code === 'THIS_IS_UNDEFINED' ) { return; }
    
        // console.warn everything else
        console.warn( warning.message );
      },
      'plugins': [
        resolve(),
        uglify()
      ],
      input: path.join(dirs.source, dirs.scripts, 'vendor.js')
    })
    // point to the entry file.
    .pipe(source('vendor.js', dirs.source, dirs.scripts))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulp.dest(dest));
  });
}
