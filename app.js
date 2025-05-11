const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Welcom!');
});

// NEW: Route to print environment variables
app.get('/env', (req, res) => {
  res.json(process.env);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

