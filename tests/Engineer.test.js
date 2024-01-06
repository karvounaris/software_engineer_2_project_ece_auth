/**
 * @fileoverview This file contains the unit tests for the EngineerService module.
 */
const { postProposal } = require('../service/EngineerService.js');

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

const { postNewProposal_examples } = require('./global_variables_examples.js');
test('POST /user/engineer/{userID}/proposals create new proposal', async (t) => {
    const userID = 4;

    // Send a POST request to create a proposal
    const response = await t.context.got.post(`user/engineer/${userID}/proposals`, {
        json: postNewProposal_examples,
        responseType: 'json'
    });

    t.is(response.statusCode, 200);
    // Retrieve the updated resource using a GET request
    const result = await t.context.got.get(`user/engineer/${userID}/proposals`);
        
    t.is(result.statusCode, 200); 
    // Compare specific properties between the initial request and the updated resource
    t.deepEqual(response.body.newValue, result.body.newValue);
    t.deepEqual(response.body.status, result.body.status);
    t.deepEqual(response.body.confirmation, result.body.confirmation);
    t.deepEqual(response.body.description, result.body.description);
});

test('POST create new proposal by function' , async (t) => {
    const userID = 23;
    const proposalID = 6;

    // Call the postProposal function with the new data, user ID, and proposal ID
    const result = await postProposal(postNewProposal_examples, userID, proposalID);
    // Assert that the returned result matches the provided new_user data
    t.deepEqual(result, postNewProposal_examples);
});