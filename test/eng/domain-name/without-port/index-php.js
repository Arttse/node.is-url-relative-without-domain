import test from 'ava'
import m from '../../../../'

test('default', t => {
  t.false(m('domain.com/index.php'))
  t.false(m('//domain.com/index.php'))
  t.false(m('http://domain.com/index.php'))
  t.false(m('https://domain.com/index.php'))
  t.false(m('ftp://domain.com/index.php'))
})

test('inside last', t => {
  t.false(m('domain.com/in/side/index.php'))
  t.false(m('//domain.com/in/side/index.php'))
  t.false(m('http://domain.com/in/side/index.php'))
  t.false(m('https://domain.com/in/side/index.php'))
  t.false(m('ftp://domain.com/in/side/index.php'))
})

test('inside last with path dots', t => {
  t.false(m('domain.com/in/side/./a/b/index.php'))
  t.false(m('//domain.com/in/side/./a/b/index.php'))
  t.false(m('http://domain.com/in/side/./a/b/index.php'))
  t.false(m('https://domain.com/in/side/./a/b/index.php'))
  t.false(m('ftp://domain.com/in/side/./a/b/index.php'))

  t.false(m('domain.com/in/side/../a/b/index.php'))
  t.false(m('//domain.com/in/side/../a/b/index.php'))
  t.false(m('http://domain.com/in/side/../a/b/index.php'))
  t.false(m('https://domain.com/in/side/../a/b/index.php'))
  t.false(m('ftp://domain.com/in/side/../a/b/index.php'))
})

test('after index', t => {
  t.false(m('domain.com/index.php/in/side'))
  t.false(m('//domain.com/index.php/in/side'))
  t.false(m('http://domain.com/index.php/in/side'))
  t.false(m('https://domain.com/index.php/in/side'))
  t.false(m('ftp://domain.com/index.php/in/side'))
})

test('after index with path dots', t => {
  t.false(m('domain.com/index.php/in/side/./a/b'))
  t.false(m('//domain.com/index.php/in/side/./a/b'))
  t.false(m('http://domain.com/index.php/in/side/./a/b'))
  t.false(m('https://domain.com/index.php/in/side/./a/b'))
  t.false(m('ftp://domain.com/index.php/in/side/./a/b'))

  t.false(m('domain.com/index.php/in/side/../a/b'))
  t.false(m('//domain.com/index.php/in/side/../a/b'))
  t.false(m('http://domain.com/index.php/in/side/../a/b'))
  t.false(m('https://domain.com/index.php/in/side/../a/b'))
  t.false(m('ftp://domain.com/index.php/in/side/../a/b'))
})
