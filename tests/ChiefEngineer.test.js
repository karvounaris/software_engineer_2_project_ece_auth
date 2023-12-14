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
    
    const updatedResource = await t.context.got.get(`user/chiefEngineer/${userID}/vehicleSetUp/${elementID}`);
        
    t.is(updatedResource.statusCode, 200); 
    t.deepEqual(response.body.systems[0].subSystems[0].name , updatedResource.body.systems[0].subSystems[0].name);


    // const invalidUserID = 'invaliduserID';
    // try {
    //     await t.context.got.put(`user/chiefEngineer/${invalidUserID}/vehicleSetUp/${elementID}`);
    //     t.fail('The request should have failed but it succeeded.');
    //   } catch (error) {
    //     t.is(error.response?.statusCode, 415); // Check if statusCode is 404 if response exists
    //   }

});

test('POST /user/chiefEngineer/{userID}/vehicleSetUp/ Create Vehicle setup', async t => {
    const userID = 11;

    //Test unhappy path
    //  const nullResponse = await t.context.got.post(`user/chiefEngineer/${userID}/vehicleSetUp/`, {
    //      json: {}
    //  });

    //  console.log(nullResponse.body, 'ASADSADASD');

    //   // Check if the response indicates a critical error due to a null request body
    // t.is(nullResponse.statusCode, 200); 

    // const nullUpdatedResource = await t.context.got.get(`user/${userID}/vehicleSetUp`);
    // console.log(nullUpdatedResource.body, 'ASADSADASD');
    // t.is(nullUpdatedResource.body, '');

    //t.true(nullUpdatedResource instanceof Error); // Check if the error thrown is an instance of Error
    //t.is(nullUpdatedResource.message, 'Critical Error.'); // Check if the error message matches the expected critical error message


    const response = await t.context.got.post(`user/chiefEngineer/${userID}/vehicleSetUp/`, {
        json: {
            "year": 0,
            "systems": [
            {
                "subSystems": [
                {
                    "name": "Breaks",
                    "parts": [
                    {
                        "name": "Tyres",
                        "initialValue": 6,
                        "measurementUnit": "kilograms"
                    },
                    {
                        "name": "name",
                        "initialValue": 6,
                        "measurementUnit": "measurementUnit"
                    }
                    ],
                "description": "Tyres should weigh high enough for safety"
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
    const updatedResource = await t.context.got.get(`user/chiefEngineer/${userID}/vehicleSetUp/`);
        
    t.is(updatedResource.statusCode, 200); 
    t.deepEqual(response.body.systems[0].subSystems[0].description , updatedResource.body.systems[0].subSystems[0].description);


    // const invalidUserID = 'invaliduserID';
    // try {
    //     await t.context.got.put(`user/chiefEngineer/${invalidUserID}/vehicleSetUp/${elementID}`);
    //     t.fail('The request should have failed but it succeeded.');
    //   } catch (error) {
    //     t.is(error.response?.statusCode, 415); // Check if statusCode is 404 if response exists
    //   }

});

test('PUT /user/chiefEngineer/{userID}/proposals/{proposalID} change the proposal status', async (t) => {
    const userID = 2;
    const proposalID = 3;

    // test the case where the updatedProposalData is null
    // const nullUpdatedResource = await t.context.got.get(`user/chiefEngineer/${userID}/proposals/${proposalID}`);
    // t.true(nullUpdatedResource.body === null || Object.keys(nullUpdatedResource.body).length === 0);
    // t.is(nullUpdatedResource.body, '');

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
