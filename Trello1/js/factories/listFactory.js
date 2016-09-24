angular.module('app').factory('listFactory', function(){
    //Когда большая фабрика то лучше сначала описать все а потом уже возвращать, а не сразу ретурн
    var service = {};
    
    var lists = [
        {
            id: 1,
            listName: 'ToDo'
        },
        {
            id: 2,
            listName: 'Doing'
        },
        {
            id: 3,
            listName: 'Done'
        }
    ]
    
    service.getLists = function(){
        return lists;
    }
    
    service.addList = function(listName){
        lists.push({
            id: _.uniqueId('list_'),
            listName: listName
        });
    };
    
    service.removeList = function(list){
        _.pull(lists, list);
    }
    
    return service;
})