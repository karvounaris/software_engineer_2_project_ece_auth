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
      newValue : body.newValue || 0.0,
      prposalID : body.prposalID || 0,
      partID : body.partID || 0,
      description : body.description || "Default Description",
      id : body.id || 0,
      title : body.title || "Default Title",
      userID : body.userID || 0,
      currentValue : body.currentValue || 0.0,
      status : body.status || "Default Status",
      confirmation : body.confirmation || "Default Confirmation"
    };
      resolve(handsOnEngineerProposalData); // Resolve with the constructed dynamic response
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