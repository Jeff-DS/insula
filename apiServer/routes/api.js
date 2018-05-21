const express = require("express"),
    router = express.Router(),
    helpers = require("../helpers/apiHelpers.js");
 

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