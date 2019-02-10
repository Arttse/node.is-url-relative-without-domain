import test from 'ava'
import m from '../../../'

test('default', t => {
  t.true(m('индекс.php'))
  t.true(m('/индекс.php'))
})

test('inside last', t => {
  t.true(m('вну/три/index.php'))
  t.true(m('/вну/три/index.php'))

  t.true(m('вну/три/индекс.php'))
  t.true(m('/вну/три/индекс.php'))
})

test('inside last with path dots', t => {
  t.true(m('вну/три/./а/б/index.php'))
  t.true(m('/вну/три/./а/б/index.php'))

  t.true(m('вну/три/../а/б/index.php'))
  t.true(m('/вну/три/../а/б/index.php'))

  t.true(m('вну/три/./а/б/индекс.php'))
  t.true(m('/вну/три/./а/б/индекс.php'))

  t.true(m('вну/три/../а/б/индекс.php'))
  t.true(m('/вну/три/../а/б/индекс.php'))
})

test('after index', t => {
  t.true(m('index.php/вну/три'))
  t.true(m('/index.php/вну/три'))

  t.true(m('индекс.php/вну/три'))
  t.true(m('/индекс.php/вну/три'))
})

test('after index with path dots', t => {
  t.true(m('index.php/вну/три/./а/б'))
  t.true(m('/index.php/вну/три/./а/б'))

  t.true(m('index.php/вну/три/../а/б'))
  t.true(m('/index.php/вну/три/../а/б'))

  t.true(m('индекс.php/вну/три/./а/б'))
  t.true(m('/индекс.php/вну/три/./а/б'))

  t.true(m('индекс.php/вну/три/../а/б'))
  t.true(m('/индекс.php/вну/три/../а/б'))
})
