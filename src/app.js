var app = angular.module('App', [
  'ngAnimate',
  'ngTouch',
  'ngSanitize',
  'ngResource',

  'App.common',
  'App.directives',
  'App.components'
]);

app.config(function($locationProvider, $httpProvider){
  $locationProvider.html5Mode(true);

  // TODO: check for cookie set in loginForm.js and set headers accordingly
  // https://github.com/Tmeister/wp-api-jwt-auth
});

app.run(function($rootScope){
});
