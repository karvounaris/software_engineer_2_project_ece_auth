const http = require('http');
const test = require('ava').default;
const listen = require('test-listen');
const got = require('got');

const {changeRole} = require('../service/ChiefEngineerService.js');
const app = require('../index.js');

test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ http2: true, prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

test.after.always((t) => {
    t.context.server.close();
});

test('PUT /user/chiefEngineer/{adminUserID}/adminPanel/{userID} changes the role of a user', async t => {
    const adminUserID = 1;
    const userID = 5;

    const response = await t.context.got.put(`user/chiefEngineer/${adminUserID}/adminPanel/${userID}`, {
        json: {
            "last-modified" : "2000-01-23T04:56:07.000+00:00",
            "role" : "waterBoy",
            "joined" : "2000-01-23T04:56:07.000+00:00",
            "name" : "name",
            "department" : "department",
            "userID" : 0
        }
    });
    t.is(response.statusCode, 200);

    // const result = await t.context.got.get(`user/chiefEngineer/${adminUserID}/adminPanel/${userID}`);
    // t.is(result.statusCode, 200);
    // t.deepEqual(response.body.role, result.body.role);
});