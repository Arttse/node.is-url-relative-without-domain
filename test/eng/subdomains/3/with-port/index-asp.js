/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import m from '../../../../../';

test ( 'default', t => {

  t.false ( m ( 'sub3.sub2.sub.domain.com:123/index.asp' ) );
  t.false ( m ( '//sub3.sub2.sub.domain.com:123/index.asp' ) );
  t.false ( m ( 'http://sub3.sub2.sub.domain.com:123/index.asp' ) );
  t.false ( m ( 'https://sub3.sub2.sub.domain.com:123/index.asp' ) );
  t.false ( m ( 'ftp://sub3.sub2.sub.domain.com:123/index.asp' ) );

} );

test ( 'inside last', t => {

  t.false ( m ( 'sub3.sub2.sub.domain.com:123/in/side/index.asp' ) );
  t.false ( m ( '//sub3.sub2.sub.domain.com:123/in/side/index.asp' ) );
  t.false ( m ( 'http://sub3.sub2.sub.domain.com:123/in/side/index.asp' ) );
  t.false ( m ( 'https://sub3.sub2.sub.domain.com:123/in/side/index.asp' ) );
  t.false ( m ( 'ftp://sub3.sub2.sub.domain.com:123/in/side/index.asp' ) );

} );

test ( 'inside last with path dots', t => {

  t.false ( m ( 'sub3.sub2.sub.domain.com:123/in/side/./a/b/index.asp' ) );
  t.false ( m ( '//sub3.sub2.sub.domain.com:123/in/side/./a/b/index.asp' ) );
  t.false ( m ( 'http://sub3.sub2.sub.domain.com:123/in/side/./a/b/index.asp' ) );
  t.false ( m ( 'https://sub3.sub2.sub.domain.com:123/in/side/./a/b/index.asp' ) );
  t.false ( m ( 'ftp://sub3.sub2.sub.domain.com:123/in/side/./a/b/index.asp' ) );

  t.false ( m ( 'sub3.sub2.sub.domain.com:123/in/side/../a/b/index.asp' ) );
  t.false ( m ( '//sub3.sub2.sub.domain.com:123/in/side/../a/b/index.asp' ) );
  t.false ( m ( 'http://sub3.sub2.sub.domain.com:123/in/side/../a/b/index.asp' ) );
  t.false ( m ( 'https://sub3.sub2.sub.domain.com:123/in/side/../a/b/index.asp' ) );
  t.false ( m ( 'ftp://sub3.sub2.sub.domain.com:123/in/side/../a/b/index.asp' ) );

} );

test ( 'after index', t => {

  t.false ( m ( 'sub3.sub2.sub.domain.com:123/index.asp/in/side' ) );
  t.false ( m ( '//sub3.sub2.sub.domain.com:123/index.asp/in/side' ) );
  t.false ( m ( 'http://sub3.sub2.sub.domain.com:123/index.asp/in/side' ) );
  t.false ( m ( 'https://sub3.sub2.sub.domain.com:123/index.asp/in/side' ) );
  t.false ( m ( 'ftp://sub3.sub2.sub.domain.com:123/index.asp/in/side' ) );

} );

test ( 'after index with path dots', t => {

  t.false ( m ( 'sub3.sub2.sub.domain.com:123/index.asp/in/side/./a/b' ) );
  t.false ( m ( '//sub3.sub2.sub.domain.com:123/index.asp/in/side/./a/b' ) );
  t.false ( m ( 'http://sub3.sub2.sub.domain.com:123/index.asp/in/side/./a/b' ) );
  t.false ( m ( 'https://sub3.sub2.sub.domain.com:123/index.asp/in/side/./a/b' ) );
  t.false ( m ( 'ftp://sub3.sub2.sub.domain.com:123/index.asp/in/side/./a/b' ) );

  t.false ( m ( 'sub3.sub2.sub.domain.com:123/index.asp/in/side/../a/b' ) );
  t.false ( m ( '//sub3.sub2.sub.domain.com:123/index.asp/in/side/../a/b' ) );
  t.false ( m ( 'http://sub3.sub2.sub.domain.com:123/index.asp/in/side/../a/b' ) );
  t.false ( m ( 'https://sub3.sub2.sub.domain.com:123/index.asp/in/side/../a/b' ) );
  t.false ( m ( 'ftp://sub3.sub2.sub.domain.com:123/index.asp/in/side/../a/b' ) );

} );
