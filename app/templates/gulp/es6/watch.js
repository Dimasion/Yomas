'use strict';

import path from 'path';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  let dirs = config.directories;
  let runSequence  = require( 'run-sequence' ).use( gulp );

  // Watch task
  gulp.task('watch', () => {
    if (!args.production) {<% if (cssOption === 'sass') { %>
      // Styles
      gulp.watch([
        path.join(dirs.source, dirs.styles, '**/*.{scss,sass}'),
        path.join(dirs.source, dirs.modules, '**/*.{scss,sass}')
      ], () => {
        runSequence( 'sass', browserSync.reload );
      });<% } else if (cssOption === 'less') { %>
      gulp.watch([
        path.join(dirs.source, dirs.styles, '**/*.less'),
        path.join(dirs.source, dirs.modules, '**/*.less'),
      ], ['less']);<% } else if (cssOption === 'stylus') { %>
      gulp.watch([
        path.join(dirs.source, dirs.styles, '**/*.styl'),
        path.join(dirs.source, dirs.modules, '**/*.styl')
      ], ['stylus']);
      <% } %><% if (htmlOption === 'jade') { %>

      // Jade Templates
      gulp.watch([
        path.join(dirs.source, '**/*.jade'),
        path.join(dirs.source, dirs.svg, '**/*.svg'),
        path.join(dirs.source, dirs.data, '**/*.{json,yaml,yml}')
      ], () => {
        runSequence( 'jade', browserSync.reload );
      });<% } else if (htmlOption === 'nunjucks') { %>

      // Nunjucks Templates
      gulp.watch([
        path.join(dirs.source, '**/*.nunjucks'),
        path.join(dirs.source, dirs.data, '**/*.{json,yaml,yml}')
      ], ['nunjucks']);
      <% } %>

      // Scripts
      gulp.watch([
        path.join(dirs.source, dirs.scripts, '**/*.js'),
        path.join(dirs.source, dirs.modules, '**/*.js')
      ], () => {
        runSequence( 'scripts', browserSync.reload );
      });

      // Vendor
      gulp.watch([
        path.join(dirs.source, dirs.scripts, 'vendor.js')
      ], () => {
        runSequence( 'vendor', browserSync.reload );
      });

      // Icons
      gulp.watch([
        path.join(dirs.source, dirs.icons, '*.svg')
      ], () => {
        runSequence( 'svg-icons', browserSync.reload );
      });
      
      // Copy
      gulp.watch([
        path.join(dirs.source, '**/*'),
        '!' + path.join(dirs.source, '{**/\_*,**/\_*/**}')<% if (htmlOption === 'nunjucks') { %>,
        '!' + path.join(dirs.source, '**/*.nunjucks')<% } else if (htmlOption === 'jade') { %>,
        '!' + path.join(dirs.source, '**/*.jade')<% } %>
      ], () => {
        runSequence( 'copy', browserSync.reload );
      });

      // Images
      gulp.watch([
        path.join(dirs.source, dirs.images, '**/*.{jpg,jpeg,gif,svg,png}')
      ], () => {
        runSequence( 'imagemin', browserSync.reload );
      });

      // All other files
      gulp.watch([
        path.join(dirs.temporary, '**/*'),
        '!' + path.join(dirs.temporary, '**/*.{css,map,html,js}')
      ]).on('change', browserSync.reload);
    }
  });
}
