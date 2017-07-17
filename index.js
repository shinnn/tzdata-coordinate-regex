'use strict';

/*!
 * tzdata-coordinate-regex | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/tzdata-coordinate-regex
*/
const patterns = [
  '([\\+-])(\\d{2})(\\d{2})([\\+-])(\\d{3})(\\d{2})',
  '([\\+-])(\\d{2})(\\d{2})(\\d{2})([\\+-])(\\d{3})(\\d{2})(\\d{2})'
];

function strictifyPattern(pattern) {
  return '^' + pattern + '$';
}

function tzdataCoordinateRegex(option) {
  if (option) {
    if (typeof option !== 'object') {
      throw new TypeError(
        String(option) +
        ' is not an object. Expected an object with a Boolean `exact` property.'
      );
    }

    if ('exact' in option) {
      if (typeof option.exact !== 'boolean') {
        throw new TypeError(
          String(option.exact) +
          ' is neither true nor false. `exact` option must be a Boolean value.'
        );
      }

      return new RegExp(patterns.map(strictifyPattern).join('|'));
    }
  }

  return new RegExp(patterns.join('|'), 'g');
}

module.exports = tzdataCoordinateRegex;
