const http = require('http');
const test = require('ava').default;
const listen = require('test-listen');
const got = require('got');

const {viewChart} = require('../service/UserService.js');
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
    
    t.is(response.statusCode, 200);
    t.is(response.body.date, 6);
    t.deepEqual(response.body.name, "name");
  });

test('GET telemetry data from function', async t => {
  const result = await viewChart();

  t.is(result.date, 6);
  t.is(result.data, 5.962133916683182);
  t.deepEqual(result.dataCategory, "dataCategory");
  t.deepEqual(result.name, "name");
  t.is(result.lap, 1);
  t.is(result.id, 0);
  t.deepEqual(result.track, "track");
});

