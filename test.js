'use strict';

const test = require('tape');
const tzdataCoordinateRegex = require('.');

test('tzdataCoordinateRegex', t => {
  t.deepEqual(
    [...tzdataCoordinateRegex.exec('+4011+04430')],
    [
      '+4011+04430',
      '+',
      '40',
      '11',
      undefined,
      '+',
      '044',
      '30',
      undefined
    ],
    'should matche TZ-database-style time zone coordinates.'
  );

  t.deepEqual(
    [...tzdataCoordinateRegex.exec('-690022+0393524')],
    [
      '-690022+0393524',
      '-',
      '69',
      '00',
      '22',
      '+',
      '039',
      '35',
      '24'
    ],
    'should matche TZ-database-style time zone coordinates with seconds.'
  );

  const {groups} = tzdataCoordinateRegex.exec('-905958-1805959');

  t.equal(
    groups.latitudeSeconds,
    '58',
    'should capture latitude seconds as a named group if available.'
  );

  t.equal(
    groups.longitudeSeconds,
    '59',
    'should capture longitude seconds as a named group if available.'
  );

  t.equal(
    tzdataCoordinateRegex.exec('-112233+1122'),
    null,
    'should not match invalid tz coordinates.'
  );

  t.equal(
    tzdataCoordinateRegex.exec('-9100+00000'),
    null,
    'should take latitude range (-90 ~ +90) into consideration.'
  );

  t.equal(
    tzdataCoordinateRegex.exec('+000000-1810000'),
    null,
    'should take longitude range (-180 ~ +180) into consideration.'
  );

  t.equal(
    tzdataCoordinateRegex.exec('+006000-0000000'),
    null,
    'should validate latitude minutes.'
  );

  t.equal(
    tzdataCoordinateRegex.exec('+000000-0006000'),
    null,
    'should validate longitude minutes.'
  );

  t.equal(
    tzdataCoordinateRegex.exec('+000060-0000000'),
    null,
    'should validate latitude seconds.'
  );

  t.equal(
    tzdataCoordinateRegex.exec('+000000-0000060'),
    null,
    'should validate longitude seconds.'
  );

  t.end();
});

