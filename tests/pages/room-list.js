import PageObject from 'minsk-training-app/tests/page-object';

let {
  visitable,
  text,
  clickable,
  collection
} = PageObject;

export default PageObject.create({
  visit: visitable('/'),
  roomList: collection({ itemScope: '[data-set="room-list"]' }),
  roomListItems: collection({
    itemScope: 'ul li',
    item: {
      text: text('a'),
      link: clickable('a')
    }
  }),
  firstRoom: clickable('ul li a')
});
