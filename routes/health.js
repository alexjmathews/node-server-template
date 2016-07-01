/*
 * .js
 * fusiform.authentication -
 * Notes:
 *  -
 * Issues:
 *  -
 */

// ### Export Express routes.
module.exports = function(app, router) {

    router.get('/protected_status', app.get('jwtCheck'), function(req, res) {
        console.log(req);
        res.status(200);
        res.json({
            success: true,
            message: "Healthy :3"
        });
    });

    router.get('/status', function(req, res) {
        console.log(req);
        res.status(200);
        res.json({
            success: true,
            message: "Healthy :3"
        });
    });

    router.post('/post', function(req, res) {
        console.log(req.body)
        res.status(200);
        res.json({
            success: true,
            message: "hello world",
            body:req.body
        });
    });

    router.post('/fail', function(req, res) {
        console.log(req.body)
        res.status(400);
        res.json({
            success: false,
            message: "hello world"
        });
    });
    
    return router;
}
