const express=require('express');
require('dotenv').config();

const app = express();
const dbConfig = require("./config/dbConfig");
const booksRouter=require("./routes/BookRoute");
console.log(dbConfig);
const books=[];
app.use(express.json());
app.use("/book",booksRouter);
app.get("/", (req,res)=>{
    res.send(books);
});


  app.listen(process.env.PORT, () => {
    console.log(`server is listening to port no ${process.env.PORT}`);
  });