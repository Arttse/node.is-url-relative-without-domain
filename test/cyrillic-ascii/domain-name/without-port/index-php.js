import test from 'ava'
import m from '../../../../'

test('default', t => {
  t.false(m('xn--80aswg.xn--p1ai/index.php'))
  t.false(m('//xn--80aswg.xn--p1ai/index.php'))
  t.false(m('http://xn--80aswg.xn--p1ai/index.php'))
  t.false(m('https://xn--80aswg.xn--p1ai/index.php'))
  t.false(m('ftp://xn--80aswg.xn--p1ai/index.php'))
})

test('inside last', t => {
  t.false(m('xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/index.php'))
  t.false(m('//xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/index.php'))
  t.false(m('http://xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/index.php'))
  t.false(m('https://xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/index.php'))
  t.false(m('ftp://xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/index.php'))
})

test('inside last with path dots', t => {
  t.false(m('xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1/index.php'))
  t.false(m('//xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1/index.php'))
  t.false(m('http://xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1/index.php'))
  t.false(m('https://xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1/index.php'))
  t.false(m('ftp://xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1/index.php'))

  t.false(m('xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1/index.php'))
  t.false(m('//xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1/index.php'))
  t.false(m('http://xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1/index.php'))
  t.false(m('https://xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1/index.php'))
  t.false(m('ftp://xn--80aswg.xn--p1ai/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1/index.php'))
})

test('after index', t => {
  t.false(m('xn--80aswg.xn--p1ai/index.php/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8'))
  t.false(m('//xn--80aswg.xn--p1ai/index.php/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8'))
  t.false(m('http://xn--80aswg.xn--p1ai/index.php/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8'))
  t.false(m('https://xn--80aswg.xn--p1ai/index.php/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8'))
  t.false(m('ftp://xn--80aswg.xn--p1ai/index.php/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8'))
})

test('after index with path dots', t => {
  t.false(m('xn--80aswg.xn--p1ai/index.php/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1'))
  t.false(m('//xn--80aswg.xn--p1ai/index.php/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1'))
  t.false(m('http://xn--80aswg.xn--p1ai/index.php/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1'))
  t.false(m('https://xn--80aswg.xn--p1ai/index.php/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1'))
  t.false(m('ftp://xn--80aswg.xn--p1ai/index.php/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/./%D0%B0/%D0%B1'))

  t.false(m('xn--80aswg.xn--p1ai/index.php/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1'))
  t.false(m('//xn--80aswg.xn--p1ai/index.php/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1'))
  t.false(m('http://xn--80aswg.xn--p1ai/index.php/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1'))
  t.false(m('https://xn--80aswg.xn--p1ai/index.php/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1'))
  t.false(m('ftp://xn--80aswg.xn--p1ai/index.php/%D0%B2%D0%BD%D1%83/%D1%82%D1%80%D0%B8/../%D0%B0/%D0%B1'))
})
