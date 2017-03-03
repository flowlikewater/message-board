import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return {
      question: this.store.findRecord('question', params.question_id),
      answer: this.store.findAll('answer')
    }
  },
  actions: {
    saveReview(params) {
      var newReview = this.store.createRecord('answer', params);
      newReview.save();
    }
  }
});
