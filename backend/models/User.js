const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const config = require('../config/db');

const UserSchema = mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    savedNews: {
        type: Array
    }
})

const User = module.exports = mongoose.model('User', UserSchema);

module.exports.getUserByUsername = function (username, callback) {
    User.findOne({ username: username }, callback);
  };

module.exports.addUser = function (newUser, callback) {
    User.getUserByUsername(newUser.username, (err, user) => {
        if (err) throw err;
        bcrypt.genSalt(10, (err, salt) => {
            if (err) throw err;
            bcrypt.hash(newUser.password, salt, (err, encrypted) => {
                if (err) throw err;
                newUser.password = encrypted;
                newUser.save(callback);
            });
        });
    });
};

module.exports.comparePassword = function (candidatePassword, hashedPassword, callback) {
    bcrypt.compare(candidatePassword || "", hashedPassword, (err, isMatch) => {
        if (err) throw err;
        callback(null, isMatch);
    });
};