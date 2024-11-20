const mongoose = require('mongoose');

const gallerySchema = new mongoose.Schema({
    title: {type: String, requred: true},
    name: {type: String, requred: true},
    description: {type: String, requred: true},
}, {timestamps: true});

module.exports = mongoose.model('gallery',gallerySchema);
