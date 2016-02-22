import PageObject from 'minsk-training-app/tests/page-object';

let {
  visitable
} = PageObject;

export default PageObject.create({
  visit: visitable('/')
});
