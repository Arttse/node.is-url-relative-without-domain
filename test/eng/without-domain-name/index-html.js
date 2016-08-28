/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import m from '../../../';

test ( 'default', t => {

  t.true ( m ( 'index.html' ) );
  t.true ( m ( '/index.html' ) );

} );

test ( 'inside last', t => {

  t.true ( m ( 'in/side/index.html' ) );
  t.true ( m ( '/in/side/index.html' ) );

} );

test ( 'inside last with path dots', t => {

  t.true ( m ( 'in/side/./a/b/index.html' ) );
  t.true ( m ( '/in/side/./a/b/index.html' ) );

  t.true ( m ( 'in/side/../a/b/index.html' ) );
  t.true ( m ( '/in/side/../a/b/index.html' ) );

} );

test ( 'after index', t => {

  t.true ( m ( 'index.html/in/side' ) );
  t.true ( m ( '/index.html/in/side' ) );

} );

test ( 'after index with path dots', t => {

  t.true ( m ( 'index.html/in/side/./a/b' ) );
  t.true ( m ( '/index.html/in/side/./a/b' ) );

  t.true ( m ( 'index.html/in/side/../a/b' ) );
  t.true ( m ( '/index.html/in/side/../a/b' ) );

} );
