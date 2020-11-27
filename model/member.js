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
        required: true
    },
    DOB:{
        type: String,
        required: true
    },
    Email :{
        type: String,
        required: true
    },
    Mobile  :{
        type: String,
        required: true
    },
    BusinessName  :{
        type: String,
        required: true
    }, 
    Address:{
        type: String,
        required: true
    },
    Pincode :{
        type: String,
        required: true
    }, 
    ProfilePicture :{
        type: String,
        required: true
    }, 
    BusinessLogo :{
        type: String,
        required: true
    },
    Products :{
        type: String,
        required: true
    },
    Keywords :{
        type: String,
        required: true
    },
    Website :{
        type: String,
        required: true
    },
    Interests :{
        type: String,
        required: true
    },
    SocialMediaLinks  :{
        type: String,
        required: true
    },
    ValidUpto  :{
        type: String,
        required: true
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
module.exports = new mongoose.model('chapter',memberSchema);
