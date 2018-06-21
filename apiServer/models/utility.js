const mongoose = require('mongoose');

const utilitySchema = new mongoose.Schema({
    type: {
        type: String,
        enum: ["electricity", "gas", "water", "garbage", "internet"]
    }
})

const Utility = mongoose.model('Utility', utilitySchema);

export default Utility;