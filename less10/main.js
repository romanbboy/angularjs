var app = angular.module('app', []);

app.directive('fooBar', function(){
    var books = [
        {
            id:1,
            name: 'AngularJs'
        },
        {
            id:2,
            name: 'EmberJs'
        },
        {
            id:3,
            name: 'ReactJs'
        }
    ]
    return {
        // template - помещает внутрь директивы данную разметку, шаблон
        //ng-repeat - по циклу проходит значений и выводит на экран
        template: '<div ng-repeat="bo in myBooks">Id = {{bo.id}} Name = {{bo.name}}</div>',
        link: function(scope,element,attrs){
            scope.name = 'Roman';
            scope.myBooks = books;
        }
    }
})

