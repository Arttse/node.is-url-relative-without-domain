import test from 'ava'
import m from '../../../../../'

test('default', t => {
  t.false(m('под4.под3.под2.под.сайт.рф/index.asp'))
  t.false(m('//под4.под3.под2.под.сайт.рф/index.asp'))
  t.false(m('http://под4.под3.под2.под.сайт.рф/index.asp'))
  t.false(m('https://под4.под3.под2.под.сайт.рф/index.asp'))
  t.false(m('ftp://под4.под3.под2.под.сайт.рф/index.asp'))
})

test('inside last', t => {
  t.false(m('под4.под3.под2.под.сайт.рф/вну/три/index.asp'))
  t.false(m('//под4.под3.под2.под.сайт.рф/вну/три/index.asp'))
  t.false(m('http://под4.под3.под2.под.сайт.рф/вну/три/index.asp'))
  t.false(m('https://под4.под3.под2.под.сайт.рф/вну/три/index.asp'))
  t.false(m('ftp://под4.под3.под2.под.сайт.рф/вну/три/index.asp'))
})

test('inside last with path dots', t => {
  t.false(m('под4.под3.под2.под.сайт.рф/вну/три/./а/б/index.asp'))
  t.false(m('//под4.под3.под2.под.сайт.рф/вну/три/./а/б/index.asp'))
  t.false(m('http://под4.под3.под2.под.сайт.рф/вну/три/./а/б/index.asp'))
  t.false(m('https://под4.под3.под2.под.сайт.рф/вну/три/./а/б/index.asp'))
  t.false(m('ftp://под4.под3.под2.под.сайт.рф/вну/три/./а/б/index.asp'))

  t.false(m('под4.под3.под2.под.сайт.рф/вну/три/../а/б/index.asp'))
  t.false(m('//под4.под3.под2.под.сайт.рф/вну/три/../а/б/index.asp'))
  t.false(m('http://под4.под3.под2.под.сайт.рф/вну/три/../а/б/index.asp'))
  t.false(m('https://под4.под3.под2.под.сайт.рф/вну/три/../а/б/index.asp'))
  t.false(m('ftp://под4.под3.под2.под.сайт.рф/вну/три/../а/б/index.asp'))
})

test('after index', t => {
  t.false(m('под4.под3.под2.под.сайт.рф/index.asp/вну/три'))
  t.false(m('//под4.под3.под2.под.сайт.рф/index.asp/вну/три'))
  t.false(m('http://под4.под3.под2.под.сайт.рф/index.asp/вну/три'))
  t.false(m('https://под4.под3.под2.под.сайт.рф/index.asp/вну/три'))
  t.false(m('ftp://под4.под3.под2.под.сайт.рф/index.asp/вну/три'))
})

test('after index with path dots', t => {
  t.false(m('под4.под3.под2.под.сайт.рф/index.asp/вну/три/./а/б'))
  t.false(m('//под4.под3.под2.под.сайт.рф/index.asp/вну/три/./а/б'))
  t.false(m('http://под4.под3.под2.под.сайт.рф/index.asp/вну/три/./а/б'))
  t.false(m('https://под4.под3.под2.под.сайт.рф/index.asp/вну/три/./а/б'))
  t.false(m('ftp://под4.под3.под2.под.сайт.рф/index.asp/вну/три/./а/б'))

  t.false(m('под4.под3.под2.под.сайт.рф/index.asp/вну/три/../а/б'))
  t.false(m('//под4.под3.под2.под.сайт.рф/index.asp/вну/три/../а/б'))
  t.false(m('http://под4.под3.под2.под.сайт.рф/index.asp/вну/три/../а/б'))
  t.false(m('https://под4.под3.под2.под.сайт.рф/index.asp/вну/три/../а/б'))
  t.false(m('ftp://под4.под3.под2.под.сайт.рф/index.asp/вну/три/../а/б'))
})
