'use strict';
var chartData = null;
var chatroom = null;
var updateChat = null;

/*Get chat*/
exports.getChat = function() {
    return new Promise(function(resolve) {
      var examples = {};
      examples['application/json'] = {
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
      if (chatroom) {
        resolve(chatroom);
      } else {
        resolve(examples);
      }
    });
  }
  
  /*GET message*/
exports.getMessage = function() {
    return new Promise(function(resolve) {
      var examples = {};
      examples['application/json'] = {
        "userList" :  {
          "last-modified" : "2000-01-23T04:56:07.000+00:00",
          "role" : "role",
          "joined" : "2000-01-23T04:56:07.000+00:00",
          "name" : "name",
          "department" : "department",
          "userID" : 0
        }, 
        "messageList" :  {
          "image" : "http://example.com/aeiou",
          "timeSent" : "2000-01-23T04:56:07.000+00:00",
          "messageID" : 6,
          "text" : "text",
          "userID" : 1
        },
        "chatRoomID" : 5,
        "chatRoomName" : "chatRoomName",
        "chatRoomIcon" : "http://example.com/aeiou"
      };
      if (updateChat) {
        resolve(updateChat);
      } else {
        resolve(examples);
      }
    });
  }
  
 /**
 * Gets the weather forecast
 * All assigned users must be able to view the weather report
 *
 * userID Integer This is the unique identifier of the user
 * returns inline_response_200
 **/
exports.getWeather = function() {
  return new Promise(function(resolve) {
    var examples = {};
    examples['application/json'] = {
      "temperature" : 0,
      "humidity" : 6.027456183070403,
      "windDirection" : 5,
      "windSpeed" : 1.4658129805029452,
      "chanceOfRain" : 5
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
} 


/**
 * View the data in data charts
 * Returns a data chart based on a single ID
 *
 * userID Integer This is the unique identifier of the user
 * chartID Integer this is the unique identifier of the chart
 * returns inline_response_200_2
 **/
exports.viewChart = function() {
  return new Promise(function(resolve) {
    var examples = {};
    examples['application/json'] = {
      "date" : 6,
      "data" : 5.962133916683182,
      "dataCategory" : "dataCategory",
      "name" : "name",
      "lap" : 1,
      "id" : 0,
      "track" : "track"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}
/**
 * Get Chat with User's sent Chat
 * This endpoint displays vehicle setup details
 *
 * userID Integer This is the unique identifier of the user
 * returns inline_response_200
 **/
exports.viewChatWithSentChart = function() {
  return new Promise(function(resolve) {
    if (chartData) {
      resolve(chartData);
    } else {
      resolve();
    }
  });
};
  
/**
 * View vehicle setup
 * This endpoint displays vehicle setup details
 *
 * userID Integer This is the unique identifier of the user
 * returns inline_response_200_1
 **/
exports.viewVehicleSetup = function() {
  return new Promise(function(resolve) {
    var examples = {};
    examples = {
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
    resolve(examples);
  });
}
/*GET profile page*/
exports.getProfilePage = function() {
  return new Promise(function(resolve) {
    if(updateProfileData){
      resolve(updateProfileData);
    } else{
      resolve();
    }
  });
}