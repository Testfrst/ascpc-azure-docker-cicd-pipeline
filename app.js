
const express = require('express');
const axios = require('axios');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Welcome to your ASCPC web app....yes!');
});

app.get('/token', async (req, res) => {
  try {
    const msiUrl = 'http://169.254.169.254/metadata/identity/oauth2/token';
    const response = await axios.get(msiUrl, {
      headers: {
        Metadata: 'true'
      },
      params: {
        'api-version': '2018-02-01',
        'resource': 'https://management.azure.com'
      }
    });

    res.json({
      access_token: response.data.access_token,
      expires_on: response.data.expires_on
    });
  } catch (error) {
    console.error('Error fetching token:', error.message);
    res.status(500).send('Failed to get token');
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
