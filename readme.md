# Food [![Build Status](https://travis-ci.org/stanzhengdev/npm-food.svg?branch=master)](https://travis-ci.org/stanzhengdev/Food)

>


## Install

```
$ npm install --save food
```


## Usage

```js
const food = require('food');

food('unicorns');
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

### food(input, [options])

#### input

Type: `string`

search term passed in for fuzzy searching.

#### options
Note** this project uses fuse for searching so see (https://github.com/krisk/fuse#options)[https://github.com/krisk/fuse#options] for full options.
##### key

Type: `array<string>`<br>
Default: `false`

A list of nested json parameters for the parser to look for.


## License

MIT © [Stanley Zheng](https://github.com/stanzheng)
