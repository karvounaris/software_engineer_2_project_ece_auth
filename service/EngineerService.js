'use strict';
//var file = null;

/**
 * Uploads a file containing data from the sensors
 * Engineers must be able to upload a file containing data from the sensors
 *
 * body Object 
 * userID Integer This is the unique identifier of the user
 * no response value expected for this operation
 **/
exports.postFile = function(body,userID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * the engineer makes a new proposal
 * Engineers must be able to make proposals
 *
 * body UserID_proposals_body Proposal model
 * userID Integer This is the unique identifier of the user
 * returns userID_proposals_body
 **/
exports.postProposal = function(body,userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "newValue" : 2.3021358869347655,
  "prposalID" : 6,
  "partID" : 1,
  "description" : "description",
  "id" : 0,
  "title" : "title",
  "userID" : 5,
  "currentValue" : 5.637376656633329,
  "status" : "status"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * View the file containing data from the sensors
 * Returns a file containing data from the sensors based on a single ID
 *
 * body Object 
 * userID Integer This is the unique identifier of the user
 * no response value expected for this operation
 **/
exports.viewFile = function(userID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}
