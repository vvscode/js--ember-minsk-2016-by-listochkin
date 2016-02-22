import { test } from 'qunit';
import moduleForAcceptance from 'minsk-training-app/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | room');

test('visiting /r/11/Room 1', function(assert) {
  visit('/r/11/Room 1');

  andThen(function() {
    // assert.equal(find('h3').text().trim(), 'Room 1');
    assert.equal(currentURL(), '/r/11/Room 1');
  });
});
