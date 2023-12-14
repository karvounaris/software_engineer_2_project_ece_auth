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

test('PUT /user/handsOnEngineer/{userID}/proposals/{proposalID} change the proposal status', async (t) => {
    const userID = 5;
    const proposalID = 2;

    const response = await t.context.got.put(`user/handsOnEngineer/${userID}/proposals/${proposalID}`, {
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
    const updatedResource = await t.context.got.get(`user/handsOnEngineer/${userID}/proposals/${proposalID}`);
        
    t.is(updatedResource.statusCode, 200); 
    t.deepEqual(response.body.newValue, updatedResource.body.newValue);
    t.deepEqual(response.body.status, updatedResource.body.status);
    t.deepEqual(response.body.confirmation, updatedResource.body.confirmation);
    t.deepEqual(response.body.description, updatedResource.body.description);
});