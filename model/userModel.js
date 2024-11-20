const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {type: String, requred: true},
    email: {type: String, requred: true},
    password: {type: String, requred: true},
}, {timestamps: true});

module.exports = mongoose.model('User',userSchema);
