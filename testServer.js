const express = require('express');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
  res.send('Server is running');
});

app.listen(port, () => {
  console.log(`Test server is running on port ${port}`);
});
