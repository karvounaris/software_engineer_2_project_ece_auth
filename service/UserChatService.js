'use strict';
var chatroom = null;
var updateChat = null;

/*Get chat*/
exports.getChat = function() {
    return new Promise(function(resolve) {
      var examples = {};
      examples['application/json'] = {
        "userList" : [ {
          "last-modified" : "2000-01-23T04:56:07.000+00:00",
          "role" : "role",
          "joined" : "2000-01-23T04:56:07.000+00:00",
          "name" : "name",
          "department" : "department",
          "userID" : 0
        }, {
          "last-modified" : "2000-01-23T04:56:07.000+00:00",
          "role" : "role",
          "joined" : "2000-01-23T04:56:07.000+00:00",
          "name" : "name",
          "department" : "department",
          "userID" : 0
        } ],
        "messageList" : [ {
          "image" : "http://example.com/aeiou",
          "timeSent" : "2000-01-23T04:56:07.000+00:00",
          "messageID" : 6,
          "text" : "text",
          "userID" : 1
        }, {
          "image" : "http://example.com/aeiou",
          "timeSent" : "2000-01-23T04:56:07.000+00:00",
          "messageID" : 6,
          "text" : "text",
          "userID" : 1
        } ],
        "chatRoomID" : 5,
        "chatRoomName" : "chatRoomName",
        "chatRoomIcon" : "http://example.com/aeiou"
      };
      if (chatroom) {
        resolve(chatroom);
      } else {
        resolve(examples);
      }
    });
  }
    
  /*GET message*/
exports.getMessage = function() {
    return new Promise(function(resolve) {
      var examples = {};
      examples['application/json'] = {
        "userList" :  {
          "last-modified" : "2000-01-23T04:56:07.000+00:00",
          "role" : "role",
          "joined" : "2000-01-23T04:56:07.000+00:00",
          "name" : "name",
          "department" : "department",
          "userID" : 0
        }, 
        "messageList" :  {
          "image" : "http://example.com/aeiou",
          "timeSent" : "2000-01-23T04:56:07.000+00:00",
          "messageID" : 6,
          "text" : "text",
          "userID" : 1
        },
        "chatRoomID" : 5,
        "chatRoomName" : "chatRoomName",
        "chatRoomIcon" : "http://example.com/aeiou"
      };
      if (updateChat) {
        resolve(updateChat);
      } else {
        resolve(examples);
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