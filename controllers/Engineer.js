'use strict';

var utils = require('../utils/writer.js');
var Engineer = require('../service/EngineerService');

module.exports.postFile = function postFile (req, res, next, body, userID) {
  Engineer.postFile(body, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.postProposal = function postProposal (req, res, next, body, userID) {
  Engineer.postProposal(body, userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getEngineerProposal = function getEngineerProposal (req, res, next, userID, proposalID) {
  Engineer.getEngineerProposal(userID, proposalID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.viewFile = function viewFile (req, res, next, userID) {
  Engineer.viewFile(userID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};