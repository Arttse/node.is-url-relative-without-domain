# is-url-relative-without-domain [![npm version](https://badge.fury.io/js/is-url-relative-without-domain.svg)](https://www.npmjs.com/package/is-url-relative-without-domain) [![Build Status](https://travis-ci.org/Arttse/node.is-url-relative-without-domain.svg?branch=master)](https://travis-ci.org/Arttse/node.is-url-relative-without-domain)

> Node.js module. Check if an URL is relative without domain


## Install

```
$ npm install -S is-url-relative-without-domain
```


## Usage

```js
var isUrlRelativeWithoutDomain = require('is-url-relative-without-domain');

isUrlRelativeWithoutDomain('/show/must?go=on');
//=> true

isUrlRelativeWithoutDomain('index.php');
//=> true

isUrlRelativeWithoutDomain('https://site.com/index.php');
//=> false

isUrlRelativeWithoutDomain('site.com/show/must?go=on');
//=> false
```


## License

MIT © Nikita «Arttse» Bystrov