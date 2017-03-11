#!/usr/bin/env node
'use strict';
const meow = require('meow');
const food = require('.');

const cli = meow(`
	Usage
	  $ food [input]

	Examples
	  $ food search unicorns
    [{
        "unicode": "1F984",
        "display": "🦄",
        "description": "unicorn face",
        "category": "animal-mammal"
    }....
`);

console.log(food.search(cli.input[0] || 'unicorns'));
