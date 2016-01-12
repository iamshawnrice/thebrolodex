angular.module('App.components').component('ismsList', {
  bindings: {},
  templateUrl: '/templates/ismsList.html',
  controller: function($scope, ismsFactory) {
    ismsFactory.get(function(response) {
      $scope.isms = response;
    });
  }
});
