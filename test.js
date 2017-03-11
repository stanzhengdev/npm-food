import test from 'ava';
import fn from '.';

test('find description', t => {
	t.is(fn('switzerland')[0].description, 'Switzerland');
	t.is(fn('melon')[0].description, 'melon');
	t.is(fn('palette')[0].description, 'artist palette');
});
