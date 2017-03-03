import Ember from 'ember';

export default Ember.Component.extend({
  newQuestion: false,
  actions: {
    addNewQuestion(){
      this.set('newQuestion', true);
    },
    saveQuestion() {
      var params = {
        writer: this.get('writer'),
        title: this.get('title')
      };
      this.set('newQuestion', false);
      this.sendAction('saveQuestion', params);
    },
    cancelQuestion() {
      this.set('newQuestion',false);
    }
  }
});
