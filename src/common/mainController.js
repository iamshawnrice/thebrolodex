angular.module('App.common').controller('main', function($scope) {
  var introListener = $scope.$on('intro.read', function() {
    $scope.$broadcast('intro.hide');

    unsubscribe();
  });

  function unsubscribe() {
    // Though it feels hacky, this seems to be the angular-preferred method
    // per toddmotto.com/all-about-angulars-emit-broadcast-on-publish-subscribing/
    introListener();
  }
});
