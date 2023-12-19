const http = require('http');
const test = require('ava').default;
const listen = require('test-listen');
const got = require('got');

const app = require('../index.js');

const { sendChartToChat } = require('../service/UserService.js');
const {viewChart} = require('../service/UserService.js');
const { getWeather } = require('../service/UserService.js');
const { userUserIDProfilePagePUT } = require('../service/UserService.js');
const { userUserIDProfilePageDELETE } = require('../service/UserService.js');
const { createChatRoom  } = require('../service/UserService.js');
const { sendMessageToChat  } = require('../service/UserService.js');

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
  

  test('GET weather report by function', async t => {
      const result = await getWeather();
      t.is(result.temperature, 0);
      t.is(result.humidity, 6.027456183070403);
      t.is(result.windDirection, 5);
      t.is(result.windSpeed, 1.4658129805029452);
      t.is(result.chanceOfRain, 5);
  });
  
  test('GET user/{userID}/Weather view weather report', async (t) => {
      const userID = 2;
      
      const response = await t.context.got.get(`user/${userID}/Weather`);
     
      
      t.is(response.body.temperature, 0);
      t.is(response.statusCode, 200);
  });


  test('PUT personal profile by function', async t => {
    const userID = 2;
    const new_user = {
        "role" : "role",
        "githubLink" : "http://example.com/aeiou",
        "linkedinLink" : "http://example.com/aeiou",
        "googleLink" : "http://example.com/aeiou",
        "description" : "description",
        "profileImage" : "http://example.com/aeiou",
        "department" : "department",
        "username" : "anna"
      };
    
    const result = await userUserIDProfilePagePUT(new_user, userID);
    t.deepEqual(result.username, new_user.username);
    
});
 
  test('PUT user/{userID}/profilePage changes an item in personal profile', async (t) => {
    const userID = 2;
    
    const response = await t.context.got.put(`user/${userID}/profilePage`,
    
    {
        json: {
        "role" : "role",
        "githubLink" : "http://example.com/aeiou",
        "linkedinLink" : "http://example.com/aeiou",
        "googleLink" : "http://example.com/aeiou",
        "description" : "description",
        "profileImage" : "http://example.com/aeiou",
        "department" : "department",
        "username" : "annat"
        }
    });
    
    const new_user = await t.context.got.get(`user/${userID}/profilePage`);
    
    t.deepEqual(response.body.username, new_user.body.username);
    t.is(response.statusCode, 200);
    t.is(new_user.statusCode, 200);
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


  test('DELETE description from personal profile by function', async t => {
    const userID = 2;
    const del_description = {
        "role" : "role",
        "githubLink" : "http://example.com/aeiou",
        "linkedinLink" : "http://example.com/aeiou",
        "googleLink" : "http://example.com/aeiou",
        "description" : "",
        "profileImage" : "http://example.com/aeiou",
        "department" : "department",
        "username" : "anna"
      };
    
    const result = await userUserIDProfilePageDELETE(del_description, userID);
    t.deepEqual(result, del_description);
    
});
 
  test('DELETE user/{userID}/profilePage deletes description from personal profile', async (t) => {
    const userID = 2;
    
    // var del_description = await t.context.got.get(`user/${userID}/profilePage`);

    const response = await t.context.got.delete(`user/${userID}/profilePage`,
    
    {
        json: {
        "role" : "role",
        "githubLink" : "http://example.com/aeiou",
        "linkedinLink" : "http://example.com/aeiou",
        "googleLink" : "http://example.com/aeiou",
        "description" : "",
        "profileImage" : "http://example.com/aeiou",
        "department" : "department",
        "username" : "annat"
        }
    });
    
    var del_description = await t.context.got.get(`user/${userID}/profilePage`);
    
    t.deepEqual(response.body, del_description.body);
    t.is(response.statusCode, 200);
    t.is(del_description.statusCode, 200);
});


test('POST chatRoom by function', async t => {
  const userID = 2;
  const new_chatRoom = {
    "userList" : [ {
      "lastModified" : "2000-01-23T04:56:07.000+00:00",
      "role" : "role",
      "joined" : "2000-01-23T04:56:07.000+00:00",
      "name" : "name",
      "department" : "department",
      "userID" : 0
    }, {
      "lastModified" : "2000-01-23T04:56:07.000+00:00",
      "role" : "role",
      "joined" : "2000-01-23T04:56:07.000+00:00",
      "name" : "name",
      "department" : "department",
      "userID" : 0
    } ],
    "messageList" : [ {
      "image" : "http://example.com/aeiou",
      "timeSent" : "2000-01-23T04:56:07.000+00:00",
      "messageID" : 6,
      "text" : "text",
      "userID" : 1
    }, {
      "image" : "http://example.com/aeiou",
      "timeSent" : "2000-01-23T04:56:07.000+00:00",
      "messageID" : 6,
      "text" : "text",
      "userID" : 1
    } ],
    "chatRoomID" : 5,
    "chatRoomName" : "chatRoomName",
    "chatRoomIcon" : "http://example.com/aeiou"
};
  
  const result = await createChatRoom(new_chatRoom, userID);
  t.deepEqual(result, new_chatRoom);
  t.not(result.userList[0].name, null);
  t.not(result.userList[1].name, null);
  
});

test('POST user/{userID}/chat creates a chatRoom', async (t) => {
  const userID = 2;
  
  const response = await t.context.got.post(`user/${userID}/chat`,
  
  {
      json: {
        "userList" : [ {
          "lastModified" : "2000-01-23T04:56:07.000+00:00",
          "role" : "role",
          "joined" : "2000-01-23T04:56:07.000+00:00",
          "name" : "name",
          "department" : "department",
          "userID" : 0
        }, {
          "lastModified" : "2000-01-23T04:56:07.000+00:00",
          "role" : "role",
          "joined" : "2000-01-23T04:56:07.000+00:00",
          "name" : "name",
          "department" : "department",
          "userID" : 0
        } ],
        "messageList" : [ {
          "image" : "http://example.com/aeiou",
          "timeSent" : "2000-01-23T04:56:07.000+00:00",
          "messageID" : 6,
          "text" : "text",
          "userID" : 1
        }, {
          "image" : "http://example.com/aeiou",
          "timeSent" : "2000-01-23T04:56:07.000+00:00",
          "messageID" : 6,
          "text" : "text",
          "userID" : 1
        } ],
        "chatRoomID" : 5,
        "chatRoomName" : "engineers",
        "chatRoomIcon" : "http://example.com/aeiou"
    }
  });
  
  const new_chatRoom = await t.context.got.get(`user/${userID}/chat`);
  
  t.deepEqual(response.body, new_chatRoom.body);
  t.is(response.statusCode, 200);
  t.is(new_chatRoom.statusCode, 200);
});


test('Put message to chat by function', async t => {
  const userID = 2;
  const new_message = {
    "user" :  {
      "lastModified" : "2000-01-23T04:56:07.000+00:00",
      "role" : "role",
      "joined" : "2000-01-23T04:56:07.000+00:00",
      "name" : "name",
      "department" : "department",
      "userID" : 2
    },
    "message" :  {
      "image" : "http://example.com/aeiou",
      "timeSent" : "2000-01-23T04:56:07.000+00:00",
      "messageID" : 6,
      "text" : "hello world",
      "userID" : 2
    },
    "chatRoomID" : 5,
    "chatRoomName" : "chatRoomName",
    "chatRoomIcon" : "http://example.com/aeiou"
};
  
  const result = await sendMessageToChat (new_message, userID);
  t.deepEqual(result, new_message);
  
});

test('Put user/{userID}/chat/{chatRoomID} sends a message to chat', async (t) => {
  const userID = 2;
  const chatRoomID = 5;
  
  const response = await t.context.got.post(`user/${userID}/chat/${chatRoomID}`,
  
  {
      json: {
        "user" :  {
          "lastModified" : "2000-01-23T04:56:07.000+00:00",
          "role" : "role",
          "joined" : "2000-01-23T04:56:07.000+00:00",
          "name" : "name",
          "department" : "department",
          "userID" : 2
        },
        "message" :  {
          "image" : "http://example.com/aeiou",
          "timeSent" : "2000-01-23T04:56:07.000+00:00",
          "messageID" : 6,
          "text" : "hello world",
          "userID" : 2
        },
        "chatRoomID" : 5,
        "chatRoomName" : "chatRoomName",
        "chatRoomIcon" : "http://example.com/aeiou"
    }
  });
  
  const new_message = await t.context.got.get(`user/${userID}/chat/${chatRoomID}`);
  
  t.deepEqual(response.body, new_message.body);
  t.is(response.statusCode, 200);
  t.is(new_message.statusCode, 200);
});