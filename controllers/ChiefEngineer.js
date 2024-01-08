'use strict';

var utils = require('../utils/writer.js');
var ChiefEngineer = require('../service/ChiefEngineerService');

// Accepts or declines a proposal based on the provided parameters.
module.exports.acceptOrDeclineProposal = function acceptOrDeclineProposal (res, body, userID, proposalID) {
  ChiefEngineer.acceptOrDeclineProposal(body, userID, proposalID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Retrieves a proposal based on the provided user and proposal IDs.
module.exports.getProposal = function getProposal (res,userID, proposalID) {
  ChiefEngineer.getProposal(userID, proposalID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Creates a new vehicle setup based on the provided paramateres.
module.exports.createVehicleSetup = function createVehicleSetup (res, body, userID) {
  ChiefEngineer.createVehicleSetup(body, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Updates a vehicle setup based on the provided paramateres.
module.exports.updateVehicleSetup = function updateVehicleSetup (res, body, userID, elementID) {
  ChiefEngineer.updateVehicleSetup(body, userID, elementID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Retrieves vehicle setups created by a specific user. 
module.exports.getCreatedVehicleSetup = function getCreatedVehicleSetup (res, userID) {
  ChiefEngineer.getCreatedVehicleSetup(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Retrieves the updated vehicle setup for a specific user.
module.exports.viewUpdatedVehicleSetup = function viewUpdatedVehicleSetup (res, userID) {
  ChiefEngineer.viewUpdatedVehicleSetup(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Chief Engineer can assign roles on the admin panel.
module.exports.userChiefEngineerUserIDAdminPanelUserIDPUT = function userChiefEngineerUserIDAdminPanelUserIDPUT (res, body, userID, adminUserID) {
  ChiefEngineer.userChiefEngineerUserIDAdminPanelUserIDPUT(body, userID, adminUserID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Chief Engineer can view the admin panel.
module.exports.viewAdminPanel = function viewAdminPanel (res, body, userID, adminUserID) {
  ChiefEngineer.viewAdminPanel(body, userID, adminUserID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};