const express = require("express"),
    router = express.Router(),
    helpers = require("../helpers/apiHelpers.js");
 
router.post('/login', (req, res) => {
    const { username, password } = req.body;
    /*
    TODO: authenticate, generate session token,
    and get user's roles (tenant/landlord)
    */
    if (!authenticate(username, password)) {
        res.send('Login failed');
    }
    const token = generateToken();
    const roles = [];
    // ^ define this stuff
    res.cookie('sessionId', token, {
        'httpOnly': true,
        'secure': true,
        'maxAge': 1800000 // 30 min
    });
    res.send({
        token: token,
        roles: []
    });
});

router.route('/Tenant')
    .get(helpers.getDocuments("Tenant"))
    .post(helpers.createDocument("Tenant"));

router.route('/Tenant/:id')
    .get(helpers.retrieveOne("Tenant"))
    .put(helpers.updateDocument("Tenant"))
    .delete(helpers.deleteDocument("Tenant"));

// ... And so on for each of the models the app needs to CRUD, e.g. :

/*
router.route('/Unit')
    .get(helpers.getDocuments("Unit"))
    .post(helpers.createDocument("Unit"));

router.route('/Unit/:id')
    .get(helpers.retrieveOne("Unit"))
    .put(helpers.updateDocument("Unit"))
    .delete(helpers.deleteDocument("Unit"));
*/

module.exports = router;