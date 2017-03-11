# Food [![Build Status](https://travis-ci.org/stanzhengdev/npm-food.svg?branch=master)](https://travis-ci.org/stanzhengdev/npm-food)

>


## Install

```
$ npm install --save food
```


## Usage

```js
const food = require('food');

food.search('unicorns');
/*=>
    [{
        "unicode": "1F984",
        "display": "🦄",
        "description": "unicorn face",
        "category": "animal-mammal"
    } ...
*/
```


## API

### food.emojis
Type: `array<object>`

Array of emojis with the following properties

##### unicode

Unicode representation.

##### display

The visual representation.

##### description

Description of the emoji.

##### category

The grouping of the emoji.

### food.search(input, [options])

#### input

Type: `string`

search term passed in for fuzzy searching.

#### options
Note** this project uses fuse for searching so see [krisk/fuse](https://github.com/krisk/fuse#options) for full options.
##### key

Type: `array<string>`<br>
Default: `false`

A list of nested json parameters for the parser to look for.


## License

MIT © [Stanley Zheng](https://github.com/stanzheng)
