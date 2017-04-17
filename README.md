# tzdata-coordinate-regex

[![NPM version](https://img.shields.io/npm/v/tzdata-coordinate-regex.svg)](https://www.npmjs.com/package/tzdata-coordinate-regex)
[![Bower version](https://img.shields.io/bower/v/tzdata-coordinate-regex.svg)](https://github.com/shinnn/tzdata-coordinate-regex/releases)
[![Build Status](https://travis-ci.org/shinnn/tzdata-coordinate-regex.svg?branch=master)](https://travis-ci.org/shinnn/tzdata-coordinate-regex)
[![Coverage Status](https://img.shields.io/coveralls/shinnn/tzdata-coordinate-regex.svg)](https://coveralls.io/r/shinnn/tzdata-coordinate-regex)
[![devDependencies Status](https://david-dm.org/shinnn/tzdata-coordinate-regex/dev-status.svg)](https://david-dm.org/shinnn/tzdata-coordinate-regex?type=dev)

Regular expression for time zone coordinates in [zone.tab](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format

```javascript
tzdataCoordinateRegex();
//=> /([\+-])(\d{2})(\d{2})([\+-])(\d{3})(\d{2})|([\+-])(\d{2})(\d{2})(\d{2})([\+-])(\d{3})(\d{2})(\d{2})/g

`PS	+313200+0350542	Asia/Hebron	West Bank
 PT	+3843-00908	Europe/Lisbon	Portugal (mainland)`.match(tzdataCoordinateRegex());
//=> ['+313200+0350542', '+3843-00908']
```

## Installation

### Package managers

#### [npm](https://www.npmjs.com/)

```
npm install tzdata-coordinate-regex
```

#### [bower](http://bower.io/)

```
bower install tzdata-coordinate-regex
```

### Standalone

[Download the script file directly.](https://raw.githubusercontent.com/shinnn/tzdata-coordinate-regex/master/browser.js)

## API

### tzdataCoordinateRegex([*option*])

*option*: `Object`  
Return: `RegExp`

It returns a [regular expression object](http://www.ecma-international.org/ecma-262/5.1/#sec-15.10) that matches time zone coordinates in [tz database](https://www.iana.org/time-zones) format:

> Latitude and longitude of the zone's principal location in [ISO 6709](https://www.iso.org/iso/catalogue_detail.htm?csnumber=39242) sign-degrees-minutes-seconds format, either `+-DDMM+-DDDMM` or `+-DDMMSS+-DDDMMSS`, first latitude (`+` is north), then longitude (`+` is east).

#### option.exact

Type: `Boolean`  
Default: `true`

`true` makes the regex matches only one exact coordinate.

```javascript
tzdataCoordinateRegex().test('+353916+1394441'); //=> true
tzdataCoordinateRegex({exact: true}).test('+353916+1394441'); //=> true

tzdataCoordinateRegex().test('foo +4254+07436'); //=> true
tzdataCoordinateRegex({exact: true}).test('foo +4254+07436'); //=> false
```

## License

[Creative Commons Zero v1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/deed)
