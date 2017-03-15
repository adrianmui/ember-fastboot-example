import Ember from 'ember';

export default Ember.Controller.extend({
    queryParams: ['search'],
    search: {
        refreshModel: true
    },
    model: function(params) {
        
    }
});
