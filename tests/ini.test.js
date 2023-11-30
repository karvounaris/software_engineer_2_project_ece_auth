const test = require('ava');

const addNumbers = (a,b) => a + b;
test('addNumbers', t => {
    t.is(addNumbers(1, 2), 3);
});