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
        exitSequence = [],
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

      exitSequence[i] = {
        e: el,
        p: {
          translateY: '20px',
          opacity: 0
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
      var headerHeight = $('.header-logo').outerHeight(true);
      // hide the intro text
      $.Velocity.RunSequence(exitSequence);
      // and animate the header to the proper size
      $('.header').velocity({
        height: headerHeight
      })
    });
  }
});
