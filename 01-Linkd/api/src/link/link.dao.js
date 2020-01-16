var mysql = require('mysql');
var linkSchema = require('./link.model');

linkSchema.statics = {
    create : function(data, cb) {
        var link = new this(data);
        link.save(cb);
    },

    get: function(query, cb) {
        this.find(query, cb);
    },

    update: function(query, updateData, cb) {
        this.findOneAndUpdate(query, {$set: updateData},{new: true} ,cb);

    },

    delete: function(query, cb) {
        this.findOneAndDelete(query, cb);
    }
};

var linkModel = mysql.model('Link', linkSchema);
module.exports = linkModel;