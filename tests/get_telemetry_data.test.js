const http = require('http');
const test = require('ava').default;
const listen = require('test-listen');
const got = require('got');

const app = require('../index.js');

test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

const addNumbers = (a,b) => a + b;

test('Add numbers', t => {
    t.is(addNumbers(1,2), 3);
});

test.after.always((t) => {
    t.context.server.close();
});