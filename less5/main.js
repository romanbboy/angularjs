var app = angular.module('app', []);
app.controller('myBooksCtrl', function($scope){
    $scope.showBook = function(){
        alert('This are books');
    }
});

app.controller('angularBookCtrl', function($scope){
    $scope.showBook = function(){
        alert('This is an angular book');
    }
});

app.controller('emberBookCtrl', function($scope){
    
});
