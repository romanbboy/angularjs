
var app = angular.module('app', []);
//Если нам нужны значения из фабрики, то необходимо добавить нужную фабрику в контроллер
app.controller('firstContr', function($scope, myFactory){
    console.log('firstContr');
    //Необходимо в $scope передавать значение из фабрики
    $scope.myFactory = myFactory;
    $scope.hello = 'hello world';
});

app.controller('secondContr', function($scope, myFactory){
    console.log('secondContr');
    $scope.myFactory = myFactory;
    $scope.hello = 'hello world';
});

//Фабрика. Сущность которая хранит в себе данные, которые будут использоваться в РАЗНЫХ контроллерах
//Фабрика должна ОБЯЗАТЕЛЬНО что то возвращать
app.factory('myFactory', function(){
    return {
        hello: 'hello world'
    }
})