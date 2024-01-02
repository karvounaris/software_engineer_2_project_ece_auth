'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

// User retrieves a Chat.
module.exports.getChat = function getChat (req, res, next, userID) {
  User.getChat(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// User retrieves a Message.
module.exports.getMessage = function getMessage (req, res, next, userID, chatRoomID) {
  User.getMessage(userID, chatRoomID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// User creates a Chat Room.
module.exports.createChatRoom = function createChatRoom (req, res, next, body, userID) {
  User.createChatRoom(body, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// User retrieves the Weather report.
module.exports.getWeather = function getWeather (req, res, next, userID) {
  User.getWeather(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Send a data chart based on a user ID.
module.exports.sendChartToChat = function sendChartToChat (req, res, next, body, userID, chartID, chatRoomID) {
  User.sendChartToChat(body, userID, chartID, chatRoomID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// User sends a message to a chat room based on a chatroom ID.
module.exports.sendMessageToChat = function sendMessageToChat (req, res, next, body, userID, chatRoomID) {
  User.sendMessageToChat(body, userID, chatRoomID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// User retrieves the profile page based on the provided user ID.
module.exports.getProfilePage = function getProfilePage (req, res, next, userID) {
  User.getProfilePage(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// User deletes the profile description based on the provided user ID.
module.exports.userUserIDProfilePageDELETE = function userUserIDProfilePageDELETE (req, res, next, userID) {
  User.userUserIDProfilePageDELETE(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// User edits the profile based on the provided user ID.
module.exports.userUserIDProfilePagePUT = function userUserIDProfilePagePUT (req, res, next, body, userID) {
  User.userUserIDProfilePagePUT(body, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// User retrieves the chart based on the provided user ID.
module.exports.viewChart = function viewChart (req, res, next, userID, chartID) {
  User.viewChart(userID, chartID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// User retrieves the vehicle Setup based on the provided user ID.
module.exports.viewVehicleSetup = function viewVehicleSetup (req, res, next, userID) {
  User.viewVehicleSetup(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// User retrieves the Chat details on the provided user ID, chartID and chatRoomID.
module.exports.viewChatWithSentChart = function viewChatwithSentChart (req, res, next, userID, chartID, chatRoomID) {
  User.viewChatWithSentChart(userID, chartID, chatRoomID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};