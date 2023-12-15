'use strict';
var handsOnEngineerProposalData = null;

/**
 * the hands-on engineer changes the proposal status
 * Hands-on engineers must be able to change the proposal status to DONE
 *
 * body Proposals_proposalID_body Proposal model
 * userID Integer This is the unique identifier of the user
 * proposalID Integer this is the unique identifier of the proposal
 * returns proposals_proposalID_body
 **/
exports.changeStatus = function(body,userID,proposalID) {
  return new Promise(function(resolve, reject) {
    handsOnEngineerProposalData = {
      newValue : body.newValue,
      prposalID : body.prposalID,
      partID : body.partID,
      description : body.description,
      id : body.id,
      title : body.title,
      userID : body.userID,
      currentValue : body.currentValue,
      status : body.status,
      confirmation : body.confirmation
    };
    if (handsOnEngineerProposalData){
      resolve(handsOnEngineerProposalData); // Resolve with the constructed dynamic response
    } else {
      resolve();
    }
//     var examples = {};
//     examples['application/json'] = {
//   "newValue" : 2.3021358869347655,
//   "prposalID" : 6,
//   "partID" : 1,
//   "description" : "description",
//   "id" : 0,
//   "title" : "title",
//   "userID" : 5,
//   "currentValue" : 5.637376656633329,
//   "status" : "status"
// };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
  });
}

exports.getHandsOnEngineerProposal = function(userID, proposalID) {
  return new Promise(function(resolve, reject) {
    if (handsOnEngineerProposalData) {
      // If updatedData is available, resolve with it
      resolve(handsOnEngineerProposalData);
    } else {
      // If updatedData is not available, handle it accordingly (resolve with default or an error)
      resolve();
    }
  });
};