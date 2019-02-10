import test from 'ava'
import m from '../../../../../'

test('default', t => {
  t.false(m('под2.под.сайт.рф:123/index.asp'))
  t.false(m('//под2.под.сайт.рф:123/index.asp'))
  t.false(m('http://под2.под.сайт.рф:123/index.asp'))
  t.false(m('https://под2.под.сайт.рф:123/index.asp'))
  t.false(m('ftp://под2.под.сайт.рф:123/index.asp'))
})

test('inside last', t => {
  t.false(m('под2.под.сайт.рф:123/вну/три/index.asp'))
  t.false(m('//под2.под.сайт.рф:123/вну/три/index.asp'))
  t.false(m('http://под2.под.сайт.рф:123/вну/три/index.asp'))
  t.false(m('https://под2.под.сайт.рф:123/вну/три/index.asp'))
  t.false(m('ftp://под2.под.сайт.рф:123/вну/три/index.asp'))
})

test('inside last with path dots', t => {
  t.false(m('под2.под.сайт.рф:123/вну/три/./а/б/index.asp'))
  t.false(m('//под2.под.сайт.рф:123/вну/три/./а/б/index.asp'))
  t.false(m('http://под2.под.сайт.рф:123/вну/три/./а/б/index.asp'))
  t.false(m('https://под2.под.сайт.рф:123/вну/три/./а/б/index.asp'))
  t.false(m('ftp://под2.под.сайт.рф:123/вну/три/./а/б/index.asp'))

  t.false(m('под2.под.сайт.рф:123/вну/три/../а/б/index.asp'))
  t.false(m('//под2.под.сайт.рф:123/вну/три/../а/б/index.asp'))
  t.false(m('http://под2.под.сайт.рф:123/вну/три/../а/б/index.asp'))
  t.false(m('https://под2.под.сайт.рф:123/вну/три/../а/б/index.asp'))
  t.false(m('ftp://под2.под.сайт.рф:123/вну/три/../а/б/index.asp'))
})

test('after index', t => {
  t.false(m('под2.под.сайт.рф:123/index.asp/вну/три'))
  t.false(m('//под2.под.сайт.рф:123/index.asp/вну/три'))
  t.false(m('http://под2.под.сайт.рф:123/index.asp/вну/три'))
  t.false(m('https://под2.под.сайт.рф:123/index.asp/вну/три'))
  t.false(m('ftp://под2.под.сайт.рф:123/index.asp/вну/три'))
})

test('after index with path dots', t => {
  t.false(m('под2.под.сайт.рф:123/index.asp/вну/три/./а/б'))
  t.false(m('//под2.под.сайт.рф:123/index.asp/вну/три/./а/б'))
  t.false(m('http://под2.под.сайт.рф:123/index.asp/вну/три/./а/б'))
  t.false(m('https://под2.под.сайт.рф:123/index.asp/вну/три/./а/б'))
  t.false(m('ftp://под2.под.сайт.рф:123/index.asp/вну/три/./а/б'))

  t.false(m('под2.под.сайт.рф:123/index.asp/вну/три/../а/б'))
  t.false(m('//под2.под.сайт.рф:123/index.asp/вну/три/../а/б'))
  t.false(m('http://под2.под.сайт.рф:123/index.asp/вну/три/../а/б'))
  t.false(m('https://под2.под.сайт.рф:123/index.asp/вну/три/../а/б'))
  t.false(m('ftp://под2.под.сайт.рф:123/index.asp/вну/три/../а/б'))
})
