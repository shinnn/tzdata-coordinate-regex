'use strict';

const test = require('tape');
const tzdataCoordinateRegex = require('.');

test('we', t => {
  t.equal(tzdataCoordinateRegex.name, 'tzdataCoordinateRegex', 'should have a function name.');

  const regex = tzdataCoordinateRegex();
  const fixture = 'AM +4011+04430 Asia/Yerevan\nAQ -690022+0393524 Antarctica/Syowa Syowa';

  t.deepEqual(
    Array.from(regex.exec(fixture)),
    [
      '+4011+04430',
      '+',
      '40',
      '11',
      '+',
      '044',
      '30',
      undefined,
      undefined,
      undefined,
      undefined,
      undefined
    ],
    'should return a regexp that matches TZ-database-style time zone coordinates.'
  );

  t.deepEqual(
    Array.from(regex.exec(fixture)),
    [
      '-690022+0393524',
      '-',
      '69',
      '00',
      undefined,
      undefined,
      undefined,
      '22',
      '+',
      '039',
      '35',
      '24'
    ],
    'should return a regexp with `global` flag.'
  );

  t.strictEqual(
    tzdataCoordinateRegex({}).exec('-1.362863+36.834583'),
    null,
    'should return a regexp that doesn\'t match non time zone formats.'
  );

  t.strictEqual(
    tzdataCoordinateRegex({exact: true}).exec(' -2411-06518'),
    null,
    'should return a regexp that matches only one exact time zone coordinate with `exact` option..'
  );

  t.throws(
    () => tzdataCoordinateRegex(true),
    /TypeError.*true is not an object\. Expected an object with a Boolean `exact` property\./,
    'should throw a type error when the argument is not an object.'
  );

  t.throws(
    () => tzdataCoordinateRegex({exact: 1}),
    /TypeError.*1 is neither true nor false\. `exact` option must be a Boolean value\./,
    'should throw a type error when the argument has non-boolean `exact` property.'
  );

  t.end();
});

