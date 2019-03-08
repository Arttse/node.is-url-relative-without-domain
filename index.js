'use strict'

const url = require('url')
const URL = url.URL

let domains = []
try {
  domains = require('domains')
} catch (e) {}

const first = it => it[0]
const last = it => it[it.length - 1]
const exists = (what, where) => where.indexOf(what) !== -1

module.exports = (str, tlds = domains) => {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string, not ' + typeof str)
  }

  // Check for empty string
  if (!str) {
    return true
  }

  // Check for protocol relative URL
  if (str.indexOf`//` === 0) {
    return false
  }

  // Check that it is a URL
  // if URL return false
  try {
    return !new URL(str)
  } catch (e) {}

  // Well, this is not a URL
  // so... go on

  // Remove slash at the beginning if exists
  if (str.indexOf`/` === 0) {
    str = str.slice(1)
  }

  // Get the first (left) part divided by '/' (remove pathname)
  str = first(str.split`/`)

  // Check if dot exists
  // if not exists return true
  if (!exists('.', str)) {
    return true
  }

  // Get the first (left) part divided by ':' (remove port)
  str = first(str.split`:`)

  // Get probably domain name (tld)
  str = last(str.split`.`)

  // Get the Unicode serialization of the domain
  str = url.domainToUnicode(str)

  // Check whether the domain is in the specified list of domains
  // return false if exists
  return !exists(str, tlds)
}
