const mongoose = require('mongoose');

const rentalSchema = new mongoose.Schema({
    unit: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Unit",
        required: true
    },
    tenants: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Tenant"
    },
    rent: {
        type: Number,
        required: true
    },
    start_date: {
        type: Date, 
        default: Date.now()
    },
    end_date:{
        type: Date
    }
})

const Rental = mongoose.model('Rental', rentalSchema);

export default Rental;