import test from 'ava'
import m from '../../../'

test('default', t => {
  t.true(m('%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.asp'))
  t.true(m('/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.asp'))

  t.true(m('xn--d1achkm1a.asp'))
  t.true(m('/xn--d1achkm1a.asp'))
})

test('inside last', t => {
  t.true(m('%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/index.asp'))
  t.true(m('/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/index.asp'))

  t.true(m('%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.asp'))
  t.true(m('/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.asp'))

  t.true(m('%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/xn--d1achkm1a.asp'))
  t.true(m('/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/xn--d1achkm1a.asp'))
})

test('inside last with path dots', t => {
  t.true(m('%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1/index.asp'))
  t.true(m('/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1/index.asp'))

  t.true(m('%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1/index.asp'))
  t.true(m('/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1/index.asp'))

  t.true(m('%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.asp'))
  t.true(m('/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.asp'))

  t.true(m('%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.asp'))
  t.true(m('/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.asp'))

  t.true(m('%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1/xn--d1achkm1a.asp'))
  t.true(m('/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1/xn--d1achkm1a.asp'))

  t.true(m('%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1/xn--d1achkm1a.asp'))
  t.true(m('/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1/xn--d1achkm1a.asp'))
})

test('after index', t => {
  t.true(m('index.asp/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8'))
  t.true(m('/index.asp/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8'))

  t.true(m('%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.asp/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8'))
  t.true(m('/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.asp/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8'))

  t.true(m('xn--d1achkm1a.asp/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8'))
  t.true(m('/xn--d1achkm1a.asp/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8'))
})

test('after index with path dots', t => {
  t.true(m('index.asp/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1'))
  t.true(m('/index.asp/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1'))

  t.true(m('index.asp/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1'))
  t.true(m('/index.asp/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1'))

  t.true(m('%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.asp/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1'))
  t.true(m('/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.asp/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1'))

  t.true(m('%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.asp/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1'))
  t.true(m('/%D0%B8%D0%BD%D0%B4%D0%B5%D0%BA%D1%81.asp/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1'))

  t.true(m('xn--d1achkm1a.asp/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1'))
  t.true(m('/xn--d1achkm1a.asp/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1'))

  t.true(m('xn--d1achkm1a.asp/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1'))
  t.true(m('/xn--d1achkm1a.asp/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1'))
})
