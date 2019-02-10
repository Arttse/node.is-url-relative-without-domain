import test from 'ava'
import m from '../../../../'

test('default', t => {
  t.false(m('domain.com/index.asp'))
  t.false(m('//domain.com/index.asp'))
  t.false(m('http://domain.com/index.asp'))
  t.false(m('https://domain.com/index.asp'))
  t.false(m('ftp://domain.com/index.asp'))
})

test('inside last', t => {
  t.false(m('domain.com/in/side/index.asp'))
  t.false(m('//domain.com/in/side/index.asp'))
  t.false(m('http://domain.com/in/side/index.asp'))
  t.false(m('https://domain.com/in/side/index.asp'))
  t.false(m('ftp://domain.com/in/side/index.asp'))
})

test('inside last with path dots', t => {
  t.false(m('domain.com/in/side/./a/b/index.asp'))
  t.false(m('//domain.com/in/side/./a/b/index.asp'))
  t.false(m('http://domain.com/in/side/./a/b/index.asp'))
  t.false(m('https://domain.com/in/side/./a/b/index.asp'))
  t.false(m('ftp://domain.com/in/side/./a/b/index.asp'))

  t.false(m('domain.com/in/side/../a/b/index.asp'))
  t.false(m('//domain.com/in/side/../a/b/index.asp'))
  t.false(m('http://domain.com/in/side/../a/b/index.asp'))
  t.false(m('https://domain.com/in/side/../a/b/index.asp'))
  t.false(m('ftp://domain.com/in/side/../a/b/index.asp'))
})

test('after index', t => {
  t.false(m('domain.com/index.asp/in/side'))
  t.false(m('//domain.com/index.asp/in/side'))
  t.false(m('http://domain.com/index.asp/in/side'))
  t.false(m('https://domain.com/index.asp/in/side'))
  t.false(m('ftp://domain.com/index.asp/in/side'))
})

test('after index with path dots', t => {
  t.false(m('domain.com/index.asp/in/side/./a/b'))
  t.false(m('//domain.com/index.asp/in/side/./a/b'))
  t.false(m('http://domain.com/index.asp/in/side/./a/b'))
  t.false(m('https://domain.com/index.asp/in/side/./a/b'))
  t.false(m('ftp://domain.com/index.asp/in/side/./a/b'))

  t.false(m('domain.com/index.asp/in/side/../a/b'))
  t.false(m('//domain.com/index.asp/in/side/../a/b'))
  t.false(m('http://domain.com/index.asp/in/side/../a/b'))
  t.false(m('https://domain.com/index.asp/in/side/../a/b'))
  t.false(m('ftp://domain.com/index.asp/in/side/../a/b'))
})
