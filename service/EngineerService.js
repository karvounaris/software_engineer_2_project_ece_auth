'use strict';
var EngineerProposalData =  null;

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
    EngineerProposalData = {
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
      resolve(EngineerProposalData); // Resolve with the constructed dynamic response
  });
}

exports.getEngineerProposal = function(userID, proposalID) {
  return new Promise(function(resolve, reject) {
    if (EngineerProposalData) {
      // If updatedData is available, resolve with it
      resolve(EngineerProposalData);
    } else {
      // If updatedData is not available, handle it accordingly (resolve with default or an error)
      resolve();
    }
  });
};


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
