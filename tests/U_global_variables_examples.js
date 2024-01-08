//Global variable examples in json for user functions

//Example of a vehice setup
const viewVehicleSetup_examples = {
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
      }],
      "name" : "name",
      "description" : "description"
    }],
    "name" : "name",
    "description" : "description"
};

//Example of a chart
const getChartID_examples = {
  "date": 6,
  "data": 5.962133916683182,
  "dataCategory": "dataCategory",
  "name": "name",
  "lap": 1,
  "id": 0,
  "track": "track"
};

//Example of a weather forecast
const getWeather_examples = {
  "temperature" : 0,
  "humidity" : 6.027456183070403,
  "windDirection" : 5,
  "windSpeed" : 1.4658129805029452,
  "chanceOfRain" : 5
};

//Example of a profile page with no description
const putdeleteProfilePage_examples = {
  "role" : "role",
  "githubLink" : "http://example.com/aeiou",
  "linkedinLink" : "http://example.com/aeiou",
  "googleLink" : "http://example.com/aeiou",
  "description" : "description",
  "profileImage" : "http://example.com/aeiou",
  "department" : "department",
  "username" : "annat"
};

//Example of a new chat
const postNewChat_examples = {
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

//Example of a new chatroom
const postNewChatRoom_examples = {
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

//Example of a new message
const putMessageToChat_examples = {
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

module.exports = { viewVehicleSetup_examples, getChartID_examples, getWeather_examples,
                  putdeleteProfilePage_examples, postNewChat_examples, postNewChatRoom_examples,
                  putMessageToChat_examples};