/**
 * @fileoverview This file contains the unit tests for the UserService module.
 */
const http = require('http');
const test = require('ava').default;
const listen = require('test-listen');
const got = require('got');
const app = require('../index.js');

const { 
  viewChart,
  getWeather,
  userUserIDProfilePagePUT,
  userUserIDProfilePageDELETE,
  viewVehicleSetup } = require('../service/UserService.js');

  const { 
    sendChartToChat,
    createChatRoom,
    sendMessageToChat,} = require('../service/UserChatService.js');
  
test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ http2: true, prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

test.after.always((t) => {
    t.context.server.close();
});

const { getChartID_examples } = require('./U_global_variables_examples.js');
test('GET /user/${userID}/chart/${chartID} endpoint returns correct data', async t => {
  const userID = 35;
  const chartID = 3;

  // Send a GET request to retrieve the resource
  const response = await t.context.got.get(`user/${userID}/chart/${chartID}`);

  // Check that the response is correct (OK)
  t.is(response.statusCode, 200);
  // Compare specific properties between the initial request and the updated resource
  t.deepEqual(response.body, getChartID_examples);
});

test('GET telemetry data by function', async t => {
  // call the function viewChart
  const result = await viewChart();

  t.is(result.date, getChartID_examples.date);
  t.is(result.data, getChartID_examples.data);
  t.deepEqual(result.dataCategory, getChartID_examples.dataCategory);
  t.deepEqual(result.name, getChartID_examples.name);
  t.is(result.lap, getChartID_examples.lap);
  t.is(result.id, getChartID_examples.id);
  t.deepEqual(result.track, getChartID_examples.track);
});
  
const { getWeather_examples } = require('./U_global_variables_examples.js');
test('GET user/{userID}/Weather view weather report', async (t) => {
  const userID = 2;
  // Send a GET request to retrieve the resource
  const response = await t.context.got.get(`user/${userID}/Weather`);
  
  t.is(response.body.temperature, getWeather_examples.temperature);
  // Check that the response is correct (OK)
  t.is(response.statusCode, 200);
});

test('GET weather report by function', async t => {
    // call the function getWeather
    const result = await getWeather();
    t.is(result.temperature, getWeather_examples.temperature);
    t.is(result.humidity, getWeather_examples.humidity);
    t.is(result.windDirection, getWeather_examples.windDirection);
    t.is(result.windSpeed, getWeather_examples.windSpeed);
    t.is(result.chanceOfRain, getWeather_examples.chanceOfRain);
});

const { putdeleteProfilePage_examples } = require('./U_global_variables_examples.js');
test('PUT user/{userID}/profilePage changes an item in personal profile', async (t) => {
  const userID = 2;
  // Send a PUT request to modify the personal profile
  const response = await t.context.got.put(`user/${userID}/profilePage`, {
    json: putdeleteProfilePage_examples,
    responseType: 'json'
  });

  t.is(response.statusCode, 200);
  // Retrieve the updated resource using a GET request
  const result = await t.context.got.get(`user/${userID}/profilePage`);
  // Compare specific properties between the initial request and the updated resource
  t.deepEqual(response.body.username, result.body.username);
  // Check that the response is correct (OK)
  t.is(result.statusCode, 200);
});

test('PUT personal profile by function', async t => {
  const userID = 2;
  // call the function userUserIDProfilePagePUT
  const result = await userUserIDProfilePagePUT(putdeleteProfilePage_examples, userID);
  // Assert that the returned result matches the provided new_user data
  t.deepEqual(result.username, putdeleteProfilePage_examples.username);
});

const { postNewChat_examples } = require('./U_global_variables_examples.js');
test('POST user/${userID}/chart/${chartID}/chat/${chatRoomID} send Chart to Chat', async (t) => {
  const userID = 1;
  const chartID = 1;
  const chatRoomID = 5;             
  
  // Send a POST request to send data chart to chat
  const response = await t.context.got.post(`user/${userID}/chart/${chartID}/chat/${chatRoomID}`, {
    json: postNewChat_examples,
    responseType: 'json'
  });
  
  t.is(response.statusCode, 200);
  // Retrieve the updated resource using a GET request
  const result = await t.context.got.get(`user/${userID}/chart/${chartID}/chat/${chatRoomID}`);
  // Check that the response is correct (OK)
  t.is(result.statusCode, 200);
  // Compare specific properties between the initial request and the updated resource
  t.deepEqual(response.body.userList[0].userID, result.body.userList[0].userID);
  t.deepEqual(response.body.userList[0].lastModified, result.body.userList[0].lastModified);
  t.deepEqual(response.body.messageList[0].messageID, result.body.messageList[0].messageID);
  t.deepEqual(response.body.messageList[0].text, result.body.messageList[0].text);
});

