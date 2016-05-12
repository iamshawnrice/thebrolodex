var $ = require('jquery');
var transition = require('../../common/transitions').vertSlideDown;

require('imports?$=jquery!../../vendors/velocity');
require('imports?$=jquery!../../vendors/velocity.ui');

angular.module('App.components').component('intro', {
  bindings: {},
  templateUrl: '/templates/intro.html',
  controllerAs: 'intro',
  controller: function($scope) {
    $('[class^=intro]').velocity({translateY: '-20px'}, 0);

    var revealSequence = [
      {e: $('.intro-1'), p: {translateY: 0, opacity: 1}, o: {duration: 400}},
      {e: $('.intro-2'), p: {translateY: 0, opacity: 1}, o: {duration: 400, delay: 800}},
      {e: $('.intro-3'), p: {translateY: 0, opacity: 1}, o: {duration: 400, delay: 1200}},
      {e: $('.intro-4'), p: {translateY: 0, opacity: 1}, o: {duration: 400, delay: 800}},
      {e: $('.intro-5'), p: {translateY: 0, opacity: 1}, o: {duration: 400, delay: 1600}},
      {e: $('.intro-6'), p: {translateY: 0, opacity: 1}, o: {duration: 800}}
    ];

    $.Velocity.RunSequence(revealSequence);
  }
});
