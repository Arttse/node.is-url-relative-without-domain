import test from 'ava'
import m from '../../../../../'

test('usual', t => {
  t.false(m('под3.под2.под.сайт.рф:123'))
  t.false(m('//под3.под2.под.сайт.рф:123'))
  t.false(m('http://под3.под2.под.сайт.рф:123'))
  t.false(m('https://под3.под2.под.сайт.рф:123'))
  t.false(m('ftp://под3.под2.под.сайт.рф:123'))
})

test('with slash in the end', t => {
  t.false(m('под3.под2.под.сайт.рф:123/'))
  t.false(m('//под3.под2.под.сайт.рф:123/'))
  t.false(m('http://под3.под2.под.сайт.рф:123/'))
  t.false(m('https://под3.под2.под.сайт.рф:123/'))
  t.false(m('ftp://под3.под2.под.сайт.рф:123/'))
})

test('inside', t => {
  t.false(m('под3.под2.под.сайт.рф:123/вну/три'))
  t.false(m('//под3.под2.под.сайт.рф:123/вну/три'))
  t.false(m('http://под3.под2.под.сайт.рф:123/вну/три'))
  t.false(m('https://под3.под2.под.сайт.рф:123/вну/три'))
  t.false(m('ftp://под3.под2.под.сайт.рф:123/вну/три'))
})

test('inside with params', t => {
  t.false(m('под3.под2.под.сайт.рф:123/вну/три/?раз=два'))
  t.false(m('//под3.под2.под.сайт.рф:123/вну/три/?раз=два'))
  t.false(m('http://под3.под2.под.сайт.рф:123/вну/три/?раз=два'))
  t.false(m('https://под3.под2.под.сайт.рф:123/вну/три/?раз=два'))
  t.false(m('ftp://под3.под2.под.сайт.рф:123/вну/три/?раз=два'))
})

test('inside with path dots', t => {
  t.false(m('под3.под2.под.сайт.рф:123/вну/три/./а'))
  t.false(m('//под3.под2.под.сайт.рф:123/вну/три/./а'))
  t.false(m('http://под3.под2.под.сайт.рф:123/вну/три/./а'))
  t.false(m('https://под3.под2.под.сайт.рф:123/вну/три/./а'))
  t.false(m('ftp://под3.под2.под.сайт.рф:123/вну/три/./а'))

  t.false(m('под3.под2.под.сайт.рф:123/вну/три/../а'))
  t.false(m('//под3.под2.под.сайт.рф:123/вну/три/../а'))
  t.false(m('http://под3.под2.под.сайт.рф:123/вну/три/../а'))
  t.false(m('https://под3.под2.под.сайт.рф:123/вну/три/../а'))
  t.false(m('ftp://под3.под2.под.сайт.рф:123/вну/три/../а'))
})

test('inside with path dots & params', t => {
  t.false(m('под3.под2.под.сайт.рф:123/вну/три/./а/?раз=два'))
  t.false(m('//под3.под2.под.сайт.рф:123/вну/три/./а/?раз=два'))
  t.false(m('http://под3.под2.под.сайт.рф:123/вну/три/./а/?раз=два'))
  t.false(m('https://под3.под2.под.сайт.рф:123/вну/три/./а/?раз=два'))
  t.false(m('ftp://под3.под2.под.сайт.рф:123/вну/три/./а/?раз=два'))

  t.false(m('под3.под2.под.сайт.рф:123/вну/три/../а/?раз=два'))
  t.false(m('//под3.под2.под.сайт.рф:123/вну/три/../а/?раз=два'))
  t.false(m('http://под3.под2.под.сайт.рф:123/вну/три/../а/?раз=два'))
  t.false(m('https://под3.под2.под.сайт.рф:123/вну/три/../а/?раз=два'))
  t.false(m('ftp://под3.под2.под.сайт.рф:123/вну/три/../а/?раз=два'))
})
