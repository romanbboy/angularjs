angular.module('app').controller('cardCtrl', function(cardFactory){
    //Показывает в каком состоянии карточка(если true то мы ее редактируем)
    this.isEditing = false;
    //храним данные по карточке которую мы редактируем
    this.editingCard = null;
    
    this.deleteCard = function(card){
        cardFactory.deleteCard(card);
    }
    
    this.editCard = function(card){
        this.isEditing = true;
        //это делается для того что бы откатить изменения(допустим я начал редактировать карточку и передумал, что бы у меня мои изменения не сохранились)
        this.editingCard = angular.copy(card);
    }
    
    this.updateCard = function(){
        cardFactory.updateCard(this.editingCard);
        this.editingCard = null;
        this.isEditing = false;
    }
});