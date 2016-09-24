var app = angular.module('app', []);

app.controller('myCtrl', function($scope){
    $scope.name = 'RYman';
});

app.directive('fooBar', function(){
    return {
        restrict: 'E',
        //translude - дает возможность использовать значение в директиве которое было забито изначально, а не просто удаляет его при вставке шаблона
        transclude: true,
        template: 'This is a superdirective',
        //link так же может принимать контроллер и трансклуд(значение которое было до этого)
        link: function(scope,element,attrs,ctrl,transclude){
            //Через функцию translude добавляем значение которое было забито до этого
            transclude(scope, function(clone,scope){
                element.append(clone);
            })
        }
    }
})

