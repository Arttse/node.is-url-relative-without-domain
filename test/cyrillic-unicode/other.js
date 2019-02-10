import test from 'ava'
import m from '../../'

test('uncategorized', t => {
  t.true(m('httpздравствуй/товарищ?как=дела'))
  t.true(m('?раз=1&два=2'))
  t.true(m('/?раз=1&два=2'))
  t.true(m('№1тест'))
  t.true(m('@что-то'))
  t.true(m(' пробел '))
  t.true(m('просто.точка'))
  t.true(m('картинка.jpg'))
  t.true(m('/картинка.jpg'))
})

test('protocols without colon-slash-slash', t => {
  t.false(m('mailto:помощь@сайт.рф'))
  t.false(m('tel:1234567890'))
})
