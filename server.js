// variable requiring the node module 'http'
var http = require("http");
// first server PORT
var PORT1 = 7000;
// second server PORT
var PORT2 = 7500;


// first server functionality
// declaring a function named handleRequest with parameters 'req' and 'res'
function handleRequest(req, res) {
  res.end("something good about you" + req.url);
}

var server1 = http.createServer(handleRequest);

server1.listen(PORT1, function() {
  console.log("server listening on: http://localhost:" + PORT1);
});




// second server functionality
function handleRequest(req, res) {
  res.end("something bad about you" + req.url);
}

var server2 = http.createServer(handleRequest);

server2.listen(PORT2, function() {
  console.log("server listening on: http://localhost:" + PORT2);
});
