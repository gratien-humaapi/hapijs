
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema ({
    name: String,
    firstName: String,
});

module.exports = mongoose.model('User', UserSchema);