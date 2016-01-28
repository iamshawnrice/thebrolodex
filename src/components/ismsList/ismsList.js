angular.module('App.components').component('ismsList', {
  bindings: {},
  templateUrl: '/templates/ismsList.html',
  controller: function($scope, api) {
    api.ism.query(function(response) {
      $scope.isms = response;
    });
  }
});
