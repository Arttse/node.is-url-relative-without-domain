/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import m from '../../../../../';

test ( 'default', t => {

  t.false ( m ( 'sub2.sub.domain.com/index.asp' ) );
  t.false ( m ( '//sub2.sub.domain.com/index.asp' ) );
  t.false ( m ( 'http://sub2.sub.domain.com/index.asp' ) );
  t.false ( m ( 'https://sub2.sub.domain.com/index.asp' ) );
  t.false ( m ( 'ftp://sub2.sub.domain.com/index.asp' ) );

} );

test ( 'inside last', t => {

  t.false ( m ( 'sub2.sub.domain.com/in/side/index.asp' ) );
  t.false ( m ( '//sub2.sub.domain.com/in/side/index.asp' ) );
  t.false ( m ( 'http://sub2.sub.domain.com/in/side/index.asp' ) );
  t.false ( m ( 'https://sub2.sub.domain.com/in/side/index.asp' ) );
  t.false ( m ( 'ftp://sub2.sub.domain.com/in/side/index.asp' ) );

} );

test ( 'inside last with path dots', t => {

  t.false ( m ( 'sub2.sub.domain.com/in/side/./a/b/index.asp' ) );
  t.false ( m ( '//sub2.sub.domain.com/in/side/./a/b/index.asp' ) );
  t.false ( m ( 'http://sub2.sub.domain.com/in/side/./a/b/index.asp' ) );
  t.false ( m ( 'https://sub2.sub.domain.com/in/side/./a/b/index.asp' ) );
  t.false ( m ( 'ftp://sub2.sub.domain.com/in/side/./a/b/index.asp' ) );

  t.false ( m ( 'sub2.sub.domain.com/in/side/../a/b/index.asp' ) );
  t.false ( m ( '//sub2.sub.domain.com/in/side/../a/b/index.asp' ) );
  t.false ( m ( 'http://sub2.sub.domain.com/in/side/../a/b/index.asp' ) );
  t.false ( m ( 'https://sub2.sub.domain.com/in/side/../a/b/index.asp' ) );
  t.false ( m ( 'ftp://sub2.sub.domain.com/in/side/../a/b/index.asp' ) );

} );

test ( 'after index', t => {

  t.false ( m ( 'sub2.sub.domain.com/index.asp/in/side' ) );
  t.false ( m ( '//sub2.sub.domain.com/index.asp/in/side' ) );
  t.false ( m ( 'http://sub2.sub.domain.com/index.asp/in/side' ) );
  t.false ( m ( 'https://sub2.sub.domain.com/index.asp/in/side' ) );
  t.false ( m ( 'ftp://sub2.sub.domain.com/index.asp/in/side' ) );

} );

test ( 'after index with path dots', t => {

  t.false ( m ( 'sub2.sub.domain.com/index.asp/in/side/./a/b' ) );
  t.false ( m ( '//sub2.sub.domain.com/index.asp/in/side/./a/b' ) );
  t.false ( m ( 'http://sub2.sub.domain.com/index.asp/in/side/./a/b' ) );
  t.false ( m ( 'https://sub2.sub.domain.com/index.asp/in/side/./a/b' ) );
  t.false ( m ( 'ftp://sub2.sub.domain.com/index.asp/in/side/./a/b' ) );

  t.false ( m ( 'sub2.sub.domain.com/index.asp/in/side/../a/b' ) );
  t.false ( m ( '//sub2.sub.domain.com/index.asp/in/side/../a/b' ) );
  t.false ( m ( 'http://sub2.sub.domain.com/index.asp/in/side/../a/b' ) );
  t.false ( m ( 'https://sub2.sub.domain.com/index.asp/in/side/../a/b' ) );
  t.false ( m ( 'ftp://sub2.sub.domain.com/index.asp/in/side/../a/b' ) );

} );
