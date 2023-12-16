const http = require('http');
const test = require('ava');
const listen = require('test-listen');
const got = require('got');
const getPort = require('get-port');

const {viewVehicleSetup} = require('../service/UserService.js');
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




// if(process.env.NODE_ENV != "test"){
//   http.createServer(app).listen(serverPort, function(){
//     console.log('Your server is listening on port %d (http://localhost: %d)', serverPort, serverPort);
//     console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);

//   });

// };

// module.exports = app;

// const addNumbers = (a,b) => a + b;
// test('addNumbers', t => {
//     t.is(addNumbers(1, 2), 3);
// });

// test('Random test', t => {
//     t.pass();
// });

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

 test('Send Chart to Chat by function', async t => {
    const newChartID = 5;
    
    const newChat = {
        "chatRoomName": "string",
        "userList": [
          {
            "userID": 1,
            "name": "string",
            "department": "string",
            "role": "string",
            "joined": "2023-12-07T17:04:46.174Z",
            "lastModified": "2023-12-07T17:04:46.174Z"
          }
        ],
        "messageList": [
          {
            "text": "string",
            "messageID": 0,
            "userID": 0,
            "timeSent": "2023-12-07T17:04:46.174Z",
            "image": "string"
          }
        ],
        "chatRoomID": 0,
        "chatRoomIcon": "string"
      }


const result = await sendChartToChat(newChat, newChat.userList.userID, newChartID, newChat.chatRoomID);
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
        "chatRoomIcon" : "http://example.com/aeiou"
      };
    const userID = 1;
    const chartID = 2;
    const chatRoomID = 3;
    
    const response = await t.context.got.post(`user/${userID}/chart/${chartID}/chat/${chatRoomID}`, {json:body});
    
    t.is(response.statusCode, 200);
    const updateResource = await t.context.got.get(`user/${userID}/chart/${chartID}/chat/${chatRoomID}`);

    t.is(updateResource.statusCode, 200);
    t.deepEqual(response.body.userList[0].userID = updateResource.body.userList[0].userID);
    t.deepEqual(response.body.userList[0].lastModified = updateResource.body.userList[0].lastModified);
    t.deepEqual(response.body.messageList[0].messageID = updateResource.body.messageList[0].messageID);
    t.deepEqual(response.body.messageList[0].text = updateResource.body.messageList[0].text);

  });


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////










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


// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



// // test('Delete_profile_description by function', async (t) => {
// //   const userID = '123';
// //   var user = {
// //             "role" : "role",
// //             "githubLink" : "http://example.com/aeiou",
// //             "linkedinLink" : "http://example.com/aeiou",
// //             "googleLink" : "http://example.com/aeiou",
// //             "description" : "description",
// //             "profileImage" : "http://example.com/aeiou",
// //             "department" : "department",
// //             "username" : "Panos"
// //           };

// //   const result = await userUserIDProfilePageDELETE(userID, user);
  

// //   console.log(user.description);
// //   t.deepEqual(user.description, "");
// // });


// // test('Delete_profile_description by function', async (t) => {
// //   const userID = '123';
// //   const user = {
// //     "role" : "role",
// //     "githubLink" : "http://example.com/aeiou",
// //     "linkedinLink" : "http://example.com/aeiou",
// //     "googleLink" : "http://example.com/aeiou",
// //     "description" : "description",
// //     "profileImage" : "http://example.com/aeiou",
// //     "department" : "department",
// //     "username" : "Panos"
// //   };
  
// //   const result = userUserIDProfilePageDELETE(user, userID)


  
// //   t.is(response.statusCode, 200);
// // });



// // test('Delete_profile_description', async (t) => {
// //     const userID = '123';
// //     const user = {
// //       "role" : "role",
// //       "githubLink" : "http://example.com/aeiou",
// //       "linkedinLink" : "http://example.com/aeiou",
// //       "googleLink" : "http://example.com/aeiou",
// //       "description" : "description",
// //       "profileImage" : "http://example.com/aeiou",
// //       "department" : "department",
// //       "username" : "Panos"
// //     };
    
// //     const response = await t.context.got.delete(`user/${userID}/profilePage`);


    
// //     t.is(response.statusCode, 200);
// // });

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// // test('Get profile page')

// // test('Get profile page', async (t) => {
// //   const userID = 2;
  
  
// //   const response = await t.context.got.get(`user/${userID}/vehicleSetUp`);
// //   //console.log(JSON.stringify(response.body, null, 2));

// //   const expectedResponse = {
// //       "year" : 0,
// //       "systems" : [ {
// //         "subSystems" : [ {
// //           "name" : "name",
// //           "parts" : [ {
// //             "name" : "name",
// //             "initialValue" : 6,
// //             "measurementUnit" : "measurementUnit"
// //           }, {
// //             "name" : "name",
// //             "initialValue" : 6,
// //             "measurementUnit" : "measurementUnit"
// //           } ],
// //           "description" : "description"
// //         }, {
// //           "name" : "name",
// //           "parts" : [ {
// //             "name" : "name",
// //             "initialValue" : 6,
// //             "measurementUnit" : "measurementUnit"
// //           }, {
// //             "name" : "name",
// //             "initialValue" : 6,
// //             "measurementUnit" : "measurementUnit"
// //           } ],
// //           "description" : "description"
// //         } ],
// //         "name" : "name",
// //         "description" : "description"
// //       }, {
// //         "subSystems" : [ {
// //           "name" : "name",
// //           "parts" : [ {
// //             "name" : "name",
// //             "initialValue" : 6,
// //             "measurementUnit" : "measurementUnit"
// //           }, {
// //             "name" : "name",
// //             "initialValue" : 6,
// //             "measurementUnit" : "measurementUnit"
// //           } ],
// //           "description" : "description"
// //         }, {
// //           "name" : "name",
// //           "parts" : [ {
// //             "name" : "name",
// //             "initialValue" : 6,
// //             "measurementUnit" : "measurementUnit"
// //           }, {
// //             "name" : "name",
// //             "initialValue" : 6,
// //             "measurementUnit" : "measurementUnit"
// //           } ],
// //           "description" : "description"
// //         } ],
// //         "name" : "name",
// //         "description" : "description"
// //       } ],
// //       "name" : "name",
// //       "description" : "description"
// //     };
  
// //   t.is(response.statusCode, 200);
// //   t.deepEqual(response.body, expectedResponse);
// // });




// ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// test('Roles are assigned properly by function', async (t) => {
//   const user = {
//     "userID": 1,
//     "name": "string",
//     "department": "string",
//     "role": "Engineer",
//     "joined": "2023-12-13T10:52:28.845Z",
//     "last-modified": "2023-12-13T10:52:28.845Z"
//   }
//   const result = await userChiefEngineerUserIDAdminPanelUserIDPUT(user, user.userID);
//   t.deepEqual(result.role, "Engineer");

// });

// //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// test('Roles are assigned properly', async (t) =>{
//     chiefEngineerID = 1;
//     var newUser = {
//         "userID": 1,
//         "name": "string",
//         "role": "string",
//         "department": "string",
//         "joined": "2023-12-07T17:33:45.466Z",
//         "last_modified": "2023-12-07T17:33:45.466Z"
//       }

    
//     const response = await t.context.got.put(`user/chiefEngineer/${chiefEngineerID}/adminPanel/${newUser.userID}`, {json : newUser});
    
//     t.is(response.statusCode, 200);
    



// })
