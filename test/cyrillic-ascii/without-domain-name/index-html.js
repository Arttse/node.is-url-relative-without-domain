/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import m from '../../../';

test ( 'default', t => {

  t.true ( m ( '%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.html' ) );
  t.true ( m ( '/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.html' ) );

  t.true ( m ( 'xn--d1achkm1a.html' ) );
  t.true ( m ( '/xn--d1achkm1a.html' ) );

} );

test ( 'inside last', t => {

  t.true ( m ( '%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/index.html' ) );
  t.true ( m ( '/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/index.html' ) );

  t.true ( m ( '%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.html' ) );
  t.true ( m ( '/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.html' ) );

  t.true ( m ( '%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/xn--d1achkm1a.html' ) );
  t.true ( m ( '/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/xn--d1achkm1a.html' ) );

} );

test ( 'inside last with path dots', t => {

  t.true ( m ( '%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1/index.html' ) );
  t.true ( m ( '/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1/index.html' ) );

  t.true ( m ( '%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1/index.html' ) );
  t.true ( m ( '/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1/index.html' ) );

  t.true ( m ( '%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.html' ) );
  t.true ( m ( '/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.html' ) );

  t.true ( m ( '%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.html' ) );
  t.true ( m ( '/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.html' ) );

  t.true ( m ( '%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1/xn--d1achkm1a.html' ) );
  t.true ( m ( '/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1/xn--d1achkm1a.html' ) );

  t.true ( m ( '%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1/xn--d1achkm1a.html' ) );
  t.true ( m ( '/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1/xn--d1achkm1a.html' ) );

} );

test ( 'after index', t => {

  t.true ( m ( 'index.html/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8' ) );
  t.true ( m ( '/index.html/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8' ) );

  t.true ( m ( '%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.html/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8' ) );
  t.true ( m ( '/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.html/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8' ) );

  t.true ( m ( 'xn--d1achkm1a.html/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8' ) );
  t.true ( m ( '/xn--d1achkm1a.html/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8' ) );

} );

test ( 'after index with path dots', t => {

  t.true ( m ( 'index.html/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1' ) );
  t.true ( m ( '/index.html/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1' ) );

  t.true ( m ( 'index.html/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1' ) );
  t.true ( m ( '/index.html/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1' ) );

  t.true ( m ( '%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.html/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1' ) );
  t.true ( m ( '/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.html/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1' ) );

  t.true ( m ( '%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.html/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1' ) );
  t.true ( m ( '/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.html/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1' ) );

  t.true ( m ( 'xn--d1achkm1a.html/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1' ) );
  t.true ( m ( '/xn--d1achkm1a.html/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1' ) );

  t.true ( m ( 'xn--d1achkm1a.html/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1' ) );
  t.true ( m ( '/xn--d1achkm1a.html/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1' ) );

} );
