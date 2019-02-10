import test from 'ava'
import m from '../../../'

test('usual', t => {
  t.true(m(''))
  t.true(m('/'))
})

test('inside', t => {
  t.true(m('in'))
  t.true(m('/in'))

  t.true(m('in/side'))
  t.true(m('/in/side'))
})

test('inside with hash', t => {
  t.true(m('in#hash'))
  t.true(m('/in#hash'))

  t.true(m('in/side#hash'))
  t.true(m('/in/side#hash'))
})

test('inside with params', t => {
  t.true(m('in/side/?foo=bar'))
  t.true(m('/in/side/?foo=bar'))
})

test('inside with path dots', t => {
  t.true(m('in/side/./a'))
  t.true(m('/in/side/./a'))

  t.true(m('in/side/../a'))
  t.true(m('/in/side/../a'))
})

test('inside with path dots & params', t => {
  t.true(m('in/side/./a/?foo=bar'))
  t.true(m('/in/side/./a/?foo=bar'))

  t.true(m('in/side/../a/?foo=bar'))
  t.true(m('/in/side/../a/?foo=bar'))
})
