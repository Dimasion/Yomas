'use strict';

export default function(gulp, plugins, args, config, taskTarget, browserSync) {
  // BrowserSync
  gulp.task('browserSync', () => {
    browserSync.init({
      open: args.open ? 'local' : false,
      startPath: config.baseUrl,
      port: config.port || 3000,
      notify: {
        styles: [
          'display: none; ',
          'padding: 6px 15px 3px;',
          'position: fixed;',
          'font-size: 0.8em;',
          'z-index: 9999;',
          'left: 0px;',
          'bottom: 0px;',
          'color: rgb(74, 74, 74);',
          'background-color: rgb(17, 17, 17);',
          'color: rgb(229, 229, 229);'
        ]
      },
      server: {
        baseDir: taskTarget,
        routes: (() => {
          let routes = {};

          // Map base URL to routes
          routes[config.baseUrl] = taskTarget;

          return routes;
        })()
      }
    });
  });
}
