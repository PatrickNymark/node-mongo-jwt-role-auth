const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service');
const authorize = require('../helpers/role-auth');

// routes
router.post('/user/register', registerUser);
router.post('/login', loginUser);
// staff
router.post('/staff/register', registerStaff);
module.exports = router;

function registerUser(req, res, next) {
  authService.registerUser(req.body)
    .then(user => res.json(user))
    .catch(err => next(err));
}

function loginUser(req, res, next) {
  authService.loginUser(req.body.email, req.body.password)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Username or password is incorrect' }))
    .catch(err => next(err))
}

function registerStaff(req, res, next) {
  authService.registerStaff(req.body)
    .then(staff => res.json(staff))
    .catch(err => next(err))
}