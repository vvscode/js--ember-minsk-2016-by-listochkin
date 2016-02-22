import { test } from 'qunit';
import moduleForAcceptance from 'minsk-training-app/tests/helpers/module-for-acceptance';
import Page from '../pages/room-list';

moduleForAcceptance('Acceptance | room list');

test('visiting room-list at /', function(assert) {
  visit('/');

  andThen(function() {
    assert.equal(Page.roomList().count(), 1);
    assert.equal(Page.roomListItems().count(), 3);
    assert.equal(Page.roomListItems(1).text(), 'Room 1');
  });
});


test('opening room by link from list', function(assert) {
  visit('/');
  Page.roomListItems(1).link();

  andThen(function() {
    assert.equal(currentURL(), '/r/11/Room 1');
  });
});
