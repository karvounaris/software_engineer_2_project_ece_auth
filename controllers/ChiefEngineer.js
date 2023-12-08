'use strict';

var utils = require('../utils/writer.js');
var ChiefEngineer = require('../service/ChiefEngineerService');

module.exports.acceptOrDeclineProposal = function acceptOrDeclineProposal (req, res, next, body, userID, proposalID) {
  ChiefEngineer.acceptOrDeclineProposal(body, userID, proposalID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createVehicleSetup = function createVehicleSetup (req, res, next, body, userID) {
  ChiefEngineer.createVehicleSetup(body, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateVehicleSetup = function updateVehicleSetup (req, res, next, body, userID, elementID) {
  ChiefEngineer.updateVehicleSetup(body, userID, elementID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getVehicleSetup = function getVehicleSetup (req, res, next, userID, elementID) {
  ChiefEngineer.getVehicleSetup(userID, elementID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.userChiefEngineerUserIDAdminPanelUserIDPUT = function userChiefEngineerUserIDAdminPanelUserIDPUT (req, res, next, body, userID) {
  ChiefEngineer.userChiefEngineerUserIDAdminPanelUserIDPUT(body, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
