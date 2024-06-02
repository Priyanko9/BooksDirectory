const mongoose = require("mongoose");

const bookSchema=new mongoose.Schema({
    name :String,
    author :String,
    date : String
},{ collection : 'books' })

module.exports=mongoose.model("books",bookSchema);