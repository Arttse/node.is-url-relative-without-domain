import test from 'ava'
import m from '../../'

test('uncategorized', t => {
  t.true(m('httpshow/must?go=on'))
  t.true(m('?foo=1&bar=2'))
  t.true(m('/?foo=1&bar=2'))
  t.true(m('#hash'))
  t.true(m('/#hash'))
  t.true(m('№1test'))
  t.true(m('@do'))
  t.true(m(' space '))
  t.true(m('node.is-url-relative-without-domain'))
  t.true(m('picture.jpg'))
  t.true(m('/picture.jpg'))
})

test('protocols without colon-slash-slash', t => {
  t.false(m('mailto:help@site.com'))
  t.false(m('tel:1234567890'))
})

test('custom domains', t => {
  t.true(m('site.com/in/side', []))
  t.false(m('site.com/in/side', ['com']))
})
