// Entry point for the Node.js server (if using Node.js for the backend)
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('AI-Powered Observability Tool');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});