'use strict';

const {deepEqual, equal} = require('assert').strict;

const {optimize} = require('regexp-tree');
const test = require('testit');
const tzdataCoordinateRegex = require('.');

test('match TZ-database-style time zone coordinates', () => {
	deepEqual(
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
		]
	);

	deepEqual(
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
		]
	);
});

test('capture latitude seconds as a named group if possible', () => {
	const {latitudeSeconds, longitudeSeconds} = tzdataCoordinateRegex.exec('-905958-1805959').groups;

	equal(latitudeSeconds, '58');
	equal(longitudeSeconds, '59');
});

test('don\'t match invalid tz coordinates', () => {
	equal(tzdataCoordinateRegex.exec('-112233+1122'), null);
});

test('take latitude range (-90 ~ +90) into consideration', () => {
	equal(tzdataCoordinateRegex.exec('-9100+00000'), null);
});

test('take longitude range (-180 ~ +180) into consideration', () => {
	equal(tzdataCoordinateRegex.exec('+000000-1810000'), null);
});

test('validate latitude minutes', () => {
	equal(tzdataCoordinateRegex.exec('+006000-0000000'), null);
});

test('validate longitude minutes', () => {
	equal(tzdataCoordinateRegex.exec('+000000-0006000'), null);
});

test('validate latitude seconds', () => {
	equal(tzdataCoordinateRegex.exec('+000060-0000000'), null);
});

test('validate longitude seconds', () => {
	equal(tzdataCoordinateRegex.exec('+000000-0000060'), null);
});

test('fully optimized', () => {
	equal(optimize(tzdataCoordinateRegex).toRegExp().source, tzdataCoordinateRegex.source);
});
