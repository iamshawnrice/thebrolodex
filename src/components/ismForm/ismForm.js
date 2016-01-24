angular.module('App.components').component('ismForm', {
  bindings: {},
  templateUrl: '/templates/ismForm.html',
  controllerAs: 'ismForm',
  controller: function($scope, ismsFactory) {
    $scope.ism = {
      title: '',
      content_raw: ''
    };

    $scope.processForm = function($event) {
      var newIsm = new ismsFactory();

      newIsm.data = this.ism
      newIsm.$save();

      $event.preventDefault();
    }
  }
});
