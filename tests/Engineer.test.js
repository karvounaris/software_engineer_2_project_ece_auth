/**
 * @fileoverview This file contains the unit tests for the EngineerService module.
 */
const {postProposal} = require('../service/EngineerService.js');

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

test('POST /user/engineer/{userID}/proposals change the proposal status', async (t) => {
    const userID = 4;

    // Send a POST request to create a proposal
    const response = await t.context.got.post(`user/engineer/${userID}/proposals`, {
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
    // Retrieve the updated resource using a GET request
    const updatedResource = await t.context.got.get(`user/engineer/${userID}/proposals`);
        
    t.is(updatedResource.statusCode, 200); 
    // Compare specific properties between the initial request and the updated resource
    t.deepEqual(response.body.newValue, updatedResource.body.newValue);
    t.deepEqual(response.body.status, updatedResource.body.status);
    t.deepEqual(response.body.confirmation, updatedResource.body.confirmation);
    t.deepEqual(response.body.description, updatedResource.body.description);
});

test('POST change the proposal status by function' , async (t) => {
    const userID = 23;
    const proposalID = 6;

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

        // Call the postProposal function with the new data, user ID, and proposal ID
        const result = await postProposal(new_user, userID, proposalID);
        // Assert that the returned result matches the provided new_user data
        t.deepEqual(result, new_user);
});