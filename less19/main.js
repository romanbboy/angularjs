//Подключаем в модуль ngMockE2E(имитирует работу сервера)
var app = angular.module('app', ['ngMockE2E']);

//ngMockE2E дает нам возможность использовать $httpBackend 
app.run(function($httpBackend){
    var books = [
        {
            name:'AngularJS'
        },
        {
            name:'EmberJS'
        }
    ];
    
    //отправляем гет запрос на данный урл и в ответ получаем статус 200 и наш массив с книжками
    $httpBackend.whenGET('http://localhost:3001/books').respond(200, books);
    
    //отправляем post запрос на данный урл и в итоге добавляем новую книжку в массив и выводим новую книжку на экран
    $httpBackend.whenPOST('http://localhost:3001/books').respond(function(method,url,data){
        var result = JSON.parse(data);
        books.push(result);
        return [200,result];
    });
    
    
});

app.controller('myCtrl', function($http,$scope){
    $http.get('http://localhost:3001/books')
        .success(function(result){
            $scope.books = result;
        })
        .error(function(result){
            alert('error');
        });
    
    $scope.addBook = function(book){
        $http.post('http://localhost:3001/books', book)
            .success(function(result){
                alert('Book added');
                $scope.books.push(book);
                $scope.book = null;
            })
            .error(function(result){
                alert('Error');
            });
    };
});


