import test from 'ava'
import m from '../../'

test('uncategorized', t => {
  t.true(m('http%D0%B7%D0%B4%D1%80%D0%B0%D0%B2%D1%81%D1%82%D0%B2%D1%83%D0%B9/%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%B8%D1%89?%D0%BA%D0%B0%D0%BA=%D0%B4%D0%B5%D0%BB%D0%B0'))
  t.true(m('httpxn--80aeafoq9bkjl/%D1%82%D0%BE%D0%B2%D0%B0%D1%80%D0%B8%D1%89?%D0%BA%D0%B0%D0%BA=%D0%B4%D0%B5%D0%BB%D0%B0'))
  t.true(m('?%D1%80%D0%B0%D0%B7=1&%D0%B4%D0%B2%D0%B0=2'))
  t.true(m('/?%D1%80%D0%B0%D0%B7=1&%D0%B4%D0%B2%D0%B0=2'))
  t.true(m('№1%D1%82%D0%B5%D1%81%D1%82'))
  t.true(m('@%D1%87%D1%82%D0%BE-%D1%82%D0%BE'))
  t.true(m('%20%D0%BF%D1%80%D0%BE%D0%B1%D0%B5%D0%BB%20'))
  t.true(m('%D0%BF%D1%80%D0%BE%D1%81%D1%82%D0%BE.%D1%82%D0%BE%D1%87%D0%BA%D0%B0'))
  t.true(m('xn--n1aabegg.xn--80atlp0a'))
  t.true(m('%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0.jpg'))
  t.true(m('/%D0%BA%D0%B0%D1%80%D1%82%D0%B8%D0%BD%D0%BA%D0%B0.jpg'))
})

test('protocols without colon-slash-slash', t => {
  t.false(m('mailto:%D0%BF%D0%BE%D0%BC%D0%BE%D1%89%D1%8C@xn--80aswg.xn--p1ai'))
  t.false(m('mailto:xn--l1adbb7cs@xn--80aswg.xn--p1ai'))
  t.false(m('tel:1234567890'))
})
