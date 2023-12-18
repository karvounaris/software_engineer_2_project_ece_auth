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

module.exports.getProposal = function getProposal (req, res, next, userID, proposalID) {
  ChiefEngineer.getProposal(userID, proposalID)
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

module.exports.getCreatedVehicleSetup = function getCreatedVehicleSetup (req, res, next, userID) {
  ChiefEngineer.getCreatedVehicleSetup(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewUpdatedVehicleSetup = function viewUpdatedVehicleSetup (req, res, next, userID) {
  ChiefEngineer.viewUpdatedVehicleSetup(userID)
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

module.exports.viewAdminPanel = function viewAdminPanel (req, res, next, body, userID, adminUserID) {
  ChiefEngineer.viewAdminPanel(body, userID, adminUserID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};