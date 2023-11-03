'use strict';


/**
 * the hands-on engineer changes the proposal status
 * Hands-on engineers must be able to change the proposal status to DONE
 *
 * body Proposals_proposalID_body Proposal model
 * userID Integer This is the unique identifier of the user
 * proposalID Integer this is the unique identifier of the proposal
 * returns proposals_proposalID_body
 **/
exports["changeStatus"] = function(body,userID,proposalID) {
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

