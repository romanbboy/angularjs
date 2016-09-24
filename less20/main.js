//Подключаем в модуль ngMockE2E(имитирует работу сервера)
var app = angular.module('app', []);

app.directive('uiSource', function(){
    return {
        //elem - это наш ui-source
        compile: function(elem){
            var escape = function(content){
                return content.replace(/\</g, '&lt;')
                              .replace(/\>/g, '&gt;')
            }
            //Создаем обычный Angular элемент
            var pre = angular.element('<pre class="prettyprint"></pre>');
            //Функция библиотеки prettify
            //Первым параметром принимает html(в нашем случае то что находится в ui-source)
            var pretty = prettyPrintOne(escape(elem.html()));
            console.log(pretty);
            pre.append(pretty);
            elem.replaceWith(pre);
        }
    }
})


