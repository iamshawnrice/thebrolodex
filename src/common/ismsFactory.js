angular.module('App.common').service('api', function($resource) {
  var api = {};

  api.isms = $resource('./api/wp-json/wp/v2/posts/', {
    query: {
      isArray: true
    }
  });

  return api;
});
