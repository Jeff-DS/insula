const mongoose = require('mongoose');

const unitSchema = new mongoose.Schema({
    building: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Building"
    },
    number: {
        type: Number
    },
    rentals: {
        type: [mongoose.Schema.Types.ObjectId],
        ref: "Rental"
    }
})

const Unit = mongoose.model('Unit', unitSchema);

export default Unit;