var jwt = require('jsonwebtoken');

module.exports = function() {
    var toExport = {};

    // JWT config and options
    var payload = {
        aud: "************************",
        scopes: {
            users: {
                actions: [
                    "create",
                    "update"
                ]
            }
        }
    };
    var secret = new Buffer('***************************', 'base64')
    var options = {
        algorithm: 'HS256'
    };


    toExport.AUTH_0_TOKEN = jwt.sign(payload, secret, options);
    toExport.AUTH_0_HEADER = 'Bearer ' + toExport.AUTH_0_TOKEN;
    toExport.AUTH_0_URLBASE = '**************************';
    toExport.JWT_OPTIONS = {
        secret: new Buffer('***************************', 'base64'),
        audience: '***************************',
        getToken: function fromHeaderOrQuerystring(req) {
            if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Basic') {
                return req.headers.authorization.split(' ')[1];
            } else if (req.headers.authorization && req.headers.authorization.split(' ')[0] === 'Bearer') {
                return req.headers.authorization.split(' ')[1];
            } else if (req.query && req.query.token) {
                return req.query.token;
            }
            return null;
        }
    };
    return toExport;

}
