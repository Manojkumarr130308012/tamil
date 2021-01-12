const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema({
    Country: {
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    State:{
        type: mongoose.Schema.ObjectId,
        required: false
    },
    region:{
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    district:{
        type: mongoose.Schema.ObjectId,
        required: false
    },   
    CityName:{
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    PostedBy :{
        type: mongoose.Schema.ObjectId,
        required: false
    },
    Chapter :{
        type: mongoose.Schema.ObjectId,
        required: false
    },
    FromDate:{
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
    CreatedOn  :{
        type: String,
        required: false
    },
    postedby  :{
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
    }
})
module.exports = new mongoose.model('news',newsSchema);
