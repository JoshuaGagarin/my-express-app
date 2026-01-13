const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Middleware to parse JSON (handy for APIs)
app.use(express.json());
app.use(express.static('public'));
// Basic Route
app.get('/', (req, res) => {
    res.render('index.html');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});