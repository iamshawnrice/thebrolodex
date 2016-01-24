angular.module('App.components').component('ismForm', {
  bindings: {},
  templateUrl: '/templates/ismForm.html',
  controllerAs: 'ismForm',
  controller: function($scope, ismsFactory) {
    $scope.Ism = {
      title: '',
      content_raw: ''
    };

    $scope.processForm = function($event) {
      this.newIsm = new ismsFactory();

      ismsFactory.save(this.Ism, function() {
        debugger;
      });

      $event.preventDefault();
    }
  }
});
