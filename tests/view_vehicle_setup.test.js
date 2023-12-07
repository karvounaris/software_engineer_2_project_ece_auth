const http = require('http');
const test = require('ava').default;
const listen = require('test-listen');
const got = require('got');

const {viewVehicleSetup} = require('../service/UserService.js');
const app = require('../index.js');


// test('Async', async t => {
//     const res = Promise.resolve('test');
//     t.is(await res, 'test');
// });

// test('GET the Vehicle Setup page data by function', async t => {
//     const userID = 1;
    
//     const response = await viewVehicleSetup(userID);

//     const expected_response = {
//         "year" : 0,
//         "systems" : [ {
//           "subSystems" : [ {
//             "name" : "name",
//             "parts" : [ {
//               "name" : "name",
//               "initialValue" : 6,
//               "measurementUnit" : "measurementUnit"
//             }, {
//               "name" : "name",
//               "initialValue" : 6,
//               "measurementUnit" : "measurementUnit"
//             } ],
//             "description" : "description"
//           }, {
//             "name" : "name",
//             "parts" : [ {
//               "name" : "name",
//               "initialValue" : 6,
//               "measurementUnit" : "measurementUnit"
//             }, {
//               "name" : "name",
//               "initialValue" : 6,
//               "measurementUnit" : "measurementUnit"
//             } ],
//             "description" : "description"
//           } ],
//           "name" : "name",
//           "description" : "description"
//         }, {
//           "subSystems" : [ {
//             "name" : "name",
//             "parts" : [ {
//               "name" : "name",
//               "initialValue" : 6,
//               "measurementUnit" : "measurementUnit"
//             }, {
//               "name" : "name",
//               "initialValue" : 6,
//               "measurementUnit" : "measurementUnit"
//             } ],
//             "description" : "description"
//           }, {
//             "name" : "name",
//             "parts" : [ {
//               "name" : "name",
//               "initialValue" : 6,
//               "measurementUnit" : "measurementUnit"
//             }, {
//               "name" : "name",
//               "initialValue" : 6,
//               "measurementUnit" : "measurementUnit"
//             } ],
//             "description" : "description"
//           } ],
//           "name" : "name",
//           "description" : "description"
//         } ],
//         "name" : "name",
//         "description" : "description"
//       };
    
//     t.is(response.statusCode, 200);
//     t.deepEqual(response.body, expectedResponse);
// });



test.before(async (t) => {
    t.context.server = http.createServer(app);
    t.context.prefixUrl = await listen(t.context.server);
    t.context.got = got.extend({ http2: true, prefixUrl: t.context.prefixUrl, responseType: 'json' });
});

test.after.always((t) => {
    t.context.server.close();
});


test('GET user/${userID}/vehicleSetUp vehicle SetUp report', async (t) => {
    const userID = 2;
    const response = await t.context.got.get(`user/${userID}/vehicleSetUp`);
    //console.log(JSON.stringify(response.body, null, 2));


    const expectedResponse = {
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
          }, {
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
          } ],
          "name" : "name",
          "description" : "description"
        }, {
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
          }, {
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
          } ],
          "name" : "name",
          "description" : "description"
        } ],
        "name" : "name",
        "description" : "description"
      };
    
    t.is(response.statusCode, 200);
    t.deepEqual(response.body, expectedResponse);
});



