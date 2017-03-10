import Ember from 'ember';

export default Ember.Component.extend({
  updateQuestion: false,
  actions: {
    updateQuestion() {
      this.set('updateRentalForm', true);
    },
    update(question) {
      var params = {
        details: this.get('details'),
        title: this.get('title'),
        writer: this.get('writer'),
      };
      this.set('updateQuestion', false);
      this.sendAction('update', question, params);
    }
  }
});
