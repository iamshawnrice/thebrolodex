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

app.config(function($locationProvider, $httpProvider){
  $locationProvider.html5Mode(true);
});

app.run(function($rootScope){
});
