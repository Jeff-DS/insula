const mongoose = require('mongoose');

const tenantSchema = new mongoose.Schema({
    name: {
        type: String,
        // The value of required gets logged if an attempt is made to create a Tenant document
        // without specifying a name ...
        required: "Name cannot be blank" 
                                        
    },
    unit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Unit"
        
    },
    start_date: {
        type: Date, 
        default: Date.now() // This 'default' option works as expected
    }
})

const Tenant = mongoose.model('Tenant', tenantSchema);

export default Tenant;