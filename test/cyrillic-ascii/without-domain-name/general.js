import test from 'ava'
import m from '../../../'

test('inside', t => {
  t.true(m('%D0%B2%D0%BD%D1%83'))
  t.true(m('/%D0%B2%D0%BD%D1%83'))

  t.true(m('%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8'))
  t.true(m('/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8'))
})

test('inside with hash', t => {
  t.true(m('%D0%B2%D0%BD%D1%83#hash'))
  t.true(m('/%D0%B2%D0%BD%D1%83#hash'))

  t.true(m('%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8#hash'))
  t.true(m('/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8#hash'))
})

test('inside with params', t => {
  t.true(m('%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
  t.true(m('/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
})

test('inside with path dots', t => {
  t.true(m('%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0'))
  t.true(m('/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0'))

  t.true(m('%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0'))
  t.true(m('/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0'))
})

test('inside with path dots & params', t => {
  t.true(m('%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
  t.true(m('/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))

  t.true(m('%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
  t.true(m('/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
})
