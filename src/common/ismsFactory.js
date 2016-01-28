angular.module('App.common').service('api', function($resource) {
  var api = {};

  api.ism = $resource('./api/wp-json/wp/v2/posts/:id', {id: '@id'}, {
    get: {
      params: {
        'filter[posts_per_page]': '50'
      }
    }
  });

  api.auth = $resource('./api/wp-json/jwt-auth/v1/token');

  return api;
});
