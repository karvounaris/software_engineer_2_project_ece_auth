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
