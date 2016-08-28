/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import m from '../../';

test ( 'uncategorized', t => {

  t.true ( m ( 'httpshow/must?go=on' ) );
  t.true ( m ( '?foo=1&bar=2' ) );
  t.true ( m ( '/?foo=1&bar=2' ) );
  t.true ( m ( '#hash' ) );
  t.true ( m ( '/#hash' ) );
  t.true ( m ( '№1test' ) );
  t.true ( m ( '@do' ) );
  t.true ( m ( ' space ' ) );
  t.true ( m ( 'node.is-url-relative-without-domain' ) );
  t.true ( m ( 'picture.jpg' ) );
  t.true ( m ( '/picture.jpg' ) );

} );

test ( 'protocols without colon-slash-slash', t => {

  t.false ( m ( 'mailto:help@site.com' ) );
  t.false ( m ( 'tel:1234567890' ) );

} );
