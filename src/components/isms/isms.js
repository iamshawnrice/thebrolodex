var shuffle = require('lodash.shuffle');

angular.module('App.components').component('isms', {
  bindings: {},
  templateUrl: '/templates/isms.html',
  controller: function($scope, api) {
    var isms = [],
        page = 1,
        introShown = true;

    function init() {
      getIsms();

      setTimeout(callToAction, 5000);
    }

    function getIsms() {
      api.isms.query({page: page, 'filter[posts_per_page]': 50}, function(response) {
        isms = isms.concat(response);
        isms = shuffle(isms);

        $scope.ism = isms.shift();

        page++;
      });
    }

    function callToAction() {
      if (introShown) {
        $('.bro-me').velocity({scale: '110%'}, {loop: true, duration: 400});
      }
    }

    $scope.broMe = function($event) {
      $($event.target).velocity('stop');

      if (introShown) {
        $scope.$emit('intro.read');
        introShown = false;
      }

      if (!isms.length) {
        getIsms();
      } else {
        $scope.ism = isms.shift();
      }
    }

    init();
  }
});
