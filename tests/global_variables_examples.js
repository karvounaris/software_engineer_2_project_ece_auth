const viewVehicleSetup_examples = {
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

const putChangeRole_examples = {
  "lastModified": "2000-01-23T04:56:07.000+00:00",
  "role": "waterBoy",
  "joined": "2000-01-23T04:56:07.000+00:00",
  "name": "name",
  "department": "department",
  "userID": 0
};

const getChartID_examples = {
  "date": 6,
  "data": 5.962133916683182,
  "dataCategory": "dataCategory",
  "name": "name",
  "lap": 1,
  "id": 0,
  "track": "track"
};

const getWeather_examples = {
  "temperature" : 0,
  "humidity" : 6.027456183070403,
  "windDirection" : 5,
  "windSpeed" : 1.4658129805029452,
  "chanceOfRain" : 5
};

const putdeleteProfilePage_examples = {
  "role" : "role",
  "githubLink" : "http://example.com/aeiou",
  "linkedinLink" : "http://example.com/aeiou",
  "googleLink" : "http://example.com/aeiou",
  "description" : "description",
  "profileImage" : "http://example.com/aeiou",
  "department" : "department",
  "username" : "annat"
};

const postNewChat_examples = {
  "userList" : [ {
    "lastModified" : "2000-01-23T04:56:07.000+00:00",
    "role" : "role",
    "joined" : "2000-01-23T04:56:07.000+00:00",
    "name" : "name",
    "department" : "department",
    "userID" : 1
  } ],
  "messageList" : [ {
    "image" : "http://example.com/aeiou",
    "timeSent" : "2000-01-23T04:56:07.000+00:00",
    "messageID" : 6,
    "text" : "text",
    "userID" : 1
  } ],
  "chatRoomID" : 5,
  "chatRoomName" : "chatRoomName",
  "chatRoomIcon" : "http://example.com/aeiou",
  "chartList" : [{
      "id": 1,
      "name": "string",
      "dataCategory": "string",
      "date": 0,
      "track": "string",
      "lap": 0,
      "data": 0
  }]
};

const postNewChatRoom_examples = {
  "userList" : [ {
    "lastModified" : "2000-01-23T04:56:07.000+00:00",
    "role" : "role",
    "joined" : "2000-01-23T04:56:07.000+00:00",
    "name" : "name",
    "department" : "department",
    "userID" : 0
  }, {
    "lastModified" : "2000-01-23T04:56:07.000+00:00",
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

const putMessageToChat_examples = {
  "user" :  {
    "lastModified" : "2000-01-23T04:56:07.000+00:00",
    "role" : "role",
    "joined" : "2000-01-23T04:56:07.000+00:00",
    "name" : "name",
    "department" : "department",
    "userID" : 2
  },
  "message" :  {
    "image" : "http://example.com/aeiou",
    "timeSent" : "2000-01-23T04:56:07.000+00:00",
    "messageID" : 6,
    "text" : "hello world",
    "userID" : 2
  },
  "chatRoomID" : 5,
  "chatRoomName" : "chatRoomName",
  "chatRoomIcon" : "http://example.com/aeiou"
}

const postNewProposal_examples = {
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

const putChangeProposalStatus_examples = {
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

module.exports = { viewVehicleSetup_examples, putpostVehicleSetup_examples, putProposalID_examples, putChangeRole_examples,
                  getChartID_examples, getWeather_examples, putdeleteProfilePage_examples, postNewChat_examples, postNewChatRoom_examples,
                  putMessageToChat_examples, postNewProposal_examples, putChangeProposalStatus_examples };