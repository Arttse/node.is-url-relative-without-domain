import test from 'ava'
import m from '../../../../../'

test('default', t => {
  t.false(m('sub4.sub3.sub2.sub.domain.com:123/index.asp'))
  t.false(m('//sub4.sub3.sub2.sub.domain.com:123/index.asp'))
  t.false(m('http://sub4.sub3.sub2.sub.domain.com:123/index.asp'))
  t.false(m('https://sub4.sub3.sub2.sub.domain.com:123/index.asp'))
  t.false(m('ftp://sub4.sub3.sub2.sub.domain.com:123/index.asp'))
})

test('inside last', t => {
  t.false(m('sub4.sub3.sub2.sub.domain.com:123/in/side/index.asp'))
  t.false(m('//sub4.sub3.sub2.sub.domain.com:123/in/side/index.asp'))
  t.false(m('http://sub4.sub3.sub2.sub.domain.com:123/in/side/index.asp'))
  t.false(m('https://sub4.sub3.sub2.sub.domain.com:123/in/side/index.asp'))
  t.false(m('ftp://sub4.sub3.sub2.sub.domain.com:123/in/side/index.asp'))
})

test('inside last with path dots', t => {
  t.false(m('sub4.sub3.sub2.sub.domain.com:123/in/side/./a/b/index.asp'))
  t.false(m('//sub4.sub3.sub2.sub.domain.com:123/in/side/./a/b/index.asp'))
  t.false(m('http://sub4.sub3.sub2.sub.domain.com:123/in/side/./a/b/index.asp'))
  t.false(m('https://sub4.sub3.sub2.sub.domain.com:123/in/side/./a/b/index.asp'))
  t.false(m('ftp://sub4.sub3.sub2.sub.domain.com:123/in/side/./a/b/index.asp'))

  t.false(m('sub4.sub3.sub2.sub.domain.com:123/in/side/../a/b/index.asp'))
  t.false(m('//sub4.sub3.sub2.sub.domain.com:123/in/side/../a/b/index.asp'))
  t.false(m('http://sub4.sub3.sub2.sub.domain.com:123/in/side/../a/b/index.asp'))
  t.false(m('https://sub4.sub3.sub2.sub.domain.com:123/in/side/../a/b/index.asp'))
  t.false(m('ftp://sub4.sub3.sub2.sub.domain.com:123/in/side/../a/b/index.asp'))
})

test('after index', t => {
  t.false(m('sub4.sub3.sub2.sub.domain.com:123/index.asp/in/side'))
  t.false(m('//sub4.sub3.sub2.sub.domain.com:123/index.asp/in/side'))
  t.false(m('http://sub4.sub3.sub2.sub.domain.com:123/index.asp/in/side'))
  t.false(m('https://sub4.sub3.sub2.sub.domain.com:123/index.asp/in/side'))
  t.false(m('ftp://sub4.sub3.sub2.sub.domain.com:123/index.asp/in/side'))
})

test('after index with path dots', t => {
  t.false(m('sub4.sub3.sub2.sub.domain.com:123/index.asp/in/side/./a/b'))
  t.false(m('//sub4.sub3.sub2.sub.domain.com:123/index.asp/in/side/./a/b'))
  t.false(m('http://sub4.sub3.sub2.sub.domain.com:123/index.asp/in/side/./a/b'))
  t.false(m('https://sub4.sub3.sub2.sub.domain.com:123/index.asp/in/side/./a/b'))
  t.false(m('ftp://sub4.sub3.sub2.sub.domain.com:123/index.asp/in/side/./a/b'))

  t.false(m('sub4.sub3.sub2.sub.domain.com:123/index.asp/in/side/../a/b'))
  t.false(m('//sub4.sub3.sub2.sub.domain.com:123/index.asp/in/side/../a/b'))
  t.false(m('http://sub4.sub3.sub2.sub.domain.com:123/index.asp/in/side/../a/b'))
  t.false(m('https://sub4.sub3.sub2.sub.domain.com:123/index.asp/in/side/../a/b'))
  t.false(m('ftp://sub4.sub3.sub2.sub.domain.com:123/index.asp/in/side/../a/b'))
})
