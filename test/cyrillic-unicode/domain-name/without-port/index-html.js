import test from 'ava'
import m from '../../../../'

test('default', t => {
  t.false(m('сайт.рф/index.html'))
  t.false(m('//сайт.рф/index.html'))
  t.false(m('http://сайт.рф/index.html'))
  t.false(m('https://сайт.рф/index.html'))
  t.false(m('ftp://сайт.рф/index.html'))
})

test('inside last', t => {
  t.false(m('сайт.рф/вну/три/index.html'))
  t.false(m('//сайт.рф/вну/три/index.html'))
  t.false(m('http://сайт.рф/вну/три/index.html'))
  t.false(m('https://сайт.рф/вну/три/index.html'))
  t.false(m('ftp://сайт.рф/вну/три/index.html'))
})

test('inside last with path dots', t => {
  t.false(m('сайт.рф/вну/три/./а/б/index.html'))
  t.false(m('//сайт.рф/вну/три/./а/б/index.html'))
  t.false(m('http://сайт.рф/вну/три/./а/б/index.html'))
  t.false(m('https://сайт.рф/вну/три/./а/б/index.html'))
  t.false(m('ftp://сайт.рф/вну/три/./а/б/index.html'))

  t.false(m('сайт.рф/вну/три/../а/б/index.html'))
  t.false(m('//сайт.рф/вну/три/../а/б/index.html'))
  t.false(m('http://сайт.рф/вну/три/../а/б/index.html'))
  t.false(m('https://сайт.рф/вну/три/../а/б/index.html'))
  t.false(m('ftp://сайт.рф/вну/три/../а/б/index.html'))
})

test('after index', t => {
  t.false(m('сайт.рф/index.html/вну/три'))
  t.false(m('//сайт.рф/index.html/вну/три'))
  t.false(m('http://сайт.рф/index.html/вну/три'))
  t.false(m('https://сайт.рф/index.html/вну/три'))
  t.false(m('ftp://сайт.рф/index.html/вну/три'))
})

test('after index with path dots', t => {
  t.false(m('сайт.рф/index.html/вну/три/./а/б'))
  t.false(m('//сайт.рф/index.html/вну/три/./а/б'))
  t.false(m('http://сайт.рф/index.html/вну/три/./а/б'))
  t.false(m('https://сайт.рф/index.html/вну/три/./а/б'))
  t.false(m('ftp://сайт.рф/index.html/вну/три/./а/б'))

  t.false(m('сайт.рф/index.html/вну/три/../а/б'))
  t.false(m('//сайт.рф/index.html/вну/три/../а/б'))
  t.false(m('http://сайт.рф/index.html/вну/три/../а/б'))
  t.false(m('https://сайт.рф/index.html/вну/три/../а/б'))
  t.false(m('ftp://сайт.рф/index.html/вну/три/../а/б'))
})
