angular.module('App.components').component('loginForm', {
  bindings: {},
  templateUrl: '/templates/loginForm.html',
  controllerAs: 'loginForm',
  controller: function($scope, $http) {
    $scope.user = {
      username: '',
      password: ''
    };

    $scope.login = function($event) {
      $http.post('./api/wp-json/jwt-auth/v1/token', this.user)
        .then(function(response) {
          console.log('SUCCESS!');
          console.log(response.data);
        })
        .catch(function(response) {
          console.log('ERROR!');
          console.log(response.data);
      });

      $event.preventDefault();
    };
  }
});
