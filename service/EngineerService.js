'use strict';
var engineerProposalData =  null;


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
    engineerProposalData = {
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
    resolve(engineerProposalData);
  });
}


exports.getEngineerProposal = function(userID, proposalID) {
  return new Promise(function(resolve, reject) {
    if (engineerProposalData) {
      resolve(engineerProposalData);
    } else {
      resolve();
    }
  });
};



