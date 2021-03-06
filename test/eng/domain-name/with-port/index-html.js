import test from 'ava'
import m from '../../../../'

test('default', t => {
  t.false(m('domain.com:123/index.html'))
  t.false(m('//domain.com:123/index.html'))
  t.false(m('http://domain.com:123/index.html'))
  t.false(m('https://domain.com:123/index.html'))
  t.false(m('ftp://domain.com:123/index.html'))
})

test('inside last', t => {
  t.false(m('domain.com:123/in/side/index.html'))
  t.false(m('//domain.com:123/in/side/index.html'))
  t.false(m('http://domain.com:123/in/side/index.html'))
  t.false(m('https://domain.com:123/in/side/index.html'))
  t.false(m('ftp://domain.com:123/in/side/index.html'))
})

test('inside last with path dots', t => {
  t.false(m('domain.com:123/in/side/./a/b/index.html'))
  t.false(m('//domain.com:123/in/side/./a/b/index.html'))
  t.false(m('http://domain.com:123/in/side/./a/b/index.html'))
  t.false(m('https://domain.com:123/in/side/./a/b/index.html'))
  t.false(m('ftp://domain.com:123/in/side/./a/b/index.html'))

  t.false(m('domain.com:123/in/side/../a/b/index.html'))
  t.false(m('//domain.com:123/in/side/../a/b/index.html'))
  t.false(m('http://domain.com:123/in/side/../a/b/index.html'))
  t.false(m('https://domain.com:123/in/side/../a/b/index.html'))
  t.false(m('ftp://domain.com:123/in/side/../a/b/index.html'))
})

test('after index', t => {
  t.false(m('domain.com:123/index.html/in/side'))
  t.false(m('//domain.com:123/index.html/in/side'))
  t.false(m('http://domain.com:123/index.html/in/side'))
  t.false(m('https://domain.com:123/index.html/in/side'))
  t.false(m('ftp://domain.com:123/index.html/in/side'))
})

test('after index with path dots', t => {
  t.false(m('domain.com:123/index.html/in/side/./a/b'))
  t.false(m('//domain.com:123/index.html/in/side/./a/b'))
  t.false(m('http://domain.com:123/index.html/in/side/./a/b'))
  t.false(m('https://domain.com:123/index.html/in/side/./a/b'))
  t.false(m('ftp://domain.com:123/index.html/in/side/./a/b'))

  t.false(m('domain.com:123/index.html/in/side/../a/b'))
  t.false(m('//domain.com:123/index.html/in/side/../a/b'))
  t.false(m('http://domain.com:123/index.html/in/side/../a/b'))
  t.false(m('https://domain.com:123/index.html/in/side/../a/b'))
  t.false(m('ftp://domain.com:123/index.html/in/side/../a/b'))
})
