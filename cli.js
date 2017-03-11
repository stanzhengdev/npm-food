#!/usr/bin/env node
'use strict';
const meow = require('meow');
const food = require('.');

const cli = meow(`
	Usage
	  $ food [input]

	Options
	  --options  Keywords  [Default: description]

	Examples
	  $ food search uncirons
	  unicorns & rainbows
`);

console.log(food.search(cli.input[0] || 'unicorns'));
