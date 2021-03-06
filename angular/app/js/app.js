'use strict';

angular.module('myApp', ['myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers'])

  .config(function($routeProvider) {
    $routeProvider
      .when('/404', {templateUrl: '/_partials/404.html', controller: '404Ctrl', caseInsensitiveMatch: true})
      .when('/news', {templateUrl: '/_partials/pages/news.html', controller: 'NewsCtrl', caseInsensitiveMatch: true})
      .otherwise({templateUrl: '/_partials/page.html', controller: 'PageCtrl'})
    ;
  })

  .config(function($locationProvider) {
    $locationProvider.html5Mode(true);
  })

  .run(function() {
    if (!Array.prototype.indexOf) {
      Array.prototype.indexOf = function (searchElement /*, fromIndex */ ) {
        'use strict';
        if (this == null) {
          throw new TypeError();
        }
        var n, k, t = Object(this),
          len = t.length >>> 0;

        if (len === 0) {
          return -1;
        }
        n = 0;
        if (arguments.length > 1) {
          n = Number(arguments[1]);
          if (n != n) { // shortcut for verifying if it's NaN
            n = 0;
          } else if (n != 0 && n != Infinity && n != -Infinity) {
            n = (n > 0 || -1) * Math.floor(Math.abs(n));
          }
        }
        if (n >= len) {
          return -1;
        }
        for (k = n >= 0 ? n : Math.max(len - Math.abs(n), 0); k < len; k++) {
          if (k in t && t[k] === searchElement) {
            return k;
          }
        }
        return -1;
      };
    }
  })

;