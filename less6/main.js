var app = angular.module('app', []);
app.controller('myCtrl', function(){
    this.myLesson = 'mainLesson';
    
    this.addLesson = function(){
        alert('Add Lesson');
    };
});

app.controller('firstCtrl', function(){
    this.myLesson = 'firstLesson';
});

app.controller('secondCtrl', function(){
    this.myLesson = 'secondLesson';
});
