import test from 'ava';
import fn from '.';

test('find description', t => {
  t.is(fn.search('switzerland')[0].description, 'Switzerland');
  t.is(fn.search('melon')[0].description, 'melon');
  t.is(fn.search('palette')[0].description, 'artist palette');
});

test('default return 5', t => {
  t.is(fn.search('switzerland').length, 5);
});

test('numeric pass in ', t => {
  t.is(fn.search(123), 'Expected a string, got number.');
});

test('Test Display ', t => {
  t.is(fn.search('cake')[1].display, '🍥');
});
