'use strict';

var updatedVehicleData = null;
var updatedProposalData = null;

/**
 * Accepts or Declines a proposal
 * Chief engineer must be able to accept or decline proposals
 *
 * body Proposals_proposalID_body_1 Proposal model
 * userID Integer This is the unique identifier of the user
 * proposalID Integer This is a unique identifier of the proposal
 * returns proposals_proposalID_body_1
 **/
exports.acceptOrDeclineProposal = function(body,userID,proposalID) {
  return new Promise(function(resolve, reject) {
    updatedProposalData = {
      id : body.id || 0,
      prposalID : body.proposalID || 0,
      partID : body.partID || 0,
      userID : body.userID || 0,
      status : body.status || "Default",
      confirmation : body.confirmation || "Default",
      title : body.title || "Default",
      description : body.description || "Default",
      currentValue : body.currentValue || 0,
      newValue : body.newValue || 0
    };
    resolve(updatedProposalData); // Resolve with the constructed dynamic response
  });
}

exports.getProposal = function(userID, proposalID) {
  return new Promise(function(resolve, reject) {
    if (updatedProposalData) {
      // If updatedData is available, resolve with it
      resolve(updatedProposalData);
    } else {
      // If updatedData is not available, handle it accordingly (resolve with default or an error)
      resolve(/* Default or appropriate response */);
    }
     });
      };


/**
 * Create vehicle setup
 * This endpoint allows the chief engineer to create a new vehicle setup
 *
 * body UserID_vehicleSetUp_body Vehicle Setup model
 * userID Integer This is the unique identifier of the user
 * returns inline_response_200_1
 **/
exports.createVehicleSetup = function(body,userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "year" : 0,
  "systems" : [ {
    "subSystems" : [ {
      "name" : "name",
      "parts" : [ {
        "name" : "name",
        "initialValue" : 6,
        "measurementUnit" : "measurementUnit"
      }, {
        "name" : "name",
        "initialValue" : 6,
        "measurementUnit" : "measurementUnit"
      } ],
      "description" : "description"
    }, {
      "name" : "name",
      "parts" : [ {
        "name" : "name",
        "initialValue" : 6,
        "measurementUnit" : "measurementUnit"
      }, {
        "name" : "name",
        "initialValue" : 6,
        "measurementUnit" : "measurementUnit"
      } ],
      "description" : "description"
    } ],
    "name" : "name",
    "description" : "description"
  }, {
    "subSystems" : [ {
      "name" : "name",
      "parts" : [ {
        "name" : "name",
        "initialValue" : 6,
        "measurementUnit" : "measurementUnit"
      }, {
        "name" : "name",
        "initialValue" : 6,
        "measurementUnit" : "measurementUnit"
      } ],
      "description" : "description"
    }, {
      "name" : "name",
      "parts" : [ {
        "name" : "name",
        "initialValue" : 6,
        "measurementUnit" : "measurementUnit"
      }, {
        "name" : "name",
        "initialValue" : 6,
        "measurementUnit" : "measurementUnit"
      } ],
      "description" : "description"
    } ],
    "name" : "name",
    "description" : "description"
  } ],
  "name" : "name",
  "description" : "description"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

/**
 * Update vehicle setup
 * This endpoint allows the chief engineer to update the vehicle setup
 *
 * body VehicleSetUp_elementID_body Vehicle Setup model
 * userID Integer This is the unique identifier of the user
 * elementID Integer This is the unique identifier of the element
 * returns inline_response_200_1
 **/
exports.updateVehicleSetup = function(body, userID, elementID) {
  return new Promise(function(resolve, reject) {
    // Sample logic to construct a response based on the input parameters
    updatedVehicleData = {
      year: body.year || 0,
      systems: (body.systems || []).map(system => ({
        name: system.name || 'Default System Name',
        description: system.description || 'Default System Description',
        subSystems: (system.subSystems || []).map(subSystem => ({
          name: subSystem.name || 'Default Subsystem Name',
          description: subSystem.description || 'Default Subsystem Description',
          parts: (subSystem.parts || []).map(part => ({
            name: part.name || 'Default Part Name',
            initialValue: part.initialValue || 6,
            measurementUnit: part.measurementUnit || 'Default Measurement Unit'
          }))
        }))
      })),
      name: body.vehicleName || 'Default Vehicle Name',
      description: body.vehicleDescription || 'Default Vehicle Description'
    };

    resolve(updatedVehicleData); // Resolve with the constructed dynamic response
  });
};

exports.getUpdatedVehicleData = function() {
  return updatedVehicleData;
};

