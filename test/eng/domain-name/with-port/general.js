/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import m from '../../../../';

test ( 'usual', t => {

  t.false ( m ( 'domain.com:123' ) );
  t.false ( m ( '//domain.com:123' ) );
  t.false ( m ( 'http://domain.com:123' ) );
  t.false ( m ( 'https://domain.com:123' ) );
  t.false ( m ( 'ftp://domain.com:123' ) );

} );

test ( 'with slash in the end', t => {

  t.false ( m ( 'domain.com:123/' ) );
  t.false ( m ( '//domain.com:123/' ) );
  t.false ( m ( 'http://domain.com:123/' ) );
  t.false ( m ( 'https://domain.com:123/' ) );
  t.false ( m ( 'ftp://domain.com:123/' ) );

} );

test ( 'inside', t => {

  t.false ( m ( 'domain.com:123/in/side' ) );
  t.false ( m ( '//domain.com:123/in/side' ) );
  t.false ( m ( 'http://domain.com:123/in/side' ) );
  t.false ( m ( 'https://domain.com:123/in/side' ) );
  t.false ( m ( 'ftp://domain.com:123/in/side' ) );

} );

test ( 'inside with params', t => {

  t.false ( m ( 'domain.com:123/in/side/?foo=bar' ) );
  t.false ( m ( '//domain.com:123/in/side/?foo=bar' ) );
  t.false ( m ( 'http://domain.com:123/in/side/?foo=bar' ) );
  t.false ( m ( 'https://domain.com:123/in/side/?foo=bar' ) );
  t.false ( m ( 'ftp://domain.com:123/in/side/?foo=bar' ) );

} );

test ( 'inside with path dots', t => {

  t.false ( m ( 'domain.com:123/in/side/./a' ) );
  t.false ( m ( '//domain.com:123/in/side/./a' ) );
  t.false ( m ( 'http://domain.com:123/in/side/./a' ) );
  t.false ( m ( 'https://domain.com:123/in/side/./a' ) );
  t.false ( m ( 'ftp://domain.com:123/in/side/./a' ) );

  t.false ( m ( 'domain.com:123/in/side/../a' ) );
  t.false ( m ( '//domain.com:123/in/side/../a' ) );
  t.false ( m ( 'http://domain.com:123/in/side/../a' ) );
  t.false ( m ( 'https://domain.com:123/in/side/../a' ) );
  t.false ( m ( 'ftp://domain.com:123/in/side/../a' ) );

} );

test ( 'inside with path dots & params', t => {

  t.false ( m ( 'domain.com:123/in/side/./a/?foo=bar' ) );
  t.false ( m ( '//domain.com:123/in/side/./a/?foo=bar' ) );
  t.false ( m ( 'http://domain.com:123/in/side/./a/?foo=bar' ) );
  t.false ( m ( 'https://domain.com:123/in/side/./a/?foo=bar' ) );
  t.false ( m ( 'ftp://domain.com:123/in/side/./a/?foo=bar' ) );

  t.false ( m ( 'domain.com:123/in/side/../a/?foo=bar' ) );
  t.false ( m ( '//domain.com:123/in/side/../a/?foo=bar' ) );
  t.false ( m ( 'http://domain.com:123/in/side/../a/?foo=bar' ) );
  t.false ( m ( 'https://domain.com:123/in/side/../a/?foo=bar' ) );
  t.false ( m ( 'ftp://domain.com:123/in/side/../a/?foo=bar' ) );

} );
