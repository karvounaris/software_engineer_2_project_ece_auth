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

// Before running tests, create a server instance and configure 'got' for HTTP/2 requests
test.before(async (t) => {
    // Create an HTTP server using the 'app' from '../index.js'
    t.context.server = http.createServer(app);
    // Get the URL to the server
    t.context.prefixUrl = await listen(t.context.server);
    // Configure 'got' for making HTTP/2 requests with the server's URL as a prefix and expecting JSON responses
    t.context.got = got.extend({ http2: true, prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

// After all tests, close the server
test.after.always((t) => {
    t.context.server.close();
});

const { putpostVehicleSetup_examples } = require('./CE_global_variables_examples.js');
test('PUT /user/chiefEngineer/{userID}/vehicleSetUp/{elementID} adds new element to the Vehicle', async t => {

    // define the user ID and element ID
    const userID = 10;
    const elementID = 1;

    // Send a PUT request to modify an element of the vehicle setup
    const response = await t.context.got.put(`user/chiefEngineer/${userID}/vehicleSetUp/${elementID}`, {
        json: putpostVehicleSetup_examples,
        responseType: 'json'
        });

    // Assert that the response status code is 200 (OK)
    t.is(response.statusCode, 200);

    // Retrieve the updated resource using a GET request
    const result = await t.context.got.get(`user/chiefEngineer/${userID}/vehicleSetUp/${elementID}`);
    
    // Assert that the response status code is 200 (OK)
    t.is(result.statusCode, 200); 

    // Compare specific properties between the initial request and the updated resource
    t.deepEqual(response.body.systems[0].subSystems[0].name , result.body.systems[0].subSystems[0].name);
    t.deepEqual(response.body.systems[0].subSystems[0].parts[1].initialValue,
        result.body.systems[0].subSystems[0].parts[1].initialValue);
    t.deepEqual(response.body.systems[0].subSystems[0].measurementUnit , result.body.systems[0].subSystems[0].measurementUnit);
});

test('PUT adds new element to the Vehicle by function', async t => {
    // define the user ID and element ID
    const userID = 2;
    const elementID = 3;

    // Call the updateVehicleSetup function with the new data, user ID, and element ID
    const result = await updateVehicleSetup(putpostVehicleSetup_examples, userID, elementID);
    // Assert that the returned result matches the provided new_user data
    t.deepEqual(result, putpostVehicleSetup_examples);
});

test('POST /user/chiefEngineer/{userID}/vehicleSetUp/ Create Vehicle setup', async t => {
    // define the user ID
    const userID = 11;

    // Send a POST request to create a new vehicle setup
    const response = await t.context.got.post(`user/chiefEngineer/${userID}/vehicleSetUp/`, {
        json: putpostVehicleSetup_examples,
        responseType: 'json'
        });

    // Assert that the response status code is 200 (OK)    
    t.is(response.statusCode, 200);
        
    // Retrieve the updated resource using a GET request
    const result = await t.context.got.get(`user/chiefEngineer/${userID}/vehicleSetUp/`);
    // Assert that the response status code is 200 (OK)
    t.is(result.statusCode, 200); 
    
    // Compare specific properties between the initial request and the updated resource
    t.deepEqual(response.body.systems[0].subSystems[0].name , result.body.systems[0].subSystems[0].name);
    t.deepEqual(response.body.systems[0].subSystems[0].parts[1].initialValue,
        result.body.systems[0].subSystems[0].parts[1].initialValue);
    t.deepEqual(response.body.systems[0].subSystems[0].measurementUnit , result.body.systems[0].subSystems[0].measurementUnit);
});

test('POST Create setup Vehicle by function', async t => {
    // define the user ID and element ID
    const userID = 2;
    const elementID = 4;
    
    // Call the updateVehicleSetup function with the new data, user ID, and element ID        
    const result = await createVehicleSetup(putpostVehicleSetup_examples, userID, elementID);
    // Assert that the returned result matches the provided new_user data        
    t.deepEqual(result, putpostVehicleSetup_examples);
});

const { putProposalID_examples } = require('./CE_global_variables_examples.js');
test('PUT /user/chiefEngineer/{userID}/proposals/{proposalID} change the proposal status', async (t) => {
    // define the user ID and proposal ID
    const userID = 2;
    const proposalID = 3;

    // Send a PUT request to modify the status of a proposal
    const response = await t.context.got.put(`user/chiefEngineer/${userID}/proposals/${proposalID}`, {
        json: putProposalID_examples,
        responseType: 'json'
    });
    // Assert that the response status code is 200 (OK)
    t.is(response.statusCode, 200);

    // Retrieve the updated resource using a GET request
    const result = await t.context.got.get(`user/chiefEngineer/${userID}/proposals/${proposalID}`);
    // Assert that the response status code is 200 (OK)
     t.is(result.statusCode, 200); 

    // Compare specific properties between the initial request and the updated resource
     t.deepEqual(response.body.newValue, result.body.newValue);
     t.deepEqual(response.body.status, result.body.status);
     t.deepEqual(response.body.confirmation, result.body.confirmation);
     t.deepEqual(response.body.description, result.body.description);
});

test('PUT change the proposal status by function', async (t) => {
    // define the user ID and proposal ID
    const userID = 7;
    const proposalID = 3;

    // Call the acceptOrDeclineProposal function with the new data, user ID, and proposal ID    
    const result = await acceptOrDeclineProposal(putProposalID_examples, userID, proposalID);
    // Assert that the returned result matches the provided new_user data
    t.deepEqual(result, putProposalID_examples);

});

const { putChangeRole_examples } = require('./CE_global_variables_examples.js');
test('PUT /user/chiefEngineer/{adminUserID}/adminPanel/{userID} changes the role of a user', async t => {
    // define the admin user ID and user ID
    const adminUserID = 1;
    const userID = 5;

    // Send a PUT request to modify the role of a user
    const response = await t.context.got.put(`user/chiefEngineer/${adminUserID}/adminPanel/${userID}`, {
        json: putChangeRole_examples,
        responseType: 'json'
    });
    // Assert that the response status code is 200 (OK)
    t.is(response.statusCode, 200);

    // Retrieve the updated resource using a GET request
    const result = await t.context.got.get(`user/chiefEngineer/${adminUserID}/adminPanel/${userID}`);
    // Assert that the response status code is 200 (OK)
    t.is(result.statusCode, 200);
    // Compare specific properties between the initial request and the updated resource
    t.deepEqual(response.body.role, result.body.role);
});

test('PUT changes the role of a user by function', async t => {
    // define the admin user ID and user ID
    const adminUserID = 2;
    const userID = 6;

    //  Call the userChiefEngineerUserIDAdminPanelUserIDPUT function with the new data, admin user ID, and user ID 
    const result = await userChiefEngineerUserIDAdminPanelUserIDPUT(putChangeRole_examples, adminUserID, userID);
    // Assert that the returned result matches the provided new_user data
    t.deepEqual(result.role, putChangeRole_examples.role);
});