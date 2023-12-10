import express, {Express, Application, Request, Response} from "express";
import multer, {Multer} from "multer";
import dotenv from "dotenv";

dotenv.config();

const app: Application = express();

app.set("port", process.env.PORT || 4000);

app.get("/",(req:Request, res: Response)=> {
    res.send("Root Router");
})

app.listen(app.get("port"), ()=>{
    console.log("start running server: ",app.get("port"));
})



