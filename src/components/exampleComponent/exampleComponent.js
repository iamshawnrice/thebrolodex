angular.module('App.components').component('exampleComponent', {
  bindings: {},
  templateUrl: '/templates/exampleComponent.html',
  controllerAs: 'exampleComponent',
  controller: function($scope, $resource) {
    var Posts = $resource('./api/wp-json/posts');

    $scope.posts = Posts.query(function(response) {
      console.log($scope.posts);
    });
  }
});
