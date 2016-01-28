angular.module('App.common').service('requestTransform', function($cookies) {
  return {
    request: function(config) {
      config.headers = config.headers || {};
      //Assume that you store the token in a cookie.
      var globals = $cookies.get( 'globals' ) || {};

      config.headers['Authorization'] = 'Bearer'

      console.log(config);
      return config;
    }
  }
});
