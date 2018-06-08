const mongoose = require('mongoose');

const buildingSchema = new mongoose.Schema({
    address: {
        type: String,
        required: "Address cannot be blank" 
                                        
    },
    units: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "Unit"
        }
    ]
})

const Building = mongoose.model('Building', buildingSchema);

export default Building;