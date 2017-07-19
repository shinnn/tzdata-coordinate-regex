/*!
 * tzdata-coordinate-regex | MIT (c) Shinnosuke Watanabe
 * https://github.com/shinnn/tzdata-coordinate-regex
*/
var source = '([\\+-])(\\d{2})(\\d{2})(?:([\\+-])(\\d{3})(\\d{2})|(\\d{2})([\\+-])(\\d{3})(\\d{2})(\\d{2}))';

export default function tzdataCoordinateRegex(option) {
  if (option) {
    if (typeof option !== 'object') {
      throw new TypeError(
        option +
        ' is not an object. Expected an object with a Boolean `exact` property.'
      );
    }

    if ('exact' in option) {
      if (typeof option.exact !== 'boolean') {
        throw new TypeError(
          option.exact +
          ' is neither true nor false. `exact` option must be a Boolean value.'
        );
      }

      return new RegExp('^' + source + '$');
    }
  }

  return new RegExp(source, 'g');
}
