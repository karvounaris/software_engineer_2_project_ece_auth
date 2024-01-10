'use strict';
var updateProfileData = null;
  
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



  
