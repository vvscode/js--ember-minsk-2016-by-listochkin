import { test } from 'qunit';
import moduleForAcceptance from 'minsk-training-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | room list');

test('visiting room-list at /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(find('ul').length, 1);
    assert.equal(find('ul li').length, 3);
    assert.equal(find('ul li:first').text(), 'Room 1');
    assert.equal(currentURL(), '/');
  });
});


test('opening room by link from list', function(assert) {
  visit('/');
  click('ul li:first a');

  andThen(function() {
    assert.equal(currentURL(), '/r/11/Room 1');
  });
});
