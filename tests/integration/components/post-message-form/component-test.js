import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('post-message-form', 'Integration | Component | post message form', {
  integration: true
});

test('it renders', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });"

  this.render(hbs`{{post-message-form}}`);

  assert.equal(this.$('form').length, 1, 'It has form');
  assert.equal(this.$('form input[type=text]').length, 1, 'It has text input');
  assert.equal(this.$('form input[type=reset]').length, 1, 'It has reset button');
  assert.equal(this.$('form input[type=submit]').length, 1, 'It has submit button');

  // Template block usage:"
  this.render(hbs`
    {{#post-message-form}}
      template block text
    {{/post-message-form}}
  `);

  assert.ok(this.$().html().indexOf('template block text') >= 0, 'It renders passed content');
});