test('POST Send Chart to Chat by function', async t => {
  const newChartID = 5;

  // call the function sendChartToChat
  const result = await sendChartToChat(postNewChat_examples, postNewChat_examples.userList[0].userID, newChartID, postNewChat_examples.chatRoomID);
  // Assert that the returned result matches the provided new_user data
  t.deepEqual(result, postNewChat_examples);
});

test('DELETE user/{userID}/profilePage deletes description from personal profile', async (t) => {
  const userID = 2;
  // Send a DELETE request to delete the description from personal profile
  const response = await t.context.got.delete(`user/${userID}/profilePage`, {
      json: putdeleteProfilePage_examples,
      responseType: 'json'
  });
  // Retrieve the updated resource using a GET request
  var result = await t.context.got.get(`user/${userID}/profilePage`);
  // Compare specific properties between the initial request and the updated resource
  t.deepEqual(response.body, result.body);
  // Check that the response is correct (OK)
  t.is(response.statusCode, 200);
  t.is(result.statusCode, 200);
});

test('DELETE description from personal profile by function', async t => {
  const userID = 2;
  // call the function userUserIDProfilePageDELETE
  const result = await userUserIDProfilePageDELETE(putdeleteProfilePage_examples, userID);
  // Assert that the returned result matches the provided new_user data 
  t.deepEqual(result, putdeleteProfilePage_examples);
});

const { postNewChatRoom_examples } = require('./U_global_variables_examples.js');
test('POST user/{userID}/chat creates a chatRoom', async (t) => {
  const userID = 2;
  
  // Send a POST request to create a chatRoom
  const response = await t.context.got.post(`user/${userID}/chat`,{
    json: postNewChatRoom_examples,
    responseType: 'json'
  });
  
  // Retrieve the updated resource using a GET request
  const result = await t.context.got.get(`user/${userID}/chat`);
  
  // Compare specific properties between the initial request and the updated resource
  t.deepEqual(response.body, result.body);
  // Check that the response is correct (OK)
  t.is(response.statusCode, 200);
  t.is(result.statusCode, 200);
});

test('POST chatRoom by function', async t => {
  const userID = 2;
  
  // call the function createChatRoom
  const result = await createChatRoom(postNewChatRoom_examples, userID);
  // Assert that the returned result matches the provided new_user data
  t.deepEqual(result, postNewChatRoom_examples);
  // Assert that the returned result is not null
  t.not(result.userList[0].name, null);
  t.not(result.userList[1].name, null);
});

const { putMessageToChat_examples } = require('./U_global_variables_examples.js');
test('PUT user/{userID}/chat/{chatRoomID} sends a message to chat', async (t) => {
  const userID = 2;
  const chatRoomID = 5;
  
  // Send a PUT request to send a message to chat
  const response = await t.context.got.post(`user/${userID}/chat/${chatRoomID}`,  {
      json: putMessageToChat_examples,
      responseType: 'json'
  });
  
  // Retrieve the updated resource using a GET request
  const new_message = await t.context.got.get(`user/${userID}/chat/${chatRoomID}`);
  // Compare specific properties between the initial request and the updated resource
  t.deepEqual(response.body, new_message.body);
  // Check that the response is correct (OK)
  t.is(response.statusCode, 200);
  t.is(new_message.statusCode, 200);
});

test('PUT message to chat by function', async t => {
  const userID = 2;
  // call the function sendMessageToChat
  const result = await sendMessageToChat (putMessageToChat_examples, userID);
  // Assert that the returned result matches the provided new_user data
  t.deepEqual(result, putMessageToChat_examples);
  
});

test('GET /user/{userID}/vehicleSetUp display vehicle setup', async t => {
  const userID = 3;
  // Send a GET request to retrieve the resource
  const response = await t.context.got.get(`user/${userID}/vehicleSetUp`);
 //  Check that the response is correct (OK)
  t.is(response.statusCode, 200);

  t.is(response.body.year, 0);
});

const { viewVehicleSetup_examples } = require('./U_global_variables_examples.js');
test('GET display vehicle setup by function', async t => {
  const userID = 3; 
  // call the function viewVehicleSetup
  const result = await viewVehicleSetup(userID);

  // Assert that the returned result matches the provided new_user data
  t.deepEqual(result, viewVehicleSetup_examples)
});
