angular.module('App.components').component('loginForm', {
  bindings: {},
  templateUrl: '/templates/loginForm.html',
  controllerAs: 'loginForm',
  controller: function($scope, api, $cookies) {
    $scope.user = {
      username: '',
      password: ''
    };

    $scope.login = function($event) {
      api.auth.save({}, $scope.user, function(response) {
        console.log('SUCCESS!');
        console.log(response);

        $cookies.put('authToken', response.token);
      }, function(response) {
        console.log('ERROR!');
        console.log(response);
      });

      $event.preventDefault();
    };
  }
});
