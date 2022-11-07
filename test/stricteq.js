const add = require('../strictequal.js');

QUnit.module('strictequal');

QUnit.test('two numbers', assert => {
  assert.strictEqual(0,"0", true);
});
