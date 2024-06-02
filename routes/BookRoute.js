const booksRouter=require('express').Router();
const {getAllBooks}=require('../controller/booksController');
booksRouter.get("/allbooks",getAllBooks);

module.exports=booksRouter;