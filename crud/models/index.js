var mongoose = require('mongoose');

var newSchema = mongoose.Schema({
    name: String,
    song: String,
    band: String
});

module.exports = mongoose.model('Singer', newSchema);   