import test from 'ava'
import m from '../../../../../'

test('default', t => {
  t.false(m('sub2.sub.domain.com:123/index.php'))
  t.false(m('//sub2.sub.domain.com:123/index.php'))
  t.false(m('http://sub2.sub.domain.com:123/index.php'))
  t.false(m('https://sub2.sub.domain.com:123/index.php'))
  t.false(m('ftp://sub2.sub.domain.com:123/index.php'))
})

test('inside last', t => {
  t.false(m('sub2.sub.domain.com:123/in/side/index.php'))
  t.false(m('//sub2.sub.domain.com:123/in/side/index.php'))
  t.false(m('http://sub2.sub.domain.com:123/in/side/index.php'))
  t.false(m('https://sub2.sub.domain.com:123/in/side/index.php'))
  t.false(m('ftp://sub2.sub.domain.com:123/in/side/index.php'))
})

test('inside last with path dots', t => {
  t.false(m('sub2.sub.domain.com:123/in/side/./a/b/index.php'))
  t.false(m('//sub2.sub.domain.com:123/in/side/./a/b/index.php'))
  t.false(m('http://sub2.sub.domain.com:123/in/side/./a/b/index.php'))
  t.false(m('https://sub2.sub.domain.com:123/in/side/./a/b/index.php'))
  t.false(m('ftp://sub2.sub.domain.com:123/in/side/./a/b/index.php'))

  t.false(m('sub2.sub.domain.com:123/in/side/../a/b/index.php'))
  t.false(m('//sub2.sub.domain.com:123/in/side/../a/b/index.php'))
  t.false(m('http://sub2.sub.domain.com:123/in/side/../a/b/index.php'))
  t.false(m('https://sub2.sub.domain.com:123/in/side/../a/b/index.php'))
  t.false(m('ftp://sub2.sub.domain.com:123/in/side/../a/b/index.php'))
})

test('after index', t => {
  t.false(m('sub2.sub.domain.com:123/index.php/in/side'))
  t.false(m('//sub2.sub.domain.com:123/index.php/in/side'))
  t.false(m('http://sub2.sub.domain.com:123/index.php/in/side'))
  t.false(m('https://sub2.sub.domain.com:123/index.php/in/side'))
  t.false(m('ftp://sub2.sub.domain.com:123/index.php/in/side'))
})

test('after index with path dots', t => {
  t.false(m('sub2.sub.domain.com:123/index.php/in/side/./a/b'))
  t.false(m('//sub2.sub.domain.com:123/index.php/in/side/./a/b'))
  t.false(m('http://sub2.sub.domain.com:123/index.php/in/side/./a/b'))
  t.false(m('https://sub2.sub.domain.com:123/index.php/in/side/./a/b'))
  t.false(m('ftp://sub2.sub.domain.com:123/index.php/in/side/./a/b'))

  t.false(m('sub2.sub.domain.com:123/index.php/in/side/../a/b'))
  t.false(m('//sub2.sub.domain.com:123/index.php/in/side/../a/b'))
  t.false(m('http://sub2.sub.domain.com:123/index.php/in/side/../a/b'))
  t.false(m('https://sub2.sub.domain.com:123/index.php/in/side/../a/b'))
  t.false(m('ftp://sub2.sub.domain.com:123/index.php/in/side/../a/b'))
})
