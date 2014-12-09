var Reflux = require('reflux');
var WengumActions = require('../actions/WengumActions');
var _ = require('lodash');

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

    update: function(state) {
        this.trigger(state);
    }
});


module.exports = WengumStore;
