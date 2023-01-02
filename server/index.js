import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";



const app = express();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.url({limit: "30mb", extended: true}));
app.use(cors());

app.get("/", (req, res)=>{
    res.send("coding");
});

const PORT = process.env.PORT || 5000;

