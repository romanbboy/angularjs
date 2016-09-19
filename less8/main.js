var app = angular.module('app', []);

app.controller('mainCtrl', function($scope){
    $scope.money1 = '24$';
    $scope.money2 = '$3.134';
    $scope.money3 = '6787';
});

//Создаем фильтр. Обязательно должен возвращать функцию.Принимает строку(которая как раз наша переменная money)
app.filter('moneyFilter', function(){
    return function(str){
        var lastChar = str.slice(-1),
            firstChar = str.slice(0,1),
            slicePart;
        
        if(lastChar === '$'){
            slicePart = str.slice(0, str.length -1);
            return '$'+slicePart;
        }else if(firstChar === '$'){
            return str;
        }else{
            return '$'+str;
        }
    }
})

