const booksRouter=require('express').Router();
const {getAllBooks,addBookById,updateBookById,deleteBook,bulkUpload}=require('../controller/booksController');
booksRouter.get("/allbooks",getAllBooks);
booksRouter.post("/addBook",addBookById);
booksRouter.put("/updateBook",updateBookById)
booksRouter.delete("/deleteBook",deleteBook);
booksRouter.post("/bulkUpload",bulkUpload);
module.exports=booksRouter;