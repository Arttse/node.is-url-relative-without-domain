/* eslint no-array-constructor: 0 */
/* eslint no-new-object: 0 */
/* eslint padded-blocks: 0 */
/* eslint brace-style: 0 */
/* eslint max-statements-per-line: 0 */
'use strict';

import test from 'ava';
import m from '../../../../';

test ( 'default', t => {

  t.false ( m ( 'сайт.рф/index.asp' ) );
  t.false ( m ( '//сайт.рф/index.asp' ) );
  t.false ( m ( 'http://сайт.рф/index.asp' ) );
  t.false ( m ( 'https://сайт.рф/index.asp' ) );
  t.false ( m ( 'ftp://сайт.рф/index.asp' ) );

} );

test ( 'inside last', t => {

  t.false ( m ( 'сайт.рф/вну/три/index.asp' ) );
  t.false ( m ( '//сайт.рф/вну/три/index.asp' ) );
  t.false ( m ( 'http://сайт.рф/вну/три/index.asp' ) );
  t.false ( m ( 'https://сайт.рф/вну/три/index.asp' ) );
  t.false ( m ( 'ftp://сайт.рф/вну/три/index.asp' ) );

} );

test ( 'inside last with path dots', t => {

  t.false ( m ( 'сайт.рф/вну/три/./а/б/index.asp' ) );
  t.false ( m ( '//сайт.рф/вну/три/./а/б/index.asp' ) );
  t.false ( m ( 'http://сайт.рф/вну/три/./а/б/index.asp' ) );
  t.false ( m ( 'https://сайт.рф/вну/три/./а/б/index.asp' ) );
  t.false ( m ( 'ftp://сайт.рф/вну/три/./а/б/index.asp' ) );

  t.false ( m ( 'сайт.рф/вну/три/../а/б/index.asp' ) );
  t.false ( m ( '//сайт.рф/вну/три/../а/б/index.asp' ) );
  t.false ( m ( 'http://сайт.рф/вну/три/../а/б/index.asp' ) );
  t.false ( m ( 'https://сайт.рф/вну/три/../а/б/index.asp' ) );
  t.false ( m ( 'ftp://сайт.рф/вну/три/../а/б/index.asp' ) );

} );

test ( 'after index', t => {

  t.false ( m ( 'сайт.рф/index.asp/вну/три' ) );
  t.false ( m ( '//сайт.рф/index.asp/вну/три' ) );
  t.false ( m ( 'http://сайт.рф/index.asp/вну/три' ) );
  t.false ( m ( 'https://сайт.рф/index.asp/вну/три' ) );
  t.false ( m ( 'ftp://сайт.рф/index.asp/вну/три' ) );

} );

test ( 'after index with path dots', t => {

  t.false ( m ( 'сайт.рф/index.asp/вну/три/./а/б' ) );
  t.false ( m ( '//сайт.рф/index.asp/вну/три/./а/б' ) );
  t.false ( m ( 'http://сайт.рф/index.asp/вну/три/./а/б' ) );
  t.false ( m ( 'https://сайт.рф/index.asp/вну/три/./а/б' ) );
  t.false ( m ( 'ftp://сайт.рф/index.asp/вну/три/./а/б' ) );

  t.false ( m ( 'сайт.рф/index.asp/вну/три/../а/б' ) );
  t.false ( m ( '//сайт.рф/index.asp/вну/три/../а/б' ) );
  t.false ( m ( 'http://сайт.рф/index.asp/вну/три/../а/б' ) );
  t.false ( m ( 'https://сайт.рф/index.asp/вну/три/../а/б' ) );
  t.false ( m ( 'ftp://сайт.рф/index.asp/вну/три/../а/б' ) );

} );
