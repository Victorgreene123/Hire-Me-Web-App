// Import express
import express from 'express';

// Import other modules (assuming getaccountnumber.js is an ES module)
import getaccountname from './getaccountnumber.js';

// Create an instance of express
const app = express();

// Define a port
const PORT = 8000;

// Define a route for the homepage
app.get('/', (req, res) => {
  res.send('Hello World from Express!');
});

app.get('/get-account', (req, res) => {
  res.json({
    response: getaccountname,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(getaccountname); // Make sure getaccountname is defined in getaccountnumber.js
});
