var app = angular.module('app', []);

app.controller('myCtrl', function($scope){
    $scope.name = 'Skrillex';
    $scope.color = '#333333';
    
    $scope.reverse = function (){
        $scope.name = $scope.name.split('').reverse().join('');
    }
})
app.directive('fooBar', function () {
    return {
        //Такой scope изолированный в нем нет прототипного наследования от контроллера
        scope: {
            //Что бы все таки как то общаться с контроллером можно поступить так(но переменная нам будет доступна только для чтения)
            name: '@',
            //Таким образом двусторонняя связь(везде будет меняться)
            color: '=',
            //Таким образом выполняется из родительского. В основном используют для функций
            reverse: '&'
        },
        template: '<div>My name is {{name}} <input ng-model="name"></div>'+
        '<div>Mycolor is {{color}} <input ng-model="color"></div>'+
        '<button ng-click="reverse()">Перекрутить</button><br>',
        link: function(scope,element,attrs,ctrl,transclude){
            
        }
    };
});


