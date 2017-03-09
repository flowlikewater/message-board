import Ember from 'ember';

export default Ember.Component.extend({
  addNewReview: false,
  actions: {
    reviewFormShow() {
      this.set('addNewReview', true);
    },
    saveReview() {
     var params = {
       title: this.get('title'),
       writer: this.get('writer'),
       rating: this.get('rating'),
       question: this.get('question')
     };
     this.set('addNewReview', false);
     this.sendAction('saveReview', params);
   }
  }
});
