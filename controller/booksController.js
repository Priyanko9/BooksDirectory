const bookModel = require("../model/Book");

const getAllBooks=async (req,res)=>{
    try{
        
    const books=await bookModel.find({});
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

module.exports={
    getAllBooks
}