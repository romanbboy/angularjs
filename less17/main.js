var app = angular.module('app', []);

//добавляем templateCache для того что бы потом работать с шаблонами
app.directive('wrapIn', function($templateCache){
    return {
        //Помещаем весь элемент в трансклуд(тоесть form и все что находится в нем, на буферизацию в php похоже)
        transclude: 'element',
        link: function(scope,element,attrs,ctrl,transclude){
            // attrs.wrapIn - это мы с помощью get получим значение атрибута wrap-in директивы(в нашем случае red)
            // в итоге в template будет наш шаблон <div class="red"></div>(идет сравнение attrs.wrapIn с <script type="text/ng-template" id="red">)
            var template = $templateCache.get(attrs.wrapIn);
            //в templateElement уже будет не обычная строка, а уже DOM объект
            var templateElement = angular.element(template);
            transclude(scope, function(clone){
                //в clone находится полнотью элемент form и все его содержимое
                //по порядку: сначала <div class="red"></div>, а в него добавляется clone(form и все его содержимое)
                element.after(templateElement.append(clone));
            });
        }
    };
});


