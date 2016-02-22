import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return [
      { id: '11', name: 'Room 1' },
      { id: '12', name: 'Room 2' },
      { id: '13', name: 'Room 3' }
    ];
  }
});
