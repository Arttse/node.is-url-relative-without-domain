import test from 'ava'
import m from '../../../../../'

test('usual', t => {
  t.false(m('sub.domain.com'))
  t.false(m('//sub.domain.com'))
  t.false(m('http://sub.domain.com'))
  t.false(m('https://sub.domain.com'))
  t.false(m('ftp://sub.domain.com'))
})

test('with slash in the end', t => {
  t.false(m('sub.domain.com/'))
  t.false(m('//sub.domain.com/'))
  t.false(m('http://sub.domain.com/'))
  t.false(m('https://sub.domain.com/'))
  t.false(m('ftp://sub.domain.com/'))
})

test('inside', t => {
  t.false(m('sub.domain.com/in/side'))
  t.false(m('//sub.domain.com/in/side'))
  t.false(m('http://sub.domain.com/in/side'))
  t.false(m('https://sub.domain.com/in/side'))
  t.false(m('ftp://sub.domain.com/in/side'))
})

test('inside with params', t => {
  t.false(m('sub.domain.com/in/side/?foo=bar'))
  t.false(m('//sub.domain.com/in/side/?foo=bar'))
  t.false(m('http://sub.domain.com/in/side/?foo=bar'))
  t.false(m('https://sub.domain.com/in/side/?foo=bar'))
  t.false(m('ftp://sub.domain.com/in/side/?foo=bar'))
})

test('inside with path dots', t => {
  t.false(m('sub.domain.com/in/side/./a'))
  t.false(m('//sub.domain.com/in/side/./a'))
  t.false(m('http://sub.domain.com/in/side/./a'))
  t.false(m('https://sub.domain.com/in/side/./a'))
  t.false(m('ftp://sub.domain.com/in/side/./a'))

  t.false(m('sub.domain.com/in/side/../a'))
  t.false(m('//sub.domain.com/in/side/../a'))
  t.false(m('http://sub.domain.com/in/side/../a'))
  t.false(m('https://sub.domain.com/in/side/../a'))
  t.false(m('ftp://sub.domain.com/in/side/../a'))
})

test('inside with path dots & params', t => {
  t.false(m('sub.domain.com/in/side/./a/?foo=bar'))
  t.false(m('//sub.domain.com/in/side/./a/?foo=bar'))
  t.false(m('http://sub.domain.com/in/side/./a/?foo=bar'))
  t.false(m('https://sub.domain.com/in/side/./a/?foo=bar'))
  t.false(m('ftp://sub.domain.com/in/side/./a/?foo=bar'))

  t.false(m('sub.domain.com/in/side/../a/?foo=bar'))
  t.false(m('//sub.domain.com/in/side/../a/?foo=bar'))
  t.false(m('http://sub.domain.com/in/side/../a/?foo=bar'))
  t.false(m('https://sub.domain.com/in/side/../a/?foo=bar'))
  t.false(m('ftp://sub.domain.com/in/side/../a/?foo=bar'))
})
