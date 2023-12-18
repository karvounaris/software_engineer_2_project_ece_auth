'use strict';

var utils = require('../utils/writer.js');
var HandsOnEngineer = require('../service/HandsOnEngineerService');

module.exports.changeStatus = function changeStatus(req, res, next, body, userID, proposalID) {
  HandsOnEngineer.changeStatus(body, userID, proposalID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {


      utils.writeJson(res, response);
    });
};

module.exports.getHandsOnEngineerProposal = function getHandsOnEngineerProposal (req, res, next, userID, proposalID) {
  HandsOnEngineer.getHandsOnEngineerProposal(userID, proposalID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
