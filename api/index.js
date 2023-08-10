import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js"
const app = express();
dotenv.config();

const connect = async () => {
    try{
        await mongoose.connect(process.env.MONGO);
        console.log("Connected to mongoDB")
    } catch(error) {
        // handleError(error);
        throw error;
    }
};
app.get("/",(req,res)=>{
res.send("hello first request")
})

// middlewares
app.use("/api/auth",  authRoute)
app.use("/api/users",  usersRoute)
app.use("/api/rooms",  roomsRoute)
app.use("/api/hotels",  hotelsRoute)


app.listen(8800, () => {
    connect()
    console.log("Connected to backend. ")
});

