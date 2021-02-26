const mongoose = require("mongoose");

const eventsSchema = new mongoose.Schema({
    Country: {
        type: String,
        required: false
    }, 
    State:{
        type: String,
        required: false
    },   
    CityName:{
        type: String,
        required: false
    }, 
    PostedBy :{
        type: String,
        required: false
    },
    Chapter :{
        type: String,
        required: false
    },
    FromDate:{
        type: String,
        required: false
    },
    ToDate:{
        type: String,
        required: false
    },
    Title :{
        type: String,
        required: false
    },
    Description  :{
        type: String,
        required: false
    },
    Image  :{
        type: String,
        required: false
    },  
    banner  :{
        type: String,
        required: false
    }, 
    ExternalLinks:{
        type: String,
        required: false
    },
    Attachments :{
        type: String,
        required: false
    }, 
    Venue :{
        type: String,
        required: false
    },
    Cost :{
        type: String,
        required: false
    },
    CreatedOn  :{
        type: String,
        required: false
    },
    UpdatedOn  :{
        type: String,
        required: false
    },
    status  :{
        type: String,
        required: false
    },
    offset  :{
        type: String,
        required: false
    }
})
module.exports = new mongoose.model('events',eventsSchema);
