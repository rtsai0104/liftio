const express = require('express');
// require('./db/mongoose');

const app = express();
const PORT = process.env.port || 3000;

app.get('', (req, res) => {
  res.send('HI');
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
