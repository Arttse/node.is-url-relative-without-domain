import test from 'ava'
import m from '../../../../../'

test('default', t => {
  t.false(m('под.сайт.рф/index.html'))
  t.false(m('//под.сайт.рф/index.html'))
  t.false(m('http://под.сайт.рф/index.html'))
  t.false(m('https://под.сайт.рф/index.html'))
  t.false(m('ftp://под.сайт.рф/index.html'))
})

test('inside last', t => {
  t.false(m('под.сайт.рф/вну/три/index.html'))
  t.false(m('//под.сайт.рф/вну/три/index.html'))
  t.false(m('http://под.сайт.рф/вну/три/index.html'))
  t.false(m('https://под.сайт.рф/вну/три/index.html'))
  t.false(m('ftp://под.сайт.рф/вну/три/index.html'))
})

test('inside last with path dots', t => {
  t.false(m('под.сайт.рф/вну/три/./а/б/index.html'))
  t.false(m('//под.сайт.рф/вну/три/./а/б/index.html'))
  t.false(m('http://под.сайт.рф/вну/три/./а/б/index.html'))
  t.false(m('https://под.сайт.рф/вну/три/./а/б/index.html'))
  t.false(m('ftp://под.сайт.рф/вну/три/./а/б/index.html'))

  t.false(m('под.сайт.рф/вну/три/../а/б/index.html'))
  t.false(m('//под.сайт.рф/вну/три/../а/б/index.html'))
  t.false(m('http://под.сайт.рф/вну/три/../а/б/index.html'))
  t.false(m('https://под.сайт.рф/вну/три/../а/б/index.html'))
  t.false(m('ftp://под.сайт.рф/вну/три/../а/б/index.html'))
})

test('after index', t => {
  t.false(m('под.сайт.рф/index.html/вну/три'))
  t.false(m('//под.сайт.рф/index.html/вну/три'))
  t.false(m('http://под.сайт.рф/index.html/вну/три'))
  t.false(m('https://под.сайт.рф/index.html/вну/три'))
  t.false(m('ftp://под.сайт.рф/index.html/вну/три'))
})

test('after index with path dots', t => {
  t.false(m('под.сайт.рф/index.html/вну/три/./а/б'))
  t.false(m('//под.сайт.рф/index.html/вну/три/./а/б'))
  t.false(m('http://под.сайт.рф/index.html/вну/три/./а/б'))
  t.false(m('https://под.сайт.рф/index.html/вну/три/./а/б'))
  t.false(m('ftp://под.сайт.рф/index.html/вну/три/./а/б'))

  t.false(m('под.сайт.рф/index.html/вну/три/../а/б'))
  t.false(m('//под.сайт.рф/index.html/вну/три/../а/б'))
  t.false(m('http://под.сайт.рф/index.html/вну/три/../а/б'))
  t.false(m('https://под.сайт.рф/index.html/вну/три/../а/б'))
  t.false(m('ftp://под.сайт.рф/index.html/вну/три/../а/б'))
})
