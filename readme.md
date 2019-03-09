# is-url-relative-without-domain
[![Build Status](https://travis-ci.org/Arttse/node.is-url-relative-without-domain.svg?branch=master)](https://travis-ci.org/Arttse/node.is-url-relative-without-domain)
[![Coverage Status](https://coveralls.io/repos/github/Arttse/node.is-url-relative-without-domain/badge.svg?branch=master)](https://coveralls.io/github/Arttse/node.is-url-relative-without-domain?branch=master)
[![Known Vulnerabilities](https://snyk.io/test/github/arttse/node.is-url-relative-without-domain/badge.svg)](https://snyk.io/test/github/arttse/node.is-url-relative-without-domain)

> Node.js module. Checks if a URL is relative without domain

Version 2 requires Node.js >= 6.13.

## Install

### Package `domains` included
```sh
# NPM
$ npm install is-url-relative-without-domain

# Yarn
$ yarn add is-url-relative-without-domain
```

### Without package `domains`
```sh
# NPM
$ npm install is-url-relative-without-domain --no-optional

# Yarn
$ yarn add is-url-relative-without-domain --ignore-optional

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

By default package using optional dependency `domains`. But, if you want to using your own list of domains, you can install without optional dependencies and specify code like this:
```js
isUrlRelativeWithoutDomain('site.com/foo/bar', ['com', 'рф', '世界']);
```
In second argument you can add your own array of domains in Unicode.


## License
[MIT](LICENSE) &copy; 2016-2019 Nikita Bystrov (Arttse)
