var $ = require('jquery');
var transitions = require('./transitions');

var animations = angular.module('animations', ['ngAnimate']);

require('imports?$=jquery!../vendors/velocity');

animations.animation('.is-animated', function() {
  var keys = Object.keys(transitions),
      transition = keys[0];

  var enter = function(element, doneFn) {
    var height = '-' + (.5 * $(element).height() + 'px');

    $(element)
      .css('margin-top', height)
      .velocity(transitions[transition].in.start, 0)
      .velocity(transitions[transition].in.end, {
        duration: 250,
        complete: doneFn,
        delay: 250
      });
  };

  var leave = function(element, doneFn) {
    $(element).velocity(transitions[transition].out, {
      duration: 250,
      complete: function() {
        // change the transition for the next animation
        transition = keys[Math.floor(Math.random() * keys.length)];
        // remove the element from the DOM
        $(this).remove();
        // and fire any necessary callbacks
        doneFn;
      }
    });
  };

  return {
    enter: enter,
    leave: leave
  };
});
