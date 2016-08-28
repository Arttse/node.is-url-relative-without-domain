/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import m from '../../../';

test ( 'default', t => {

  t.true ( m ( 'индекс.asp' ) );
  t.true ( m ( '/индекс.asp' ) );

} );

test ( 'inside last', t => {

  t.true ( m ( 'вну/три/index.asp' ) );
  t.true ( m ( '/вну/три/index.asp' ) );

  t.true ( m ( 'вну/три/индекс.asp' ) );
  t.true ( m ( '/вну/три/индекс.asp' ) );

} );

test ( 'inside last with path dots', t => {

  t.true ( m ( 'вну/три/./а/б/index.asp' ) );
  t.true ( m ( '/вну/три/./а/б/index.asp' ) );

  t.true ( m ( 'вну/три/../а/б/index.asp' ) );
  t.true ( m ( '/вну/три/../а/б/index.asp' ) );

  t.true ( m ( 'вну/три/./а/б/индекс.asp' ) );
  t.true ( m ( '/вну/три/./а/б/индекс.asp' ) );

  t.true ( m ( 'вну/три/../а/б/индекс.asp' ) );
  t.true ( m ( '/вну/три/../а/б/индекс.asp' ) );

} );

test ( 'after index', t => {

  t.true ( m ( 'index.asp/вну/три' ) );
  t.true ( m ( '/index.asp/вну/три' ) );

  t.true ( m ( 'индекс.asp/вну/три' ) );
  t.true ( m ( '/индекс.asp/вну/три' ) );

} );

test ( 'after index with path dots', t => {

  t.true ( m ( 'index.asp/вну/три/./а/б' ) );
  t.true ( m ( '/index.asp/вну/три/./а/б' ) );

  t.true ( m ( 'index.asp/вну/три/../а/б' ) );
  t.true ( m ( '/index.asp/вну/три/../а/б' ) );

  t.true ( m ( 'индекс.asp/вну/три/./а/б' ) );
  t.true ( m ( '/индекс.asp/вну/три/./а/б' ) );

  t.true ( m ( 'индекс.asp/вну/три/../а/б' ) );
  t.true ( m ( '/индекс.asp/вну/три/../а/б' ) );

} );
