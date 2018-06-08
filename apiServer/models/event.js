const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
    type: {
        type: String,
        required: "Type cannot be blank" 
    },
    description: {
        type: String,
        maxLength: 250
    },
    start_date: {
        type: Date, 
        default: Date.now()
    },
    end_date:{
        type: Date
    }
})

const Event = mongoose.model('Event', eventSchema);

export default Event;