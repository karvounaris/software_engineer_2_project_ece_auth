'use strict';

var updateProfileData = null;

/**
 * Create a chatRoom
 * Creates a chatRoom for the users to communicate
 *
 * body UserID_chat_body User model
 * userID Integer This is the unique identifier of the user
 * returns inline_response_200_3
 **/
exports.createChatRoom = function(body) {
  return new Promise(function(resolve) {
    chatroom = {
      "userList": body.userList.map(user => ({
        "lastModified": user.lastModified,
        "role": user.role,
        "joined": user.joined,
        "name": user.name,
        "department": user.department,
        "userID": user.userID
      })),
      "messageList": body.messageList.map(message => ({
        "image": message.image,
        "timeSent": message.timeSent,
        "messageID": message.messageID,
        "text": message.text,
        "userID": message.userID
      })),
      "chatRoomID": body.chatRoomID,
      "chatRoomName": body.chatRoomName,
      "chatRoomIcon": body.chatRoomIcon
    };
    if (chatroom) {
      resolve(chatroom);
    } else {
      resolve();
    }
  });
}

/**
   * send message to chat
   * Send message based on a chatroom ID
   *
   * body Chat_chatRoomID_body_1 User model
   * userID Integer This is the unique identifier of the user
   * chatRoomID Integer This is the unique identifier of the chatroom
   * returns inline_response_200_3
   **/
exports.sendMessageToChat = function(body) {
  return new Promise(function(resolve) {
    updateChat = {
      "user":
      {
        "lastModified": body.user.lastModified,
        "role": body.user.role,
        "joined": body.user.joined,
        "name": body.user.name,
        "department": body.user.department,
        "userID": body.user.userID
      },
      "message": {
        "image": body.message.image,
        "timeSent": body.message.timeSent,
        "messageID": body.message.messageID,
        "text": body.message.text,
        "userID": body.message.userID
      },
      "chatRoomID": body.chatRoomID,
      "chatRoomName": body.chatRoomName,
      "chatRoomIcon": body.chatRoomIcon
    };
    if (updateChat) {
      resolve(updateChat);
    } else {
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

exports.sendChartToChat = function(body){
  return new Promise(function(resolve) {
    chartData = {
      "userList": (body.userList || []).map(user => ({
        "lastModified": user.lastModified || "Default",
        "role": user.role || "Default",
        "joined": user.joined || "Default",
        "name": user.name || "Default",
        "department": user.department || "Default",
        "userID": user.userID || 0
      })),
      "messageList": (body.messageList || []).map(message => ({
        "image": message.image || "Default",
        "timeSent": message.timeSent || "Default",
        "messageID": message.messageID || 0,
        "text": message.text || "Default",
        "userID": message.userID || 0
      })),
      "chatRoomID": body.chatRoomID || 0,
      "chatRoomName": body.chatRoomName  || "Default",
      "chatRoomIcon": body.chatRoomIcon  || "Default",
      "chartList" : (body.chartList || []).map(chart =>({
        "id": chart.id || 0,
        "name": chart.name  || "Default",
        "dataCategory": chart.dataCategory  || "Default",
        "date": chart.date || 0,
        "track": chart.track  || "Default",
        "lap": chart.lap || 0,
        "data": chart.data || 0
      }))
    };
    resolve(chartData);
  });
}