var mysql = require('mysql');
var Schema = mysql.Schema;

var linkSchema = new Schema({
    ID: {
        type: Number,
        unique: true,
        required: true
    },
    LinkedUrl: {
        type: String, 
        unique: false,
        required: true
    },
    OriginalUrl: {
        type: String,
        unique: true,
        required: true
    },
    DateCreated: {
        type: Date,
        unique: false,
        required: true
    }
});

module.exports = linkSchema;