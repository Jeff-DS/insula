const mongoose = require("mongoose");
mongoose.set('debug', true);

// This line created the insula db when first run
mongoose.connect('mongodb://localhost/insula'); 

// Without this next line, we would get the following message: 
/*
    DeprecationWarning: Mongoose: mpromise (mongoose's default promise library)
    is deprecated, plug in your own promise library instead
*/
mongoose.Promise = Promise; // Plugs in ES6 Promises

// This is where we would require in and export 
// all of our models for comsumption by API routes ...
module.exports.Tenant =  require("./tenant"); // As an example