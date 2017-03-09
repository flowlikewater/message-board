import Ember from 'ember';

export default Ember.Component.extend({
  showAnswer: false,
  actions: {
    showAnswerNow(){
      this.set('showAnswer',true);
    },
    hideAnswerNow(){
      this.set('showAnswer', false);
    }
  }
});
