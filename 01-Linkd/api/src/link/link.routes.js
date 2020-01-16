var Link = require('./link.controller');

module.exports = function(router) {
    router.post('/create', Link.createLink);
    router.get('/get', Link.getLinks);
};