import test from 'ava'
import m from '../../../../../'

test('usual', t => {
  t.false(m('xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai'))
  t.false(m('//xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai'))
  t.false(m('http://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai'))
  t.false(m('https://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai'))
  t.false(m('ftp://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai'))
})

test('with slash in the end', t => {
  t.false(m('xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/'))
  t.false(m('//xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/'))
  t.false(m('http://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/'))
  t.false(m('https://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/'))
  t.false(m('ftp://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/'))
})

test('inside', t => {
  t.false(m('xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8'))
  t.false(m('//xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8'))
  t.false(m('http://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8'))
  t.false(m('https://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8'))
  t.false(m('ftp://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8'))
})

test('inside with params', t => {
  t.false(m('xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
  t.false(m('//xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
  t.false(m('http://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
  t.false(m('https://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
  t.false(m('ftp://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
})

test('inside with path dots', t => {
  t.false(m('xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0'))
  t.false(m('//xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0'))
  t.false(m('http://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0'))
  t.false(m('https://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0'))
  t.false(m('ftp://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0'))

  t.false(m('xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0'))
  t.false(m('//xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0'))
  t.false(m('http://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0'))
  t.false(m('https://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0'))
  t.false(m('ftp://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0'))
})

test('inside with path dots & params', t => {
  t.false(m('xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
  t.false(m('//xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
  t.false(m('http://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
  t.false(m('https://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
  t.false(m('ftp://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))

  t.false(m('xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
  t.false(m('//xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
  t.false(m('http://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
  t.false(m('https://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
  t.false(m('ftp://xn--3-gtb3ad.xn--2-gtb3ad.xn--d1atc.xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/?%D1%80%D0%B0%D0%B7=%D0%B4%D0%B2%D0%B0'))
})
