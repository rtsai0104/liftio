const express = require('express');

const app = express();
const PORT = precess.env.port || 3000;

app.get('', (req, res) => {
  res.send('HI');
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
