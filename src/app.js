var app = angular.module('App', [
  'ngAnimate',
  'ngTouch',
  'ngSanitize',
  'ngResource',
  'ngCookies',

  'App.common',
  'App.directives',
  'App.components'
]);

app.config(function($locationProvider, $httpProvider, $animateProvider, $compileProvider){
  $locationProvider.html5Mode(true);
  // disabled due to performance concerns - reenable if need to use batarang
  $compileProvider.debugInfoEnabled(false);
});

app.run(function($rootScope){
});
