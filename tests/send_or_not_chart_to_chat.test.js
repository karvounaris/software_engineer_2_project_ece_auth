const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');

const { sendChartToChat } = require('../service/UserService.js');
const app = require('../index.js');


test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ http2: true, throwHttpErrors: false, prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

test.after.always((t) => {
    t.context.server.close();
});

  test('POST data chart successfully', async (t) => {
    const body = {
        "userList" : [ {
          "last-modified" : "2000-01-23T04:56:07.000+00:00",
          "role" : "role",
          "joined" : "2000-01-23T04:56:07.000+00:00",
          "name" : "name",
          "department" : "department",
          "userID" : 0
        }, {
          "last-modified" : "2000-01-23T04:56:07.000+00:00",
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
    const userID = 1;
    const chartID = 2;
    const chatRoomID = 3;

    const result = await sendChartToChat(body, userID, chartID, chatRoomID, "yes");

    const response = await t.context.got.post(`user/${userID}/chart/${chartID}/chat/${chatRoomID}`, {json: result});


    console.log(response.body);
    console.log(response.headers);

    t.is(response.statusCode, 200);

  });




//   test('User cancels sending data chart', async () => {
//     // Set up the test with a scenario where the user cancels
//     // ...

//     const result = await sendChartToChat(/* provide necessary parameters */);

//     // Assert that the result indicates the operation was canceled
//     expect(result).toEqual(/* expected result for cancellation */);
//   });

//   test('Validation failure for invalid data', async () => {
//     // Set up the test with invalid data
//     // ...

//     const result = await sendChartToChat(/* provide necessary parameters */);

//     // Assert that the result indicates a validation failure
//     expect(result).toEqual(/* expected result for validation failure */);
//   });

//   test('Handling edge case: Empty Chart ID', async () => {
//     // Set up the test with an empty chart ID
//     // ...

//     const result = await sendChartToChat(/* provide necessary parameters */);

//     // Assert that the function handles the edge case gracefully
//     expect(result).toEqual(/* expected result for empty chart ID */);
//   });

//   // Add more test cases as needed
// });
