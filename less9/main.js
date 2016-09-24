var app = angular.module('app', []);

//Если описывается через тире foo-bar то пишем как в css fooBar
app.directive('fooBar', function(){
    return {
        //restrict - директива работает либо через атрибут(А), либо через елемент(Е), либо и так и так (ЕА)
        restrict: 'EA',
        link: function(){
            alert('fooBar');
        }
    }
})

