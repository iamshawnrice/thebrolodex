angular.module('App.components').component('ismForm', {
  bindings: {},
  templateUrl: '/templates/ismForm.html',
  controllerAs: 'ismForm',
  controller: function($scope, api) {
    $scope.ism = {
      title: '',
      content_raw: ''
    };

    $scope.processForm = function($event) {
      var newIsm = new api.ism();

      newIsm.data = this.ism
      newIsm.$save();

      $event.preventDefault();
    }
  }
});
