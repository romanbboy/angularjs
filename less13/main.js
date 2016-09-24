var app = angular.module('app', []);

//При запуске Angular сразу кеширует шаблоны и templateUrl достает их из кеша
app.run(function($templateCache){
    $templateCache.put('pattern.html', '<div ng-repeat="bo in bookmark">{{bo.name}}</div>');
})

app.directive('fooBar', function () {
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
        //Смотрит, если в templateCache есть pattern.html то он этот шаблон берет оттуда сначала. Если нету то смотрит дальше(либо в script либо как на хостинге отдельным файлом)
        templateUrl: 'pattern.html',
        link: function(scope,element,attrs,ctrl,transclude){
            scope.bookmark = bookmark;
        }
    };
});


