const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    username:{
        type:String,
        required :true
    },
    useremail:{
        type:String,
        required:true,
        unique:true
    },
    usergender:String,
    userstatus:String
})


const Userdb = mongoose.model('userdb',schema)

module.exports = Userdb
