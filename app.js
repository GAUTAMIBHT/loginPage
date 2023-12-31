import express from "express";
import userRouter from "./routes/user.js"
import cookieParser from "cookie-parser";
import { errorMiddleware } from "./middlewares/error.js";
import cors from "cors";
import {config} from "dotenv";



export const app = express();

config({
    path:"./data/config.env"
});

//middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:[process.env.FRONTEND_URL],
    methods:["GET","POST","PUT","DELETE"],
    credentials:true,
}))
app.use("/api/v1/users",userRouter);


app.get("/",(req,res)=>{
    res.send("hello")
})

//using error middleware
app.use(errorMiddleware);


