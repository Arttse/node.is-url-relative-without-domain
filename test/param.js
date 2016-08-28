/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import m from '../';

test ( 'a string', t => {

  t.throws ( () => { m (); }, 'Expected a string, not undefined' );
  t.throws ( () => { m ( [] ); }, 'Expected a string, not object' );
  t.throws ( () => { m ( {} ); }, 'Expected a string, not object' );

} );
