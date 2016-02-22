import { test } from 'qunit';
import moduleForAcceptance from 'minsk-training-app/tests/helpers/module-for-acceptance';
import Page from '../pages/room';

moduleForAcceptance('Acceptance | room');

test('visiting /r/11/Room 1', function(assert) {
  Page.visit();

  andThen(function() {
    assert.equal(Page.title(), 'Room 1');
    assert.equal(currentURL(), '/r/11/Room 1');
  });
});
