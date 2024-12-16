//Create web server
//Create a web server using Express.js that listens for requests on port 3000, and responds with the comment data from the comments array. When a request is made to the server, the server should respond with the comment data in the comments array as a JSON object.
//The server should respond with the comment data in the comments array as a JSON object.
//The server should listen on port 3000.
//The server should respond to all requests with the comment data in the comments array.

// Import the express library
const express = require('express');

// Create an instance of the express server
const app = express();

// Create an array of comments
const comments = [
  { name: 'John', comment: 'This is a comment' },
  { name: 'Jane', comment: 'This is another comment' },
  { name: 'Jack', comment: 'This is a third comment' }
];

// Create a route that responds with the comments array as a JSON object
app.get('/', (req, res) => {
  res.json(comments);
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});