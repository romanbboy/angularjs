var app = angular.module('app', []);

app.controller('myCtrl', function($scope){
    $scope.posts = [
        {
            name: 'Cats'
        },
        {
            name: 'Dogs'
        }
    ];
    $scope.getPost = function(){
        return $scope.posts;
    }
    $scope.hello = 'Helllllo';
})

//Директива наследует scope у контроллера который находится выше
app.directive('post', function () {
    return {
        //Используем true для того что бы этот scope принадлежал ТОЛЬКО директиве
        scope: true,
        template: '<div ng-repeat="po in getPost()">{{po.name}} и {{hello}}</div>',
        link: function(scope,element,attrs,ctrl,transclude){
            //Директива имеет возможность менять scope контроллера и это не очень хорошо
            scope.hello = 'Hi';
        }
    };
});


