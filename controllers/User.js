'use strict';

var utils = require('../utils/writer.js');
var User = require('../service/UserService');

module.exports.getChat = function getChat (req, res, next, userID) {
  User.getChat(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMessage = function getMessage (req, res, next, userID, chatRoomID) {
  User.getMessage(userID, chatRoomID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createChatRoom = function createChatRoom (req, res, next, body, userID) {
  User.createChatRoom(body, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getWeather = function getWeather (req, res, next, userID) {
  User.getWeather(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendChartToChat = function sendChartToChat (req, res, next, body, userID, chartID, chatRoomID) {
  User.sendChartToChat(body, userID, chartID, chatRoomID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.sendMessageToChat = function sendMessageToChat (req, res, next, body, userID, chatRoomID) {
  User.sendMessageToChat(body, userID, chatRoomID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getProfilePage = function getProfilePage (req, res, next, userID) {
  User.getProfilePage(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUserIDProfilePageDELETE = function userUserIDProfilePageDELETE (req, res, next, userID) {
  User.userUserIDProfilePageDELETE(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userUserIDProfilePagePUT = function userUserIDProfilePagePUT (req, res, next, body, userID) {
  User.userUserIDProfilePagePUT(body, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewChart = function viewChart (req, res, next, userID, chartID) {
  User.viewChart(userID, chartID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewVehicleSetup = function viewVehicleSetup (req, res, next, userID) {
  User.viewVehicleSetup(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};



module.exports.viewChatWithSentChart = function viewChatwithSentChart (req, res, next, userID, chartID, chatRoomID) {
  User.viewChatWithSentChart(userID, chartID, chatRoomID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};