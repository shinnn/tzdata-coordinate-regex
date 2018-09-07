/*!
 * tzdata-coordinate-regex | ISC (c) Shinnosuke Watanabe
 * https://github.com/shinnn/tzdata-coordinate-regex
*/
module.exports = /^([+-])([0-8]\d|90)([0-5]\d)(?<latitudeSeconds>[0-5]\d(?=.{8}))?([+-])(0\d{2}|1(?:[0-7]\d|80))([0-5]\d)(?<longitudeSeconds>(?<=.{13})[0-5]\d)?$/u;
