'use strict';
var chartData = null;

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


exports.sendChartToChat = function(body){
  return new Promise(function(resolve) {
    chartData = {
      "userList": (body.userList || []).map(user => ({
        "lastModified": user.lastModified || "Default",
        "role": user.role || "Default",
        "joined": user.joined || "Default",
        "name": user.name || "Default",
        "department": user.department || "Default",
        "userID": user.userID || 0
      })),
      "messageList": (body.messageList || []).map(message => ({
        "image": message.image || "Default",
        "timeSent": message.timeSent || "Default",
        "messageID": message.messageID || 0,
        "text": message.text || "Default",
        "userID": message.userID || 0
      })),
      "chatRoomID": body.chatRoomID || 0,
      "chatRoomName": body.chatRoomName  || "Default",
      "chatRoomIcon": body.chatRoomIcon  || "Default",
      "chartList" : (body.chartList || []).map(chart =>({
        "id": chart.id || 0,
        "name": chart.name  || "Default",
        "dataCategory": chart.dataCategory  || "Default",
        "date": chart.date || 0,
        "track": chart.track  || "Default",
        "lap": chart.lap || 0,
        "data": chart.data || 0
      }))
    };
    resolve(chartData);
  });
}