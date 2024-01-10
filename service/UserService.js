'use strict';

var updateProfileData = null;

/**
 * Gets the weather forecast
 * All assigned users must be able to view the weather report
 *
 * userID Integer This is the unique identifier of the user
 * returns inline_response_200
 **/
exports.getWeather = function() {
  return new Promise(function(resolve) {
    var examples = {};
    examples['application/json'] = {
      "temperature" : 0,
      "humidity" : 6.027456183070403,
      "windDirection" : 5,
      "windSpeed" : 1.4658129805029452,
      "chanceOfRain" : 5
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

/*GET profile page*/
exports.getProfilePage = function() {
  return new Promise(function(resolve) {
    if(updateProfileData){
      resolve(updateProfileData);
    } else{
      resolve();
    }
  });
} 


/**
 * Delete profile description
 * All users must be able to delete their profile description
 *
 * userID Integer This is the unique identifier of the user
 * no response value expected for this operation
 **/
exports.userUserIDProfilePageDELETE = function(body) {
  return new Promise(function(resolve) {
    updateProfileData = {
      "role" : body.role,
      "githubLink" : body.githubLink,
      "linkedinLink" : body.linkedinLink,
      "googleLink" : body.googleLink,
      "description" : body.description,
      "profileImage" : body.profileImage,
      "department" : body.department,
      "username" : body.username
    };
    if (updateProfileData) {
      resolve(updateProfileData);
    } else {
      resolve();
    }
  });
}


/**
 * Edit Profile Page
 * All assigned users must be able to edit their Personal Profile page
 *
 * body UserID_profilePage_body User Profile
 * userID Integer This is the unique identifier of the user
 * returns userID_profilePage_body
 **/
exports.userUserIDProfilePagePUT = function(body) {
  return new Promise(function(resolve) {
    updateProfileData = {
      "role" : body.role || "Default",
      "githubLink" : body.githubLink || "Default",
      "linkedinLink" : body.linkedinLink || "Default",
      "googleLink" : body.googleLink || "Default",
      "description" : body.description || "Default",
      "profileImage" : body.profileImage || "Default",
      "department" : body.department || "Default",
      "username" : body.username|| "Default"
    };
    resolve(updateProfileData);
  });
}


/**
 * View the data in data charts
 * Returns a data chart based on a single ID
 *
 * userID Integer This is the unique identifier of the user
 * chartID Integer this is the unique identifier of the chart
 * returns inline_response_200_2
 **/
exports.viewChart = function() {
  return new Promise(function(resolve) {
    var examples = {};
    examples['application/json'] = {
      "date" : 6,
      "data" : 5.962133916683182,
      "dataCategory" : "dataCategory",
      "name" : "name",
      "lap" : 1,
      "id" : 0,
      "track" : "track"
    };
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Chat with User's sent Chat
 * This endpoint displays vehicle setup details
 *
 * userID Integer This is the unique identifier of the user
 * returns inline_response_200
 **/
exports.viewChatWithSentChart = function() {
  return new Promise(function(resolve) {
    if (chartData) {
      resolve(chartData);
    } else {
      resolve();
    }
  });
};
  
/**
 * View vehicle setup
 * This endpoint displays vehicle setup details
 *
 * userID Integer This is the unique identifier of the user
 * returns inline_response_200_1
 **/
exports.viewVehicleSetup = function() {
  return new Promise(function(resolve) {
    var examples = {};
    examples = {
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
        }],
        "name" : "name",
        "description" : "description"
      }],
      "name" : "name",
      "description" : "description"
    };
    resolve(examples);
  });
}

