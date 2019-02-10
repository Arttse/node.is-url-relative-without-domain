import test from 'ava'
import m from '../../../'

test('inside', t => {
  t.true(m('вну'))
  t.true(m('/вну'))

  t.true(m('вну/три'))
  t.true(m('/вну/три'))
})

test('inside with hash', t => {
  t.true(m('вну#hash'))
  t.true(m('/вну#hash'))

  t.true(m('вну/три#hash'))
  t.true(m('/вну/три#hash'))
})

test('inside with params', t => {
  t.true(m('вну/три/?раз=два'))
  t.true(m('/вну/три/?раз=два'))
})

test('inside with path dots', t => {
  t.true(m('вну/три/./а'))
  t.true(m('/вну/три/./а'))

  t.true(m('вну/три/../а'))
  t.true(m('/вну/три/../а'))
})

test('inside with path dots & params', t => {
  t.true(m('вну/три/./а/?раз=два'))
  t.true(m('/вну/три/./а/?раз=два'))

  t.true(m('вну/три/../а/?раз=два'))
  t.true(m('/вну/три/../а/?раз=два'))
})
