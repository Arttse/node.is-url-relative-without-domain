import test from 'ava'
import m from '../../../../../'

test('default', t => {
  t.false(m('под2.под.сайт.рф/index.php'))
  t.false(m('//под2.под.сайт.рф/index.php'))
  t.false(m('http://под2.под.сайт.рф/index.php'))
  t.false(m('https://под2.под.сайт.рф/index.php'))
  t.false(m('ftp://под2.под.сайт.рф/index.php'))
})

test('inside last', t => {
  t.false(m('под2.под.сайт.рф/вну/три/index.php'))
  t.false(m('//под2.под.сайт.рф/вну/три/index.php'))
  t.false(m('http://под2.под.сайт.рф/вну/три/index.php'))
  t.false(m('https://под2.под.сайт.рф/вну/три/index.php'))
  t.false(m('ftp://под2.под.сайт.рф/вну/три/index.php'))
})

test('inside last with path dots', t => {
  t.false(m('под2.под.сайт.рф/вну/три/./а/б/index.php'))
  t.false(m('//под2.под.сайт.рф/вну/три/./а/б/index.php'))
  t.false(m('http://под2.под.сайт.рф/вну/три/./а/б/index.php'))
  t.false(m('https://под2.под.сайт.рф/вну/три/./а/б/index.php'))
  t.false(m('ftp://под2.под.сайт.рф/вну/три/./а/б/index.php'))

  t.false(m('под2.под.сайт.рф/вну/три/../а/б/index.php'))
  t.false(m('//под2.под.сайт.рф/вну/три/../а/б/index.php'))
  t.false(m('http://под2.под.сайт.рф/вну/три/../а/б/index.php'))
  t.false(m('https://под2.под.сайт.рф/вну/три/../а/б/index.php'))
  t.false(m('ftp://под2.под.сайт.рф/вну/три/../а/б/index.php'))
})

test('after index', t => {
  t.false(m('под2.под.сайт.рф/index.php/вну/три'))
  t.false(m('//под2.под.сайт.рф/index.php/вну/три'))
  t.false(m('http://под2.под.сайт.рф/index.php/вну/три'))
  t.false(m('https://под2.под.сайт.рф/index.php/вну/три'))
  t.false(m('ftp://под2.под.сайт.рф/index.php/вну/три'))
})

test('after index with path dots', t => {
  t.false(m('под2.под.сайт.рф/index.php/вну/три/./а/б'))
  t.false(m('//под2.под.сайт.рф/index.php/вну/три/./а/б'))
  t.false(m('http://под2.под.сайт.рф/index.php/вну/три/./а/б'))
  t.false(m('https://под2.под.сайт.рф/index.php/вну/три/./а/б'))
  t.false(m('ftp://под2.под.сайт.рф/index.php/вну/три/./а/б'))

  t.false(m('под2.под.сайт.рф/index.php/вну/три/../а/б'))
  t.false(m('//под2.под.сайт.рф/index.php/вну/три/../а/б'))
  t.false(m('http://под2.под.сайт.рф/index.php/вну/три/../а/б'))
  t.false(m('https://под2.под.сайт.рф/index.php/вну/три/../а/б'))
  t.false(m('ftp://под2.под.сайт.рф/index.php/вну/три/../а/б'))
})
