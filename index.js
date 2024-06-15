const express = require("express");
const { connectDb } = require("./db");
const notesRouter = require("./route/Notes")
const cors = require("cors")
require('dotenv').config();


const port = process.env.PORT;
const app = express();


app.use(express.json());
app.use(cors())
connectDb();


app.use("/notes",notesRouter)

app.listen(port,() =>{
    console.log(`App is running on port ${port}`)
})