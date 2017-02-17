var test = require('tape').test;
var cosInRange = require('./');

test('cosInRange provides correct results', function (t) {
  var xMin = 1;
  var xMax = -2;

  var yFrom = -4;
  var yTo = -3;

  t.plan(3);

  t.equal(cosInRange(xMin, xMin, xMax, yFrom, yTo), yFrom, 'xMin passed, should be equal to yFrom');
  t.equal(cosInRange((xMax + xMin) / 2, xMin, xMax, yFrom, yTo), yTo, 'Half way x passed, should be equal to yTo');
  t.equal(cosInRange(xMax, xMin, xMax, yFrom, yTo), yFrom, 'xMax passed, should be equal to yFrom');

  t.end();
});

test('cosInRange must throw an exception for equality', function (t) {
  t.plan(1);

  try {
    cosInRange(1, 1, 1, 0, 1);
    t.fail('Exception not caught.');
  } catch (e) {
    t.pass('Exception caught.');
  }

  t.end();
});
