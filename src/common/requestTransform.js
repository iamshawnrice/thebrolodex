angular.module('App.common').service('requestTransform', function($cookies) {
  return {
    request: function(config) {
      config.headers = config.headers || {};
      config.headers.Authorization = 'Bearer ' + $cookies.get('authToken');

      return config;
    }
  }
});
