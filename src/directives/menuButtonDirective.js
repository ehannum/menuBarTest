menuTest.directive('menuButton', [function () {
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/directives/menuButton.html',
    scope: {
      name: '@',
      icon: '@',
      toggle: '@'
    },
    controller: 'menuButtonController'
  }
}]);
