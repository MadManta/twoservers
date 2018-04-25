// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORT = 7000;
var PORT2 = 7500;

// Create a generic function to handle requests and responses
function handleRequest(request, response) {
    console.log(request);
  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

function handleRequest2(request, response) {
    console.log(request);
  // Send the below string to the client when the user visits the PORT URL
  response.end("It Works!! Path Hit: " + request.url);
}

// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server1 = http.createServer(handleRequest);
var server2 = http.createServer(handleRequest2);

// Start our server so that it can begin listening to client requests.
server1.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

server2.listen(PORT2, function() {

    // Log (server-side) when our server has started
    console.log("Server listening on: http://localhost:" + PORT2);
  });
