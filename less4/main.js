var app = angular.module('app', []);
app.controller('myCtrl', function($scope, myFactory){
    $scope.hello = 'Hello world';
    $scope.myFactory = myFactory;
    //Создаем метод(функцию)
    $scope.getBook = function(){
        return 'My books'
    }
    
    $scope.setHello = function(text){
        $scope.hello = text;
    }
})

app.factory('myFactory', function(){
    return {
        hello: function(){
            return 'hello world';
        }
    }
})