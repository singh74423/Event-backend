import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import bookRoute from "./Routes/book.route.js"
import cors from "cors"

import userRoute from "./Routes/user.route.js"
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4001;
const URI = process.env.MongoDBURI;

// Connect to Mongodb
try{
       mongoose.connect(URI,{
        useNewUrlParser: true,
        useUnifiedTopology: true
       });
       console.log(" Conneted To mongodb Sucess");
       
}
catch (err) 
{
console.log( "Error: ",err);

}


//defining routes 

app.use("/book",bookRoute);
app.use("/user",userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
