/**
 * @fileoverview This file contains tests for the ChiefEngineerService module.
 */
const {
    updateVehicleSetup,
    createVehicleSetup,
    acceptOrDeclineProposal, 
    userChiefEngineerUserIDAdminPanelUserIDPUT } = require('../service/ChiefEngineerService.js');


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
    t.deepEqual(response.body.systems[1].subSystems[1].name , updatedResource.body.systems[1].subSystems[1].name);
    t.deepEqual(response.body.systems[0].subSystems[0].parts[1].initialValue,
         updatedResource.body.systems[0].subSystems[0].parts[1].initialValue);
    t.deepEqual(response.body.systems[0].subSystems[0].measurementUnit , updatedResource.body.systems[0].subSystems[0].measurementUnit);
});

test('PUT adds new element to the Vehicle by function', async t => {
    const userID = 2;
    const elementID = 3;
    const new_user = {
        "year": 0,
            "systems": [
            {
                "subSystems": [
                {
                    "name": "Engine",
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
            };

    const result = await updateVehicleSetup(new_user, userID, elementID);
    t.deepEqual(result, new_user);
});

test('POST /user/chiefEngineer/{userID}/vehicleSetUp/ Create Vehicle setup', async t => {
    const userID = 11;

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
    t.deepEqual(response.body.systems[0].subSystems[0].name , updatedResource.body.systems[0].subSystems[0].name);
    t.deepEqual(response.body.systems[1].subSystems[1].name , updatedResource.body.systems[1].subSystems[1].name);
    t.deepEqual(response.body.systems[0].subSystems[0].parts[1].initialValue,
         updatedResource.body.systems[0].subSystems[0].parts[1].initialValue);
    t.deepEqual(response.body.systems[0].subSystems[0].measurementUnit , updatedResource.body.systems[0].subSystems[0].measurementUnit);
});

test('POST Create setup Vehicle by function', async t => {
    const userID = 2;
    const elementID = 4;
    const new_user = {
        "year": 0,
            "systems": [
            {
                "subSystems": [
                {
                    "name": "Engine",
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
            };

    const result = await createVehicleSetup(new_user, userID, elementID);
    t.deepEqual(result, new_user);

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


test('PUT change the proposal status by function', async (t) => {
    const userID = 7;
    const proposalID = 3;
    const new_user = {
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

    const result = await acceptOrDeclineProposal(new_user, userID, proposalID);
    t.deepEqual(result, new_user);

});


test('PUT /user/chiefEngineer/{adminUserID}/adminPanel/{userID} changes the role of a user', async t => {
    const adminUserID = 1;
    const userID = 5;

    const response = await t.context.got.put(`user/chiefEngineer/${adminUserID}/adminPanel/${userID}`, {
        json: {
            "lastModified" : "2000-01-23T04:56:07.000+00:00",
            "role" : "waterBoy",
            "joined" : "2000-01-23T04:56:07.000+00:00",
            "name" : "name",
            "department" : "department",
            "userID" : 0
        }
    });
    t.is(response.statusCode, 200);
    const result = await t.context.got.get(`user/chiefEngineer/${adminUserID}/adminPanel/${userID}`);
    t.is(result.statusCode, 200);
    t.deepEqual(response.body.role, result.body.role);
});

test('PUT changes the role of a user by function', async t => {
    const adminUserID = 2;
    const userID = 6;

    const newData = {
        'lastModified': 0,
        role : "Default",
        joined : "Default",
        name : "Default",
        department :  "Default",
        userID : 0
      };

    const result = await userChiefEngineerUserIDAdminPanelUserIDPUT(adminUserID, userID);
    t.deepEqual(result.role, newData.role);
});