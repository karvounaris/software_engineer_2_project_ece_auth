// Represents a Response Payload with a specific code and payload data.
var ResponsePayload = function(code, payload) {
  this.code = code;
  this.payload = payload;
}
// Constructs a ResponsePayload object with a given code and payload.
exports.respondWithCode = function(code, payload) {
  return new ResponsePayload(code, payload);
}
// Writes JSON response to the provided response object.
var writeJson = exports.writeJson = function(response, arg1, arg2) {
  var code;
  var payload;

  // If arg1 is a ResponsePayload, recursively call writeJson with its payload and code
  if(arg1 && arg1 instanceof ResponsePayload) {
    writeJson(response, arg1.payload, arg1.code);
    return;
  }

  // Determine code and payload from arguments
  if(arg2 && Number.isInteger(arg2)) {
    code = arg2;
  }
  else {
    if(arg1 && Number.isInteger(arg1)) {
      code = arg1;
    }
  }
  if(code && arg1) {
    payload = arg1;
  }
  else if(arg1) {
    payload = arg1;
  }

  if(!code) {
    // if no response code given, we default to 200
    code = 200;
  }
  // Convert payload to JSON string if it's an object
  if(typeof payload === 'object') {
    payload = JSON.stringify(payload, null, 2);
  }
  // Set response headers and send the response
  response.writeHead(code, {'Content-Type': 'application/json'});
  response.end(payload);
}
