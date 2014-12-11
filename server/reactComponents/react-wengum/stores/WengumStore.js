var Reflux = require('reflux');
var WengumActions = require('../actions/WengumActions');

var WengumStore = Reflux.createStore({
    init: function() {
        this.listenToMany(WengumActions);
    },

    onNext: function(){
        this.update({state: 'next'});
    },

    onGoTo: function(id){
        this.update({state: 'click', id: id});
    },

    onGoToIndex: function(index){
        this.update({state: 'index', index: index});
    },

    update: function(state) {
        this.trigger(state);
    }
});


module.exports = WengumStore;
