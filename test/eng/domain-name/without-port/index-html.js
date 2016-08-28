/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import m from '../../../../';

test ( 'default', t => {

  t.false ( m ( 'domain.com/index.html' ) );
  t.false ( m ( '//domain.com/index.html' ) );
  t.false ( m ( 'http://domain.com/index.html' ) );
  t.false ( m ( 'https://domain.com/index.html' ) );
  t.false ( m ( 'ftp://domain.com/index.html' ) );

} );

test ( 'inside last', t => {

  t.false ( m ( 'domain.com/in/side/index.html' ) );
  t.false ( m ( '//domain.com/in/side/index.html' ) );
  t.false ( m ( 'http://domain.com/in/side/index.html' ) );
  t.false ( m ( 'https://domain.com/in/side/index.html' ) );
  t.false ( m ( 'ftp://domain.com/in/side/index.html' ) );

} );

test ( 'inside last with path dots', t => {

  t.false ( m ( 'domain.com/in/side/./a/b/index.html' ) );
  t.false ( m ( '//domain.com/in/side/./a/b/index.html' ) );
  t.false ( m ( 'http://domain.com/in/side/./a/b/index.html' ) );
  t.false ( m ( 'https://domain.com/in/side/./a/b/index.html' ) );
  t.false ( m ( 'ftp://domain.com/in/side/./a/b/index.html' ) );

  t.false ( m ( 'domain.com/in/side/../a/b/index.html' ) );
  t.false ( m ( '//domain.com/in/side/../a/b/index.html' ) );
  t.false ( m ( 'http://domain.com/in/side/../a/b/index.html' ) );
  t.false ( m ( 'https://domain.com/in/side/../a/b/index.html' ) );
  t.false ( m ( 'ftp://domain.com/in/side/../a/b/index.html' ) );

} );

test ( 'after index', t => {

  t.false ( m ( 'domain.com/index.html/in/side' ) );
  t.false ( m ( '//domain.com/index.html/in/side' ) );
  t.false ( m ( 'http://domain.com/index.html/in/side' ) );
  t.false ( m ( 'https://domain.com/index.html/in/side' ) );
  t.false ( m ( 'ftp://domain.com/index.html/in/side' ) );

} );

test ( 'after index with path dots', t => {

  t.false ( m ( 'domain.com/index.html/in/side/./a/b' ) );
  t.false ( m ( '//domain.com/index.html/in/side/./a/b' ) );
  t.false ( m ( 'http://domain.com/index.html/in/side/./a/b' ) );
  t.false ( m ( 'https://domain.com/index.html/in/side/./a/b' ) );
  t.false ( m ( 'ftp://domain.com/index.html/in/side/./a/b' ) );

  t.false ( m ( 'domain.com/index.html/in/side/../a/b' ) );
  t.false ( m ( '//domain.com/index.html/in/side/../a/b' ) );
  t.false ( m ( 'http://domain.com/index.html/in/side/../a/b' ) );
  t.false ( m ( 'https://domain.com/index.html/in/side/../a/b' ) );
  t.false ( m ( 'ftp://domain.com/index.html/in/side/../a/b' ) );

} );
