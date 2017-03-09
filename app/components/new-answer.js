import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    AnswerShow() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
     var params = {
       title: this.get('title'),
       writer: this.get('writer'),
       rating: this.get('rating'),
       question: this.get('question')
     };
     this.set('addNewAnswer', false);
     this.sendAction('saveAnswer', params);
   }
  }
});
