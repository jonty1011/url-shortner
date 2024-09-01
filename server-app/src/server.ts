import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const port = 5001 || process.env.PORT 
const app = express();
app.get("/",(req,res)=>{
    res.send("Hello, World!");
});

app.listen(port, ()=>{
    console.log(`Server is Running on ${port}`);
    
})
