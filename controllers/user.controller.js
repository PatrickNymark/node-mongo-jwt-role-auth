const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');
const authorize = require('../helpers/role-auth');

// routes
router.get('/find/:username', getByUsername);
router.get('/id/:id', getById)
router.get('/all', authorize('staff'), getAll);
module.exports = router;

/**
 * Get a user by username.
 * @param username a string value that represents user's username.
 * @returns A Promise or exception.
 */
function getByUsername(req, res, next) {
  userService.getByUsername(req.body.username)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'Name does not exist'}))
    .catch(err => next(err));
}

function getById(req, res, next) {
  userService.getById(req.params.id)
    .then(user => user ? res.json(user) : res.status(400).json({ message: 'User not found'}))
    .catch(err => next(err))
}

function getAll(req, res, next) {
  userService.getAll()
    .then(users => users ? res.json(users) : res.status(400).json({ message: 'No users found'}))
    .catch(err => next(err))
}