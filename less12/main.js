var app = angular.module('app', []);

//Если шаблон большой по размеру(вот когда я прогал), то используется templateUrl(ссылка на шаблон)
app.directive('fooBar', function(){
    var bookmark = [
        {
            id:1,
            name: 'AngularJs'
        },
        {
            id:2,
            name: 'EmberJs'
        }
    ];
    return {
        restrict: 'E',
        //на локальном компьютере не работает(хотя на хостинге все будет работать нормально).
        // это просто файл с которого подгружается необходимый html код
        templateUrl: 'pattern.html',
        link: function(scope,element,attrs,ctrl,transclude){
            scope.bookmark = bookmark;
        }
    };
});


