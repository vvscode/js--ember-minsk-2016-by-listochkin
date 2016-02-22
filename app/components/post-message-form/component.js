import Ember from 'ember';

export default Ember.Component.extend({
  newMessage: null,
  submit: Ember.K,
  onInit: Ember.on('init', function() {
    this.set('newMessage', Ember.Object.create({}));
  }),
  actions: {
    submit() {
      this.submit(...arguments);
    }
  }

});
