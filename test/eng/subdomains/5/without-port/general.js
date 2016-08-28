/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import m from '../../../../../';

test ( 'usual', t => {

  t.false ( m ( 'sub5.sub4.sub3.sub2.sub.domain.com' ) );
  t.false ( m ( '//sub5.sub4.sub3.sub2.sub.domain.com' ) );
  t.false ( m ( 'http://sub5.sub4.sub3.sub2.sub.domain.com' ) );
  t.false ( m ( 'https://sub5.sub4.sub3.sub2.sub.domain.com' ) );
  t.false ( m ( 'ftp://sub5.sub4.sub3.sub2.sub.domain.com' ) );

} );

test ( 'with slash in the end', t => {

  t.false ( m ( 'sub5.sub4.sub3.sub2.sub.domain.com/' ) );
  t.false ( m ( '//sub5.sub4.sub3.sub2.sub.domain.com/' ) );
  t.false ( m ( 'http://sub5.sub4.sub3.sub2.sub.domain.com/' ) );
  t.false ( m ( 'https://sub5.sub4.sub3.sub2.sub.domain.com/' ) );
  t.false ( m ( 'ftp://sub5.sub4.sub3.sub2.sub.domain.com/' ) );

} );

test ( 'inside', t => {

  t.false ( m ( 'sub5.sub4.sub3.sub2.sub.domain.com/in/side' ) );
  t.false ( m ( '//sub5.sub4.sub3.sub2.sub.domain.com/in/side' ) );
  t.false ( m ( 'http://sub5.sub4.sub3.sub2.sub.domain.com/in/side' ) );
  t.false ( m ( 'https://sub5.sub4.sub3.sub2.sub.domain.com/in/side' ) );
  t.false ( m ( 'ftp://sub5.sub4.sub3.sub2.sub.domain.com/in/side' ) );

} );

test ( 'inside with params', t => {

  t.false ( m ( 'sub5.sub4.sub3.sub2.sub.domain.com/in/side/?foo=bar' ) );
  t.false ( m ( '//sub5.sub4.sub3.sub2.sub.domain.com/in/side/?foo=bar' ) );
  t.false ( m ( 'http://sub5.sub4.sub3.sub2.sub.domain.com/in/side/?foo=bar' ) );
  t.false ( m ( 'https://sub5.sub4.sub3.sub2.sub.domain.com/in/side/?foo=bar' ) );
  t.false ( m ( 'ftp://sub5.sub4.sub3.sub2.sub.domain.com/in/side/?foo=bar' ) );

} );

test ( 'inside with path dots', t => {

  t.false ( m ( 'sub5.sub4.sub3.sub2.sub.domain.com/in/side/./a' ) );
  t.false ( m ( '//sub5.sub4.sub3.sub2.sub.domain.com/in/side/./a' ) );
  t.false ( m ( 'http://sub5.sub4.sub3.sub2.sub.domain.com/in/side/./a' ) );
  t.false ( m ( 'https://sub5.sub4.sub3.sub2.sub.domain.com/in/side/./a' ) );
  t.false ( m ( 'ftp://sub5.sub4.sub3.sub2.sub.domain.com/in/side/./a' ) );

  t.false ( m ( 'sub5.sub4.sub3.sub2.sub.domain.com/in/side/../a' ) );
  t.false ( m ( '//sub5.sub4.sub3.sub2.sub.domain.com/in/side/../a' ) );
  t.false ( m ( 'http://sub5.sub4.sub3.sub2.sub.domain.com/in/side/../a' ) );
  t.false ( m ( 'https://sub5.sub4.sub3.sub2.sub.domain.com/in/side/../a' ) );
  t.false ( m ( 'ftp://sub5.sub4.sub3.sub2.sub.domain.com/in/side/../a' ) );

} );

test ( 'inside with path dots & params', t => {

  t.false ( m ( 'sub5.sub4.sub3.sub2.sub.domain.com/in/side/./a/?foo=bar' ) );
  t.false ( m ( '//sub5.sub4.sub3.sub2.sub.domain.com/in/side/./a/?foo=bar' ) );
  t.false ( m ( 'http://sub5.sub4.sub3.sub2.sub.domain.com/in/side/./a/?foo=bar' ) );
  t.false ( m ( 'https://sub5.sub4.sub3.sub2.sub.domain.com/in/side/./a/?foo=bar' ) );
  t.false ( m ( 'ftp://sub5.sub4.sub3.sub2.sub.domain.com/in/side/./a/?foo=bar' ) );

  t.false ( m ( 'sub5.sub4.sub3.sub2.sub.domain.com/in/side/../a/?foo=bar' ) );
  t.false ( m ( '//sub5.sub4.sub3.sub2.sub.domain.com/in/side/../a/?foo=bar' ) );
  t.false ( m ( 'http://sub5.sub4.sub3.sub2.sub.domain.com/in/side/../a/?foo=bar' ) );
  t.false ( m ( 'https://sub5.sub4.sub3.sub2.sub.domain.com/in/side/../a/?foo=bar' ) );
  t.false ( m ( 'ftp://sub5.sub4.sub3.sub2.sub.domain.com/in/side/../a/?foo=bar' ) );

} );
