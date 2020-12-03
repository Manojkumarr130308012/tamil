const mongoose = require("mongoose");

const memberSchema = new mongoose.Schema({
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
    Gender:{
        type: mongoose.Schema.ObjectId,
        required: false
    }, 
    MembershipType :{
        type: mongoose.Schema.ObjectId,
        required: false
    },
    Chapter :{
        type: mongoose.Schema.ObjectId,
        required: false
    },
    Category :{
        type: mongoose.Schema.ObjectId,
        required: false
    },
    Name:{
        type: String,
        required: false
    },
    DOB:{
        type: String,
        required: false
    },
    Email :{
        type: String,
        required: false
    },
    Mobile  :{
        type: String,
        required: false
    },
    bussinessname  :{
        type: String,
        required: false
    }, 
    Address:{
        type: String,
        required: false
    },
    pincode :{
        type: String,
        required: false
    }, 
    // ProfilePicture :{
    //     type: String,
    //     required: false
    // }, 
    // BusinessLogo :{
    //     type: String,
    //     required: false
    // },
    Products :{
        type: String,
        required: false
    },
    Keywords :{
        type: String,
        required: false
    },
    Website :{
        type: String,
        required: false
    },
    Interests :{
        type: String,
        required: false
    },
    SocialMediaLinks  :{
        type: String,
        required: false
    },
    ValidUpto  :{
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
    }
})
module.exports = new mongoose.model('member',memberSchema);
