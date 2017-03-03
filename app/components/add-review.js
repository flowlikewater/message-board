import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
     var params = {
       writer: this.get('writer'),
       title: this.get('title'),
       question: this.get('question')
     };
     this.set('addNewReview', false);
     this.sendAction('saveReview', params);
   }
  }
});
