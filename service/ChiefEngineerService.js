'use strict';


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
exports.updateVehicleSetup = function(body,userID,elementID) {
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
 * Get vehicle setup
 * This endpoint displays vehicle setup details
 *
 * userID Integer This is the unique identifier of the user
 * elementID Integer This is the unique identifier of the element
 * returns inline_response_200_1
 **/
exports.getVehicleSetup = function(userID,elementID) {
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
 * Assign roles
 * The chief engineer must be able to edit the roles
 *
 * body AdminPanel_userID_body User model
 * userID Integer This is the unique identifier of the user
 * returns adminPanel_userID_body
 **/
exports.userChiefEngineerUserIDAdminPanelUserIDPUT = function(body,userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "last-modified" : "2000-01-23T04:56:07.000+00:00",
  "role" : "role",
  "joined" : "2000-01-23T04:56:07.000+00:00",
  "name" : "name",
  "department" : "department",
  "userID" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

