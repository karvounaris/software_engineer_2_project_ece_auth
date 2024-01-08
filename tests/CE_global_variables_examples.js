//Global variable examples in json for chief engineer functions

//Example of new vehicle setup element
const putpostVehicleSetup_examples = {
    "year" : 0,
    "systems" : [ {
      "subSystems" : [ {
        "name" : "Engine",
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
      }],
      "name" : "name",
      "description" : "description"
    }],
    "name" : "name",
    "description" : "description"
};

//Example of change in proposal confirmation
const putProposalID_examples = {
    "newValue" : 2.3021358869347655,
    "prposalID" : 3,
    "partID" : 1,
    "description" : "Critical change for tires",
    "id" : 0,
    "title" : "title",
    "userID" : 2,
    "currentValue" : 5.637376656633329,
    "status" : "Done",
    "confirmation": "Accepted"
};

//Example of change in role on profile page
const putChangeRole_examples = {
    "lastModified": "2000-01-23T04:56:07.000+00:00",
    "role": "waterBoy",
    "joined": "2000-01-23T04:56:07.000+00:00",
    "name": "name",
    "department": "department",
    "userID": 0
  };

  module.exports = {putpostVehicleSetup_examples, putProposalID_examples, putChangeRole_examples};