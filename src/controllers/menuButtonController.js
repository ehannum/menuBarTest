menuTest.controller('menuButtonController', ['$scope', '$rootScope', '$timeout', function ($scope, $rootScope, $timeout) {
  $scope.selected = false;

  if ($scope.toggle && $scope.toggle.length) {
    $rootScope.groups[$scope.toggle] = null;
  }

  $scope.isSelected = function (id) {
    if ($scope.toggle && $scope.toggle.length) {
      return $rootScope.groups[$scope.toggle] === id;
    }
    return $scope.selected;
  };

  $scope.buttonClick = function (id) {
    if ($scope.toggle && $scope.toggle.length) {
      $rootScope.groups[$scope.toggle] = id;
    } else if ($scope.toggle === '') {
      $scope.selected = !$scope.selected;
    } else {
      $scope.selected = true;
      $timeout(function(){
        $scope.selected = false;
      }, 100);
    }
  }
}]);
