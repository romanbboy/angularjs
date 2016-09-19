var app = angular.module('app', []);
//Существует два вида записи директив: короткий и полный

//Короткая запись(используется редко)
/* app.directive('foo', function(){
    return function(scope,element,attr){
        alert('This is a directive');
    }
}); */

//Полная запись
app.directive('foo', function(){
    return {
        //link срабатывает тогда, когда DOM элемент отрисовался на странице
        link: function(scope,element,attrs){
            //Я использовал jQuery? нихрена себе...
            element.on('click', function(){
                if(element.text() === 'foo'){
                    element.text('bar');
                }else{
                    element.text('foo');
                }
            })
        }
    }    
})

