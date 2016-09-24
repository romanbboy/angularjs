var app = angular.module('app', []);

app.controller('myCtrl', function($scope){
    $scope.name = 'Rombik';
})
app.directive('post', function () {
    return {
        scope: true,
        //Тут работа идет только со свойством name ДИРЕКТИВЫ(за счет того что scope:true)
        template: '<div>My name is {{name}} <input ng-model="name"></div>',
        link: function(scope,element,attrs,ctrl,transclude){
            //Наследует от контроллера scope.name
            alert(scope.name);
        }
    };
});


