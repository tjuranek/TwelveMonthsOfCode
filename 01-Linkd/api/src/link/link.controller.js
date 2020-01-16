var Link = require('./link.dao');

exports.createLink = function(req, res, next) {
    var link = {
        originalUrl: req.body.originalUrl,
        linkdUrl: req.body.linkdUrl,
        dateCreate: Date.now()
    };
     Link.create(link, function(err, link) {
         if (err) {
             res.json({
                error: err
             });
         }

         res.json({
             message: 'Link created successfully'
         });
     });
};

exports.getLinks = function(req, res, next) {
    Link.get({}, function(err, links) {
        if (err) {
            res.json({
                error: err
            });
        }

        res.json({
            links: links
        });
    });
};