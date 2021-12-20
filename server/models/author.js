const mongoose = require('mongoose');
const {Schema} = mongoose;

const authorSchema = new Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    books:{
        type:String,  
    }
})

module.exports = mongoose.model('Author', authorSchema)