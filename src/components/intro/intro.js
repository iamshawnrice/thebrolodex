var $ = require('jquery');
var transition = require('../../common/transitions').vertSlideDown;

require('imports?$=jquery!../../vendors/velocity');
require('imports?$=jquery!../../vendors/velocity.ui');

angular.module('App.components').component('intro', {
  bindings: {},
  templateUrl: '/templates/intro.html',
  controllerAs: 'intro',
  controller: function($scope) {
    var $introP = $('.intro-p'),
        introSequence = [],
        introTiming = 200;

    $introP.velocity({translateY: '-20px'}, 0);

    $introP.each(function(i, el) {
      introSequence[i] = {
        e: el,
        p: {
          translateY: 0,
          opacity: 1
        },
        o: {
          duration: introTiming,
          sequenceQueue: false,
          delay: i * 50
        }
      }
    });

    $.Velocity.RunSequence(introSequence);

    $scope.$on('intro.hide', function() {
      // TODO:
      // hide the intro text
      // and animate the header to the proper size
      $('')
    });
  }
});
