var angular;
//$scope это обязательный параметр. В нем хранятся все свойства
angular.module('app', []).controller('myCtrl', function ($scope) {
    $scope.hello = 55;
    $scope.myBook = 'My AngularJs';
});