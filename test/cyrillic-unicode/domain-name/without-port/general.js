import test from 'ava'
import m from '../../../../'

test('usual', t => {
  t.false(m('сайт.рф'))
  t.false(m('//сайт.рф'))
  t.false(m('http://сайт.рф'))
  t.false(m('https://сайт.рф'))
  t.false(m('ftp://сайт.рф'))
})

test('with slash in the end', t => {
  t.false(m('сайт.рф/'))
  t.false(m('//сайт.рф/'))
  t.false(m('http://сайт.рф/'))
  t.false(m('https://сайт.рф/'))
  t.false(m('ftp://сайт.рф/'))
})

test('inside', t => {
  t.false(m('сайт.рф/вну/три'))
  t.false(m('//сайт.рф/вну/три'))
  t.false(m('http://сайт.рф/вну/три'))
  t.false(m('https://сайт.рф/вну/три'))
  t.false(m('ftp://сайт.рф/вну/три'))
})

test('inside with params', t => {
  t.false(m('сайт.рф/вну/три/?раз=два'))
  t.false(m('//сайт.рф/вну/три/?раз=два'))
  t.false(m('http://сайт.рф/вну/три/?раз=два'))
  t.false(m('https://сайт.рф/вну/три/?раз=два'))
  t.false(m('ftp://сайт.рф/вну/три/?раз=два'))
})

test('inside with path dots', t => {
  t.false(m('сайт.рф/вну/три/./а'))
  t.false(m('//сайт.рф/вну/три/./а'))
  t.false(m('http://сайт.рф/вну/три/./а'))
  t.false(m('https://сайт.рф/вну/три/./а'))
  t.false(m('ftp://сайт.рф/вну/три/./а'))

  t.false(m('сайт.рф/вну/три/../а'))
  t.false(m('//сайт.рф/вну/три/../а'))
  t.false(m('http://сайт.рф/вну/три/../а'))
  t.false(m('https://сайт.рф/вну/три/../а'))
  t.false(m('ftp://сайт.рф/вну/три/../а'))
})

test('inside with path dots & params', t => {
  t.false(m('сайт.рф/вну/три/./а/?раз=два'))
  t.false(m('//сайт.рф/вну/три/./а/?раз=два'))
  t.false(m('http://сайт.рф/вну/три/./а/?раз=два'))
  t.false(m('https://сайт.рф/вну/три/./а/?раз=два'))
  t.false(m('ftp://сайт.рф/вну/три/./а/?раз=два'))

  t.false(m('сайт.рф/вну/три/../а/?раз=два'))
  t.false(m('//сайт.рф/вну/три/../а/?раз=два'))
  t.false(m('http://сайт.рф/вну/три/../а/?раз=два'))
  t.false(m('https://сайт.рф/вну/три/../а/?раз=два'))
  t.false(m('ftp://сайт.рф/вну/три/../а/?раз=два'))
})
