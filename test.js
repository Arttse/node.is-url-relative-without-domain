/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import m from './';

test ( 'expected a string', t => {

  t.throws ( () => { return m (); }, 'Expected a string, not undefined' );
  t.throws ( () => { return m ( [] ); }, 'Expected a string, not object' );
  t.throws ( () => { return m ( {} ); }, 'Expected a string, not object' );

} );

test ( 'check with «:»', t => {

  t.false ( m ( 'http://site' ) );
  t.false ( m ( 'http://admin:pass@site.com/in' ) );
  t.false ( m ( 'https://site/in' ) );
  t.false ( m ( 'ftp://site' ) );
  t.false ( m ( 'mailto:site' ) );
  t.false ( m ( 'tel:65712563' ) );

} );

test ( 'check with «.»', t => {

  t.false ( m ( 'test.com' ) );
  t.false ( m ( 'test.com/in' ) );
  t.false ( m ( 'test.com/in.php' ) );
  t.false ( m ( 'test.com:76/in.php' ) );
  t.false ( m ( 'http://test.com/foo/bar/./baz' ) );
  t.false ( m ( 'http://test.com/foo/bar/../baz' ) );

} );

test ( 'check starts at «/»', t => {

  t.true ( m ( '/in' ) );
  t.true ( m ( '/in/side' ) );
  t.true ( m ( '/in/side/./foo.php' ) );
  t.true ( m ( '/in/side#hash' ) );
  t.true ( m ( '/show/must?go=on' ) );
  t.true ( m ( '/#hash' ) );

  t.false ( m ( '//site' ) );
  t.false ( m ( '//site.com' ) );
  t.false ( m ( '//site.com/in' ) );

} );

test ( 'check start at «/» and with «.»', t => {

  t.false ( m ( '/test.com' ) );
  t.false ( m ( '/test.com/in' ) );
  t.false ( m ( '/test.com/in.php' ) );

} );

test ( 'check other starts', t => {

  t.true ( m ( 'site' ) );
  t.true ( m ( 'site/in' ) );
  t.true ( m ( 'site/in#hash' ) );
  t.true ( m ( 'show/must?go=on' ) );
  t.true ( m ( 'httpshow/must?go=on' ) );
  t.true ( m ( '?foo=1&bar=2' ) );
  t.true ( m ( '#hash' ) );
  t.true ( m ( '№1test' ) );
  t.true ( m ( '@do' ) );
  t.true ( m ( ' @space' ) );
  t.true ( m ( 'find/foo/bar/./baz' ) );
  t.true ( m ( 'find/foo/bar/../baz' ) );

  t.false ( m ( 'find:87/foo/bar/../baz' ) );
  t.false ( m ( 'find:87/foo/bar/../baz.php' ) );

} );
