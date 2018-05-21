const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
    name: {
        type: String,
        // The value of required gets logged if an attempt is made to create a Tenant document
        // without specifying a name ...
        required: "Name cannot be blank" 
                                        
    },
    unit: {
        type: mongoose.Schema.Types.ObjectId, // When creating a Tenant document
        // one of the params passed to create interface will be 
        // the Id of the appropriate Unit document. 
        
        //required: "All tenants must be associated with a unit."
        
    },
    start_date: {
        type: Date, 
        default: Date.now() // This 'default' option works as expected
    }
})

const Tenant = mongoose.model('Tenant', tenantSchema);

module.exports = Tenant;