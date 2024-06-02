const bookModel = require("../model/Book");
const bookList=require("../BooksJson");

const getAllBooks=async (req,res)=>{
    try{
        
    const books=await bookModel.find();
    console.log("testing:",books);
    res.send({
        message:"successful",
        data:books,
        success:true
    })
    }
    catch(err){
        res.send({
            message:err.message,
            success:false
        })
    }
}

const addBookById=async(req,res)=>{
    try {
        const newBook = new bookModel(req.body);
        await newBook.save();
        res.send({
          success: true,
          message: "Book Added SuccessFully",
        });
      } catch (err) {
        res.send({
          success: false,
          message: err.message,
        });
      }
}

const updateBookById=async(req,res)=>{
    try {
        await bookModel.findByIdAndUpdate('665c75ca43700bc732c3084b', req.body);
        res.send({
          success: true,
          message: "Book Updated Successfully",
        });
      } catch (err) {
        res.send({
          success: false,
          message: err.message,
        });
      }
    
}

const deleteBook=async(req,res)=>{
    try {
        await bookModel.deleteOne({name:req.body.name});
        res.send({
          success: true,
          message: "Book deleted Successfully",
        });
      } catch (err) {
        res.send({
          success: false,
          message: err.message,
        });
      }
}

const bulkUpload=async(req,res)=>{
    try{
        await bookModel.insertMany(bookList);
        res.send({
            success: true,
            message: "Books added Successfully",
          });
    } catch (err) {
        res.send({
            success: false,
            message: err.message,
          });
    }
    
}

module.exports={
    getAllBooks,
    addBookById,
    updateBookById,
    deleteBook,
    bulkUpload
}