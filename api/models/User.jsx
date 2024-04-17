const mongoose = require('mongoose');
const { type } = require('os');
const UserSchema = new mongoose.Schema({
  username: { type: String, required: true, min: 4, unique: true },
  password: { type: String, required: true, min: 6 },
});
const UserModel = mongoose.model('user', UserSchema);
module.exports = UserModel;
