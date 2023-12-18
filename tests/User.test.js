const http = require('http');
const test = require('ava').default;
const listen = require('test-listen');
const got = require('got');

const app = require('../index.js');

const { sendChartToChat } = require('../service/UserService.js');
const {viewChart} = require('../service/UserService.js');


test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ http2: true, prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

test.after.always((t) => {
    t.context.server.close();
});

test('GET /user/${userID}/chart/${chartID} endpoint returns correct data', async t => {
    const userID = 35;
    const chartID = 3;
  
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

    t.is(response.body.temperature, 0);
    t.is(response.statusCode, 200);
});


test('GET user/${userID}/profilePage View the profile page of a user', async (t) => {
    const userID = 4;

    const response = await t.context.got.get(`user/${userID}/profilePage`);
    t.is(response.statusCode, 200);

});

test('GET user/engineer/${userID}/file View the file', async (t) => {
    const userID = 7;

    const response = await t.context.got.get(`user/engineer/${userID}/file`);
    t.is(response.statusCode, 200);
    
});

test('Send Chart to Chat', async (t) => {
    const body = {
        "userList" : [ {
          "lastModified" : "2000-01-23T04:56:07.000+00:00",
          "role" : "role",
          "joined" : "2000-01-23T04:56:07.000+00:00",
          "name" : "name",
          "department" : "department",
          "userID" : 1
        } ],
        "messageList" : [ {
          "image" : "http://example.com/aeiou",
          "timeSent" : "2000-01-23T04:56:07.000+00:00",
          "messageID" : 6,
          "text" : "text",
          "userID" : 1
        } ],
        "chatRoomID" : 5,
        "chatRoomName" : "chatRoomName",
        "chatRoomIcon" : "http://example.com/aeiou",
        "chartList" : [{
            "id": 1,
            "name": "string",
            "dataCategory": "string",
            "date": 0,
            "track": "string",
            "lap": 0,
            "data": 0
        }]
      };
    const userID = 1;
    const chartID = 1;
    const chatRoomID = 5;             
    
    const response = await t.context.got.post(`user/${userID}/chart/${chartID}/chat/${chatRoomID}`, {json:body});
    const updateResource = await t.context.got.get(`user/${userID}/chart/${chartID}/chat/${chatRoomID}`);
    t.is(updateResource.statusCode, 200);
    t.deepEqual(response.body.userList[0].userID, updateResource.body.userList[0].userID);
    t.deepEqual(response.body.userList[0].lastModified, updateResource.body.userList[0].lastModified);
    t.deepEqual(response.body.messageList[0].messageID, updateResource.body.messageList[0].messageID);
    t.deepEqual(response.body.messageList[0].text, updateResource.body.messageList[0].text);

  });

  test('Send Chart to Chat by function', async t => {
    const newChartID = 5;
    
    const newChat = {
        "userList" : [ {
          "lastModified" : "2000-01-23T04:56:07.000+00:00",
          "role" : "role",
          "joined" : "2000-01-23T04:56:07.000+00:00",
          "name" : "name",
          "department" : "department",
          "userID" : 1
        } ],
        "messageList" : [ {
          "image" : "http://example.com/aeiou",
          "timeSent" : "2000-01-23T04:56:07.000+00:00",
          "messageID" : 6,
          "text" : "text",
          "userID" : 1
        } ],
        "chatRoomID" : 5,
        "chatRoomName" : "chatRoomName",
        "chatRoomIcon" : "http://example.com/aeiou",
        "chartList" : [{
            "id": 1,
            "name": "string",
            "dataCategory": "string",
            "date": 0,
            "track": "string",
            "lap": 0,
            "data": 0
        }]
      }


const result = await sendChartToChat(newChat, newChat.userList[0].userID, newChartID, newChat.chatRoomID);
t.deepEqual(result, newChat);
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

