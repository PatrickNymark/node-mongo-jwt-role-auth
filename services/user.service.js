const User = require('../models/User');

module.exports = {
  getByUsername,
  getById,
  getAll
}

/**
 * Get a user by username.
 * @param username a string value that represents user's username.
 * @returns A Promise or exception.
 */
async function getByUsername(username) {
  return await User.find({ name: username }).select('-password') 
}

/**
 * Get user by id
 * @param id a string value that represents user's id.
 * @returns A Promise or exception
 */
async function getById(id) {
  return await User.findById(id).select('-password');
}

/**
 * Get all users
 * @returns A Promise or exception
 */  
async function getAll() {
  return await User.find().select('-password');
}


