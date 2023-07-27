// Create web server application
// Run: node comments.js
// 1. Create a web server that listens on port 3000
// 2. Handle requests to the root URL (/) by returning the contents of the file comments.html
// 3. Handle requests to the /comments URL by returning a list of comments in JSON format
// 4. Handle requests to any other URL by returning a 404 error code
// 5. Use the fs module to read the contents of comments.json and return them as a JSON object
// 6. Use the http module to create a web server
// 7. Use the url module to parse the URL that the server receives

// 1. Create a web server that listens on port 3000
var http = require('http');
var fs = require('fs');
var url = require('url');
var server = http.createServer(function (request, response) {
  // 2. Handle requests to the root URL (/) by returning the contents of the file comments.html
  var urlObj = url.parse(request.url, true);
  if (urlObj.pathname === '/') {
    fs.readFile('comments.html', function (err, data) {
      response.end(data);
    });
  } else if (urlObj.pathname === '/comments') {
    // 3. Handle requests to the /comments URL by returning a list of comments in JSON format
    fs.readFile('comments.json', function (err, data) {
      response.end(data);
    });
  } else {
    // 4. Handle requests to any other URL by returning a 404 error code
    response.statusCode = 404;
    response.end('Not found');
  }
});
server.listen(3000);

// 5. Use the fs module to read the contents of comments.json and return them as a JSON object
// 6. Use the http module to create a web server
// 7. Use the url module to parse the URL that the server receives
