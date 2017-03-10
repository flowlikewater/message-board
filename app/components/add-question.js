import Ember from 'ember';

export default Ember.Component.extend({
  newQuestion: false,
  actions: {
    addQuestion(){
      this.set('newQuestion', true);
    },
    saveQuestion() {
      var params = {
        details: this.get('details'),
        title: this.get('title'),
        writer: this.get('writer'),
      };
      this.set('newQuestion', false);
      this.sendAction('saveQuestion', params);
    },
    cancelQuestion() {
      this.set('newQuestion',false);
    }
  }
});
