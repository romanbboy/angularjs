var app = angular.module('app', []);

app.controller('myCtrl', function($http){
    $http.get('http://localhost:3001/books')
        .success(function(result){
            alert('success');
        })
        .error(function(result){
            alert('error');
        });
})


