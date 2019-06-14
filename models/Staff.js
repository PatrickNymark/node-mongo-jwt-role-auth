const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const StaffSchema = new Schema({
  gender: {
    type: String
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
}, {
  timestamps: true
});

module.exports = Staff = mongoose.model('staff', StaffSchema);