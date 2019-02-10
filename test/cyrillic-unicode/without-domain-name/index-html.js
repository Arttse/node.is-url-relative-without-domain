import test from 'ava'
import m from '../../../'

test('default', t => {
  t.true(m('индекс.html'))
  t.true(m('/индекс.html'))
})

test('inside last', t => {
  t.true(m('вну/три/index.html'))
  t.true(m('/вну/три/index.html'))

  t.true(m('вну/три/индекс.html'))
  t.true(m('/вну/три/индекс.html'))
})

test('inside last with path dots', t => {
  t.true(m('вну/три/./а/б/index.html'))
  t.true(m('/вну/три/./а/б/index.html'))

  t.true(m('вну/три/../а/б/index.html'))
  t.true(m('/вну/три/../а/б/index.html'))

  t.true(m('вну/три/./а/б/индекс.html'))
  t.true(m('/вну/три/./а/б/индекс.html'))

  t.true(m('вну/три/../а/б/индекс.html'))
  t.true(m('/вну/три/../а/б/индекс.html'))
})

test('after index', t => {
  t.true(m('index.html/вну/три'))
  t.true(m('/index.html/вну/три'))

  t.true(m('индекс.html/вну/три'))
  t.true(m('/индекс.html/вну/три'))
})

test('after index with path dots', t => {
  t.true(m('index.html/вну/три/./а/б'))
  t.true(m('/index.html/вну/три/./а/б'))

  t.true(m('index.html/вну/три/../а/б'))
  t.true(m('/index.html/вну/три/../а/б'))

  t.true(m('индекс.html/вну/три/./а/б'))
  t.true(m('/индекс.html/вну/три/./а/б'))

  t.true(m('индекс.html/вну/три/../а/б'))
  t.true(m('/индекс.html/вну/три/../а/б'))
})
