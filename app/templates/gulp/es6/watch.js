'use strict'

import path from 'path'
import watch from 'gulp-watch'

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories
  let runSequence  = require( 'run-sequence' ).use( gulp )

  // Watch task
  gulp.task('watch', () => {
    if (!args.production) {
      // Copy
      gulp.watch([
        path.join(dirs.source, '**/*'),
        '!' + path.join(dirs.source, '{**/\_*,**/\_*/**}'),
        '!' + path.join(dirs.source, '**/*.jade')
      ], ['copy'])
      watch([
        path.join(dirs.source, '**/*.jade'),
        path.join(dirs.source, dirs.svg, '**/*.svg'),
        path.join(dirs.source, dirs.data, '**/*.{json,yaml,yml}')
      ], () => gulp.start('jade'))

      // Styles
      watch([
        path.join(dirs.source, dirs.styles, '**/*.{scss,sass}'),
        path.join(dirs.source, dirs.modules, '**/*.{scss,sass}')
      ], () => gulp.start('sass'))

      // Scripts
      watch([
        path.join(dirs.source, dirs.scripts, '**/*.js'),
        path.join(dirs.source, dirs.modules, '**/*.js')
      ], () => runSequence( 'scripts', browserSync.reload ))

      // Vendor
      gulp.watch([
        path.join(dirs.source, dirs.scripts, 'vendor.js')
      ], ['vendor'])

      // Icons
      gulp.watch([
        path.join(dirs.source, dirs.icons, '*.svg')
      ], ['svg-icons'])

      // Images
      gulp.watch([
        path.join(dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}')
      ], ['imagemin'])

      // All other files
      gulp.watch([
        path.join(dirs.temporary, '**/*'),
        '!' + path.join(dirs.temporary, '**/*.{css,map,html,js}')
      ]).on('change', browserSync.reload)
    }
  })
}
