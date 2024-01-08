'use strict';
/**
 * @fileoverview This file contains the controller functions for handling proposals in the Engineer service.
 */

var utils = require('../utils/writer.js');
var Engineer = require('../service/EngineerService');

// Creates a list of proposals based on the provided paramaters.
module.exports.postProposal = function postProposal ( res, body, userID) {
  Engineer.postProposal(body, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

// Retrieves a list of proposals based on the provided user ID.
module.exports.getEngineerProposal = function getEngineerProposal (res, userID, proposalID) {
  Engineer.getEngineerProposal(userID, proposalID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

