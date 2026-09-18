const express = require('express');
const app = express();
const port = 3000;

app.get('/status', (req, res) => {
  res.json({
    status: 'success',
    message: 'Node.js REST API is up and running!',
    timestamp: new Date().toISOString()
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
