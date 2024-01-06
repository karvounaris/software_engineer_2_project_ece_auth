'use strict';

var updatedVehicleData = null;
var updatedProposalData = null;
var createdVehicleData = null;
var viewAdminPanelData = null;


/**
 * Accepts or Declines a proposal
 * Chief engineer must be able to accept or decline proposals
 *
 * body Proposals_proposalID_body_1 Proposal model
 * userID Integer This is the unique identifier of the user
 * proposalID Integer This is a unique identifier of the proposal
 * returns proposals_proposalID_body_1
 **/
exports.acceptOrDeclineProposal = function(body) {
  return new Promise(function(resolve) {
    updatedProposalData = {
      id : body.id || 0,
      prposalID : body.prposalID || 0,
      partID : body.partID || 0,
      userID : body.userID || 0,
      status : body.status || "Default",
      confirmation : body.confirmation || "Default",
      title : body.title || "Default",
      description : body.description || "Default",
      currentValue : body.currentValue || 0,
      newValue : body.newValue || 0
    };
    resolve(updatedProposalData);
  });
}


exports.getProposal = function() {
  return new Promise(function(resolve) {
    if (updatedProposalData) {
      resolve(updatedProposalData);
    } else {
      resolve();
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
exports.createVehicleSetup = function(body) {
  return new Promise(function(resolve) {
    createdVehicleData = {
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
      name: body.name || 'Default Vehicle Name',
      description: body.description || 'Default Vehicle Description'
    };
    resolve(createdVehicleData);
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
exports.updateVehicleSetup = function(body) {
  return new Promise(function(resolve) {
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
      name: body.name || 'Default Vehicle Name',
      description: body.description || 'Default Vehicle Description'
    };
    resolve(updatedVehicleData);
  });
};

exports.viewUpdatedVehicleSetup = function() {
  return new Promise(function(resolve) {
    if (updatedVehicleData) {
      resolve(updatedVehicleData);
    } else {
      resolve();
    }
  });
};


exports.getCreatedVehicleSetup = function() {
  return new Promise(function(resolve) {
    if (createdVehicleData) {
      resolve(createdVehicleData);
    } else {
      resolve();
    }
  });
};


exports.userChiefEngineerUserIDAdminPanelUserIDPUT = function(body) {
  return new Promise(function(resolve) {
    viewAdminPanelData = {
      "lastModified": body.lastModified || 0,
      role: body.role || "Default",
      joined: body.joined || "Default",
      name: body.name || "Default",
      department: body.department || "Default",
      userID: body.userID || 0
    };
    resolve(viewAdminPanelData);
  });
}


exports.viewAdminPanel = function() {
  return new Promise(function(resolve,) {
    if (viewAdminPanelData) {
      resolve(viewAdminPanelData);
    } else {
      resolve();
    }
  });
};