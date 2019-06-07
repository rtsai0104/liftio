const express = require('express');
// const multer = require('multer');
const router = new express.Router();
const auth = require('../middleware/auth');

router.post('/users', async (req, res) => {

  const user = new user(req.body);
  try {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({ user, token });
  } catch (e) {
    res.status(400).send(e);
  }

});

router.post('/users/login', async (req, res) => {

  try {
    const user = await User.findByCredentials(req.body.email, req.body.password);
    const token = await user.generateAuthToken();
    res.send({ user: user, token });
  } catch (e) {
    res.status(400).send({ error: 'Unable to log in' });
  }

});

router.post('/users/logout', auth, async (req, res) => {

  try {
    req.user.tokens = req.user.tokens.filter((token) => token.token !== req.token );
    await req.user.save();
    res.send({ msg: 'Succesfully logged out' });
  } catch (e) {
    res.status(500).send({ error: 'Error logging out' });
  }

});

router.post('/users/logoutAll', auth, async (req, res) => {

  try {
    req.user.tokens = []
    await req.user.save();
    res.send({ msg: 'Succesfully logged out of all accounts' });
  } catch (e) {
    res.status(500).send({ error: 'Error logging out' });
  }

});

router.get('/users', async (req, res) => {

  if (req.header('Tsai') !== 'Tsai') {
    return res.status(401).send({ error: 'Invalid' });
  }

  try {
    const users = await User.find({});
    res.send(users);
  } catch (e) {
    res.status(500).send(e);
  }

});

router.get('/users/me', auth, async (req, res) => {

  res.send(req.user);
});

router.patch('/users/me', auth, async (req, res) => {
  const updates = Object.keys(req.body);
  const allowedUpdates = ['name', 'email', 'password', 'age'];
  const isValidOperation = updates.every((property) => allowedUpdates.includes(property));

  if (!isValidOperation) {
    return res.status(400).send({ error: "Invalid property" });
  }

  try {
    updates.forEach((update) => req.user[update] = req.body[update] );
    await req.user.save();
    res.send(req.user);
  } catch (e) {
    res.status(400).send(e);
  }

});

router.delete('/users/me', auth, async (req, res) => {

  try {

    await req.user.remove();
    res.send(req.user);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;