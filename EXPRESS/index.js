/*
// --------------------------------------------------------------------------------------------------
// PURE NODE IMPLEMENTATION OF A SERVER
//Load HTTP module
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

//Create HTTP server and listen on port 3000 for requests
const server = http.createServer((req, res) => {
  //Set the response HTTP header with HTTP status and Content type
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

//listen for request on port 3000, and as a callback function have the port listened on logged
server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
// --------------------------------------------------------------------------------------------------

*/

/*
// express server. 
//    npm install express
// --------------------------------------------------------------------------------------------------

*/
// const express = require('express');
// const app = express();
// const port = 3000;

// app.get('/', (req, res) => {
//   res.send('Hello World!');
// });

// app.listen(port, () => {
//   console.log(
//     `Example app listening on port ${port}!: http://localhost:${port}`
//   );
// });

/*
//  example of the express server that serves html file.
//  
*/

const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// Define the path to your HTML file
const htmlFilePath = path.join(__dirname, 'index.html');

// Set up a route to serve the HTML file
app.get('/', (req, res) => {
  res.sendFile(htmlFilePath);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
