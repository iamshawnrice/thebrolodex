angular.module('App.components').component('exampleComponent', {
  bindings: {},
  templateUrl: '/templates/exampleComponent.html',
  controllerAs: 'exampleComponent',
  controller: function($scope, $resource) {
    var Posts = $resource('./api/wp-json/posts', {
      // TODO: work out how to keep these brackets from being urlized
      'filter[posts_per_page]': 50
    });

    $scope.posts = Posts.query();
  }
});
