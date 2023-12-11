'use strict';

const ChiefEngineerService = require('./ChiefEngineerService.js');

var updatedProfileData = null;

/**
 * Create a chatRoom
 * Creates a chatRoom for the users to communicate
 *
 * body UserID_chat_body User model
 * userID Integer This is the unique identifier of the user
 * returns inline_response_200_3
 **/
exports.createChatRoom = function(body,userID) {
  return new Promise(function(resolve, reject) {
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
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
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
exports.getWeather = function(userID) {
  return new Promise(function(resolve, reject) {
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
 * Send data chart to chat
 * Send a data chart based on a user ID
 *
 * body Chat_chatRoomID_body User model
 * userID Integer This is the unique identifier of the user
 * chartID Integer This is the unique identifier of the chart
 * chatRoomID Integer This is the unique identifier of the chatroom
 * returns inline_response_200_3
 **/
exports.sendChartToChat = function(body,userID,chartID,chatRoomID) {
  return new Promise(function(resolve, reject) {
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
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * send message to chat
 * Send message based on a chatroom ID
 *
 * body Chat_chatRoomID_body_1 User model
 * userID Integer This is the unique identifier of the user
 * chatRoomID Integer This is the unique identifier of the chatroom
 * returns inline_response_200_3
 **/
exports.sendMessageToChat = function(body,userID,chatRoomID) {
  return new Promise(function(resolve, reject) {
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
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete profile description
 * All users must be able to delete their profile description
 *
 * userID Integer This is the unique identifier of the user
 * no response value expected for this operation
 **/
exports.userUserIDProfilePageDELETE = function(userID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Edit Profile Page
 * All assigned users must be able to edit their Personal Profile page
 *
 * body UserID_profilePage_body User Profile
 * userID Integer This is the unique identifier of the user
 * returns userID_profilePage_body
 **/
exports.userUserIDProfilePagePUT = function(body,userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "role" : "role",
  "githubLink" : "http://example.com/aeiou",
  "linkedinLink" : "http://example.com/aeiou",
  "googleLink" : "http://example.com/aeiou",
  "description" : "description",
  "profileImage" : "http://example.com/aeiou",
  "department" : "department",
  "username" : "username"
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
exports.viewChart = function(userID,chartID) {
  return new Promise(function(resolve, reject) {
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
 * View vehicle setup
 * This endpoint displays vehicle setup details
 *
 * userID Integer This is the unique identifier of the user
 * returns inline_response_200_1
 **/
exports.viewVehicleSetup = function(userID) {
  return new Promise(function(resolve, reject) {
    var updatedData = ChiefEngineerService.getUpdatedVehicleData();
    if (updatedData) {
      // If updatedData is available, resolve with it
      resolve(updatedData);
    } else {
      var examples = {};
    examples['application/json'] = {
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
    resolve(examples[Object.keys(examples)[0]]);
    }
  });
}


/**
 * View the profile page of a user
 * Returns a profile page based on a single ID
 *
 * userID Integer This is the unique identifier of the user
 * chartID Integer this is the unique identifier of the chart
 * returns inline_response_200_2
 **/
exports.viewProfile = function(userID) {
  return new Promise(function(resolve, reject) { 
    if (updatedProfileData) {
      // If updatedData is available, resolve with it
      resolve(updatedProfileData);
    } else {
    var examples = {};
    examples['application/json'] = {
  "role" : "role",
  "githubLink" : "http://example.com/aeiou",
  "linkedinLink" : "http://example.com/aeiou",
  "googleLink" : "http://example.com/aeiou",
  "description" : "description",
  "profileImage" : "http://example.com/aeiou",
  "department" : "department",
  "username" : "username"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  }
  });
}