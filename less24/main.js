//Подключаем зависимость ngRoute
var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
    //Распределяем что будет происходить на определенной странице, какой контент подгрузить
        .when('/', {
        //Подключаем внешний файл home.html
            templateUrl: 'home.html',
            controller: 'myCtrl'
        })
        .when('/posts', {
            templateUrl: 'posts.html',
            controller: 'postsCtrl'
        })
    //тут можно работать уже с айдишником
        .when('/posts/:postId', {
            templateUrl: 'post.html',
            controller: 'postCtrl'
        })
    //для несуществующей страницы сразу делаем так
        .otherwise({
            template: '<h1> Error 404. This page isnt exist </h1>'
        });
});

app.run(function($rootScope){
//    $rootScope это супер родитель который доустпен везде
//    в основном используется в тот момент когда мы только что перешли на новый роут и надо сразу что то сделать при запуске страницы
    $rootScope.$on('$routeChangeStart', function(event, current, previous, reject){
        console.log('changeStart', arguments);
    });
    
    $rootScope.$on('$routeChangeSuccess', function(event, current, previous, reject){
        console.log('changesuccess', current);
        $rootScope.currentPath = current.$$route.originalPath;
    });
});

app.controller('pathCtrl', function(){
    
});

app.controller('myCtrl', function($scope){
    $scope.send = {
        message: 'Its really cool guies!'
    }
    console.log('HomeCtrl');
});

app.controller('postsCtrl', function($scope, postsFactory){
    console.log(postsFactory);
    $scope.posts = postsFactory;
});

app.controller('postCtrl', function($scope,$routeParams, postsFactory){
    //$routeParams получаем из url объект(в нашем случае postId)
    console.log($routeParams.postId);
    var postId = Number($routeParams.postId);
    //Очень просто ищем нужное нам значение в массиве postsFactory, а следующий это объект что ищем там где id = postId
    $scope.post = _.findWhere(postsFactory, {id:postId});
});

app.factory('postsFactory', function(){
    return [
        {
            id: 1,
            name: 'It\'s Angular'
        },
        {
            id: 2,
            name: 'Do I love Angular or not?'
        }
    ];
});