const mongoose = require("mongoose");

const bookSchema=new mongoose.Schema({
    
    title: String,
    isbn: String,
    pageCount: Number,
    publishedDate: mongoose.Schema.Types.Mixed,
    thumbnailUrl: String,
    longDescription: String,
    status: String,
    authors: [{
    type: String
}],
    categories:[{
    type: String
}],
},{ collection : 'books' })

module.exports=mongoose.model("books",bookSchema);