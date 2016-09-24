//Подключаем зависимость ngRoute
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    //Распределяем что будет происходить на определенной странице, какой контент подгрузить
        .when('/', {
            templateUrl: 'home.html',
            controller: 'myCtrl'
        })
        .when('/posts', {
            template: '<h1>This is Posts page</h1>'
        })
})

app.controller('myCtrl', function($scope){
    $scope.send = {
        message: 'Its really cool guies!'
    }
    console.log('HomeCtrl');
})
