const http = require('http');
const test = require('ava').default;
const listen = require('test-listen');
const got = require('got');

const app = require('../index.js');

test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ http2: true, prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

test.after.always((t) => {
    t.context.server.close();
});

test('GET /user/${userID}/chart/${chartID} endpoint returns correct data', async t => {
    const userID = 1;
    const chartID = 1;
  
    const response = await t.context.got.get(`user/${userID}/chart/${chartID}`);
  
    const expectedResponse = {
      "date": 6,
      "data": 5.962133916683182,
      "dataCategory": "dataCategory",
      "name": "name",
      "lap": 1,
      "id": 0,
      "track": "track"
    };
    
    t.is(response.statusCode, 200);
    t.deepEqual(response.body, expectedResponse);

  });
  

test('GET user/${userID}/Weather weather report', async (t) => {
    const userID = 2;

    const response = await t.context.got.get(`user/${userID}/Weather`);
    console.log(response.body);

    t.is(response.body.temperature, 0);
    t.is(response.statusCode, 200);
});


test('GET user/${userID}/profilePage View the profile page of a user', async (t) => {
    const userID = 2;

    const response = await t.context.got.get(`user/${userID}/profilePage`);
    t.is(response.statusCode, 200);

});

test('GET user/engineer/${userID}/file View the file', async (t) => {
    const userID = 2;

    const response = await t.context.got.get(`user/engineer/${userID}/file`);
    t.is(response.statusCode, 200);
    
});