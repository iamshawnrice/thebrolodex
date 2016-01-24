angular.module('App.common').factory('ismsFactory', function($resource) {
  var isms = $resource('./api/wp-json/posts?filter[posts_per_page]=-1', {},
  {
    get: {
      isArray: true
    }
  });

  return isms;
});
