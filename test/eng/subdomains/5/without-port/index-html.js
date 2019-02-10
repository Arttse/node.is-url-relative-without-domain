import test from 'ava'
import m from '../../../../../'

test('default', t => {
  t.false(m('sub5.sub4.sub3.sub2.sub.domain.com/index.html'))
  t.false(m('//sub5.sub4.sub3.sub2.sub.domain.com/index.html'))
  t.false(m('http://sub5.sub4.sub3.sub2.sub.domain.com/index.html'))
  t.false(m('https://sub5.sub4.sub3.sub2.sub.domain.com/index.html'))
  t.false(m('ftp://sub5.sub4.sub3.sub2.sub.domain.com/index.html'))
})

test('inside last', t => {
  t.false(m('sub5.sub4.sub3.sub2.sub.domain.com/in/side/index.html'))
  t.false(m('//sub5.sub4.sub3.sub2.sub.domain.com/in/side/index.html'))
  t.false(m('http://sub5.sub4.sub3.sub2.sub.domain.com/in/side/index.html'))
  t.false(m('https://sub5.sub4.sub3.sub2.sub.domain.com/in/side/index.html'))
  t.false(m('ftp://sub5.sub4.sub3.sub2.sub.domain.com/in/side/index.html'))
})

test('inside last with path dots', t => {
  t.false(m('sub5.sub4.sub3.sub2.sub.domain.com/in/side/./a/b/index.html'))
  t.false(m('//sub5.sub4.sub3.sub2.sub.domain.com/in/side/./a/b/index.html'))
  t.false(m('http://sub5.sub4.sub3.sub2.sub.domain.com/in/side/./a/b/index.html'))
  t.false(m('https://sub5.sub4.sub3.sub2.sub.domain.com/in/side/./a/b/index.html'))
  t.false(m('ftp://sub5.sub4.sub3.sub2.sub.domain.com/in/side/./a/b/index.html'))

  t.false(m('sub5.sub4.sub3.sub2.sub.domain.com/in/side/../a/b/index.html'))
  t.false(m('//sub5.sub4.sub3.sub2.sub.domain.com/in/side/../a/b/index.html'))
  t.false(m('http://sub5.sub4.sub3.sub2.sub.domain.com/in/side/../a/b/index.html'))
  t.false(m('https://sub5.sub4.sub3.sub2.sub.domain.com/in/side/../a/b/index.html'))
  t.false(m('ftp://sub5.sub4.sub3.sub2.sub.domain.com/in/side/../a/b/index.html'))
})

test('after index', t => {
  t.false(m('sub5.sub4.sub3.sub2.sub.domain.com/index.html/in/side'))
  t.false(m('//sub5.sub4.sub3.sub2.sub.domain.com/index.html/in/side'))
  t.false(m('http://sub5.sub4.sub3.sub2.sub.domain.com/index.html/in/side'))
  t.false(m('https://sub5.sub4.sub3.sub2.sub.domain.com/index.html/in/side'))
  t.false(m('ftp://sub5.sub4.sub3.sub2.sub.domain.com/index.html/in/side'))
})

test('after index with path dots', t => {
  t.false(m('sub5.sub4.sub3.sub2.sub.domain.com/index.html/in/side/./a/b'))
  t.false(m('//sub5.sub4.sub3.sub2.sub.domain.com/index.html/in/side/./a/b'))
  t.false(m('http://sub5.sub4.sub3.sub2.sub.domain.com/index.html/in/side/./a/b'))
  t.false(m('https://sub5.sub4.sub3.sub2.sub.domain.com/index.html/in/side/./a/b'))
  t.false(m('ftp://sub5.sub4.sub3.sub2.sub.domain.com/index.html/in/side/./a/b'))

  t.false(m('sub5.sub4.sub3.sub2.sub.domain.com/index.html/in/side/../a/b'))
  t.false(m('//sub5.sub4.sub3.sub2.sub.domain.com/index.html/in/side/../a/b'))
  t.false(m('http://sub5.sub4.sub3.sub2.sub.domain.com/index.html/in/side/../a/b'))
  t.false(m('https://sub5.sub4.sub3.sub2.sub.domain.com/index.html/in/side/../a/b'))
  t.false(m('ftp://sub5.sub4.sub3.sub2.sub.domain.com/index.html/in/side/../a/b'))
})
