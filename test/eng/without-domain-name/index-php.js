/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import m from '../../../';

test ( 'default', t => {

  t.true ( m ( 'index.php' ) );
  t.true ( m ( '/index.php' ) );

} );

test ( 'inside last', t => {

  t.true ( m ( 'in/side/index.php' ) );
  t.true ( m ( '/in/side/index.php' ) );

} );

test ( 'inside last with path dots', t => {

  t.true ( m ( 'in/side/./a/b/index.php' ) );
  t.true ( m ( '/in/side/./a/b/index.php' ) );

  t.true ( m ( 'in/side/../a/b/index.php' ) );
  t.true ( m ( '/in/side/../a/b/index.php' ) );

} );

test ( 'after index', t => {

  t.true ( m ( 'index.php/in/side' ) );
  t.true ( m ( '/index.php/in/side' ) );

} );

test ( 'after index with path dots', t => {

  t.true ( m ( 'index.php/in/side/./a/b' ) );
  t.true ( m ( '/index.php/in/side/./a/b' ) );

  t.true ( m ( 'index.php/in/side/../a/b' ) );
  t.true ( m ( '/index.php/in/side/../a/b' ) );

} );
