var shuffle = require('lodash.shuffle');

angular.module('App.components').component('isms', {
  bindings: {},
  templateUrl: '/templates/isms.html',
  controller: function($scope, api) {
    var isms = [],
        page = 1;

    function init() {
      getIsms();
    }

    function getIsms() {
      api.isms.query({page: page, 'filter[posts_per_page]': 50}, function(response) {
        isms = isms.concat(response);
        isms = shuffle(isms);

        $scope.ism = isms.shift();

        page++;
      });
    }

    $scope.broMe = function($event) {
      if (!isms.length) {
        getIsms();
      } else {
        $scope.ism = isms.shift();
      }
    }

    init();
  }
});
