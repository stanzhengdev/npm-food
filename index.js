'use strict';
var Fuse = require('fuse.js');
var emojis = require('./data/emoji.json');

module.exports = (input, opts) => {
	if (typeof input !== 'string') {
		throw new TypeError(`Expected a string, got ${typeof input}`);
	}

	opts = opts || {
		keys: ['description']
	};

	var fuse = new Fuse(emojis, opts);

	return fuse.search(input).slice(0, 5);
};
