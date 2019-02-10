import test from 'ava'
import m from '../'

test('a string', t => {
  t.throws(() => { m() }, 'Expected a string, not undefined')
  t.throws(() => { m([]) }, 'Expected a string, not object')
  t.throws(() => { m({}) }, 'Expected a string, not object')
})
