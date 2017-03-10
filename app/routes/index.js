import Ember from 'ember';

export default Ember.Route.extend({
  showAnswer: false,
  model() {
    return Ember.RSVP.hash({
      questions: this.store.findAll('question'),
      answers: this.store.findAll('answer')
    });
  },
  actions: {
    saveAnswer(params){
      var newAnswer = this.store.createRecord('answer',params);
      var question = params.question;
      question.get('answers').addObject(newAnswer);
      newAnswer.save();
      this.transitionTo('index',question);
    },
    showAnswerNow(){
      this.set('showAnswer',true)
    },
    saveQuestion(params){
      var publishQuestion = this.store.createRecord('question', params);
      publishQuestion.save();
      this.transitionTo('index');
    },
    update(question, params){
      rental.save
    }
  }
});
