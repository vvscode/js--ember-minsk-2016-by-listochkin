import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return this.store.find('room', params.room_id);
  },

  actions: {
    saveMessage(object, ev) {
      Ember.Logger.info('SaveMessage action', object, ev);
    }
  }
});
