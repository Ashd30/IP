const express = require('express');
const app = express();
const port = 3000; // Choose a port number

// Define a route that responds with "Hello World"
app.get('/', (req, res) => {
  res.send('Hello World');
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`); // display on cmd
});
