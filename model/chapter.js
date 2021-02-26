const mongoose = require("mongoose");

const chapterSchema = new mongoose.Schema({
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
    ChapterName:{
        type: String,
        required: false
    },
    Address:{
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
    ContactPerson  :{
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
    chapterlogo  :{
        type: String,
        required: false
    },
    status  :{
        type: String,
        required: false
    }
})
module.exports = new mongoose.model('chapter',chapterSchema);
