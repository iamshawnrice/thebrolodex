angular.module('App.common').factory('ismsFactory', function($resource) {
  var isms = $resource('./api/wp-json/posts', {},
  {
    get: {
      params: {
        'filter[posts_per_page]': '-1'
      },
      isArray: true
    }
  });

  return isms;
});
