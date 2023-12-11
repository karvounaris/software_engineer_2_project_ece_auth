const http = require('http');
const test = require('ava').default;
const listen = require('test-listen');
const got = require('got');

const app = require('../index.js');

test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ http2: true, prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

test.after.always((t) => {
    t.context.server.close();
});

test('GET /user/${userID}/chart/${chartID} endpoint returns correct data', async t => {
    const userID = 1;
    const chartID = 1;
  
    const response = await t.context.got.get(`user/${userID}/chart/${chartID}`);
  
    const expectedResponse = {
      "date": 6,
      "data": 5.962133916683182,
      "dataCategory": "dataCategory",
      "name": "name",
      "lap": 1,
      "id": 0,
      "track": "track"
    };
    
    t.is(response.statusCode, 200);
    t.deepEqual(response.body, expectedResponse);

  });
  
  test('PUT /user/chiefEngineer/{userID}/vehicleSetUp/{elementID} adds new element to the Vehicle', async t => {
    const userID = 10;
    const elementID = 1;

    const response = await t.context.got.put(`user/chiefEngineer/${userID}/vehicleSetUp/${elementID}`, {
        json: {
            "year": 0,
            "systems": [
            {
                "subSystems": [
                {
                    "name": "Breaks",
                    "parts": [
                    {
                        "name": "name",
                        "initialValue": 6,
                        "measurementUnit": "measurementUnit"
                    },
                    {
                        "name": "name",
                        "initialValue": 6,
                        "measurementUnit": "measurementUnit"
                    }
                    ],
                "description": "description"
                },
                {
                    "name": "name",
                    "parts": [
                    {
                        "name": "name",
                        "initialValue": 6,
                        "measurementUnit": "measurementUnit"
                    },
                    {
                        "name": "name",
                        "initialValue": 6,
                        "measurementUnit": "measurementUnit"
                    }
                    ],
                    "description": "description"
                }
            ],
                "name": "name",
                "description": "description"
            },
            {
                "subSystems": [
                {
                    "name": "name",
                    "parts": [
                    {
                        "name": "name",
                        "initialValue": 6,
                        "measurementUnit": "measurementUnit"
                    },
                    {
                        "name": "name",
                        "initialValue": 6,
                        "measurementUnit": "measurementUnit"
                    }
                    ],
                    "description": "description"
                },
                {
                    "name": "name",
                    "parts": [
                    {
                        "name": "name",
                        "initialValue": 6,
                        "measurementUnit": "measurementUnit"
                    },
                    {
                        "name": "name",
                        "initialValue": 6,
                        "measurementUnit": "measurementUnit"
                    }
                    ],
                    "description": "description"
                }
                ],
                "name": "name",
                "description": "description"
                }   
            ],
            "name": "name",
            "description": "description"
            }
        });

    t.is(response.statusCode, 200);
    const updatedResource = await t.context.got.get(`user/${userID}/vehicleSetUp`);
        
    t.is(updatedResource.statusCode, 200); 
    t.deepEqual(response.body.systems[0].subSystems[0].name , updatedResource.body.systems[0].subSystems[0].name);
});


//I should test the POST create vehicle setup as well

test('GET user/${userID}/Weather weather report', async (t) => {
    const userID = 2;

    //const { body, statusCode } = await t.context.got(getWeather);
    const response = await t.context.got.get(`user/${userID}/Weather`);
    console.log(response.body);
    // const expresponse = {
    //     "temperature": 0,
    //     "humidity": 6.027456183070403,
    //     "windDirection": 5,
    //     "windSpeed": 1.4658129805029452,
    //     "chanceOfRain": 5
    //   };

    t.is(response.body.temperature, 0);
    t.is(response.statusCode, 200);
});

test('PUT /user/chiefEngineer/{userID}/proposals/{proposalID} change the proposal status', async (t) => {
    const userID = 2;
    const proposalID = 3;

    const response = await t.context.got.put(`user/chiefEngineer/${userID}/proposals/${proposalID}`, {
        json: {
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
            }
    });

    t.is(response.statusCode, 200);
    const updatedResource = await t.context.got.get(`user/chiefEngineer/${userID}/proposals/${proposalID}`);
        
     t.is(updatedResource.statusCode, 200); 
     t.deepEqual(response.body.newValue, updatedResource.body.newValue);
     t.deepEqual(response.body.status, updatedResource.body.status);
     t.deepEqual(response.body.confirmation, updatedResource.body.confirmation);
     t.deepEqual(response.body.description, updatedResource.body.description);
});


test('GET user/${userID}/profilePage View the profile page of a user', async (t) => {
    const userID = 2;

    const response = await t.context.got.get(`user/${userID}/profilePage`);
    //console.log(response.body);
    t.is(response.statusCode, 200);
    
});