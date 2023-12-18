const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');
const getPort = require('get-port');

const {viewVehicleSetup} = require('../service/UserService.js');
const {viewChatwithSentChart} = require('../service/UserService.js');
const { sendChartToChat } = require('../service/UserService.js');
const { userUserIDProfilePageDELETE } = require('../service/UserService.js');
const { userChiefEngineerUserIDAdminPanelUserIDPUT } = require('../service/ChiefEngineerService.js');

const app = require('../index.js');


test.before(async (t) => {
    t.context.port = await getPort();
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ http2: true, throwHttpErrors: false, prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

test.after.always((t) => {
    t.context.server.close();
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
 })



 
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



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////






test('View vehicle SetUp', async (t) => {
    const userID = 2;
    const response = await t.context.got.get(`user/${userID}/vehicleSetUp`);
    //console.log(JSON.stringify(response.body, null, 2));

    const expectedResponse = {
        "year" : 0,
        "systems" : [ {
          "subSystems" : [ {
            "name" : "name",
            "parts" : [ {
              "name" : "name",
              "initialValue" : 6,
              "measurementUnit" : "measurementUnit"
            }, {
              "name" : "name",
              "initialValue" : 6,
              "measurementUnit" : "measurementUnit"
            } ],
            "description" : "description"
          }, {
            "name" : "name",
            "parts" : [ {
              "name" : "name",
              "initialValue" : 6,
              "measurementUnit" : "measurementUnit"
            }, {
              "name" : "name",
              "initialValue" : 6,
              "measurementUnit" : "measurementUnit"
            } ],
            "description" : "description"
          } ],
          "name" : "name",
          "description" : "description"
        }, {
          "subSystems" : [ {
            "name" : "name",
            "parts" : [ {
              "name" : "name",
              "initialValue" : 6,
              "measurementUnit" : "measurementUnit"
            }, {
              "name" : "name",
              "initialValue" : 6,
              "measurementUnit" : "measurementUnit"
            } ],
            "description" : "description"
          }, {
            "name" : "name",
            "parts" : [ {
              "name" : "name",
              "initialValue" : 6,
              "measurementUnit" : "measurementUnit"
            }, {
              "name" : "name",
              "initialValue" : 6,
              "measurementUnit" : "measurementUnit"
            } ],
            "description" : "description"
          } ],
          "name" : "name",
          "description" : "description"
        } ],
        "name" : "name",
        "description" : "description"
      };
    
    t.is(response.statusCode, 200);
    t.deepEqual(response.body, expectedResponse);
});