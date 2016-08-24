'use strict';

/**
 * Check if URL is relative without domain
 *
 * @param {String} str - URL to check
 * @returns {Boolean}
 */
module.exports = function ( str ) {

  if ( typeof str !== 'string' ) {

    throw new TypeError ( 'Expected a string, not ' + typeof str );

  }

  /** Trim */
  str = str.trim ();

  /** Check // */
  if ( str.indexOf ( '//' ) === 0 ) {

    return false;

  }

  /** Check domain */
  return !/^(?:\/|)(?:\w+(?:\.(?!php|asp|aspx|html)|:))/i.test ( str );

};
