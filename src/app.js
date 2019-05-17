const express = require('express');
// require('./db/mongoose');

const app = express();
const PORT = process.env.port || 5000;

app.use(express.json());

app.get('', (req, res) => {
  res.send('HI');
});

app.post('/users/login', async (req, res) => {
  setTimeout(() => {
    res.status(201).send({
      login: 'success'
    });
  }, 4000);

});

app.post('/users/signup', async (req, res) => {
  res.send({
    signup: 'success'
  });
});

app.get('/api/customers', (req, res) => {
  const customers = [
    {id: 1, firstName: 'John', lastName: 'Doe'},
    {id: 2, firstName: 'Brad', lastName: 'Traversy'},
    {id: 3, firstName: 'Mary', lastName: 'Swanson'},
  ];

  res.json(customers);
});

app.listen(PORT, () => {
  console.log(`Server is up on port ${PORT}`);
});
