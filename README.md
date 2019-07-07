# tzdata-coordinate-regex

[![npm version](https://img.shields.io/npm/v/tzdata-coordinate-regex.svg)](https://www.npmjs.com/package/tzdata-coordinate-regex)
[![Github Actions](https://action-badges.now.sh/shinnn/tzdata-coordinate-regex)](https://wdp9fww0r9.execute-api.us-west-2.amazonaws.com/production/results/shinnn/tzdata-coordinate-regex)

A regular expression for time zone coordinates in [zone.tab](https://en.wikipedia.org/wiki/List_of_tz_database_time_zones) format

```javascript
tzdataCoordinateRegex.test('+313200+0350542'); //=> true
tzdataCoordinateRegex.test('+3843-00908'); //=> true
```

## Installation

[Use](https://docs.npmjs.com/cli/install) [npm](https://docs.npmjs.com/about-npm/).

```
npm install tzdata-coordinate-regex
```

## API

```javascript
import tzdataCoordinateRegex from 'tzdata-coordinate-regex';
```

### tzdataCoordinateRegex

Type: `RegExp`

It matches time zone coordinates in [tz database](https://www.iana.org/time-zones) format:

> Latitude and longitude of the zone's principal location in [ISO 6709](https://www.iso.org/iso/catalogue_detail.htm?csnumber=39242) sign-degrees-minutes-seconds format, either `+-DDMM+-DDDMM` or `+-DDMMSS+-DDDMMSS`, first latitude (`+` is north), then longitude (`+` is east).

```javascript
tzdataCoordinateRegex.exec('+4254-07436');
/*=> [
  '+4254-07436',
  '+',
  '42',
  '54',
  undefined,
  '-',
  '074',
  '36',
  undefined,
  index: 0,
  input: '+4254-07436',
  groups: {
    latitudeSeconds: undefined,
    longitudeSeconds: undefined
  }
] */

tzdataCoordinateRegex.exec('-353916+1394441');
/*=> [
  '-353916+1394441',
  '-',
  '35',
  '39',
  '16',
  '+',
  '139',
  '44',
  '41',
  index: 0,
  input: '-353916+1394441',
  groups: {
    latitudeSeconds: '16',
    longitudeSeconds: '41'
  }
] */
```

## License

[ISC License](./LICENSE) © 2018 - 2019 Watanabe Shinnosuke
