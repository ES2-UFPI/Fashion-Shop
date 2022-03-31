const express = require("express")
const app = express();
const mongoose = require("mongoose")
const dotenv = require("dotenv");

dotenv.config();

mongoose
.connect(process.env.MONGO_URL)
.then(() => console.log("Conexão com o DB bem sucedida!"))
.catch((err) => {
    console.log(err);
});

app.listen(5000, () => {
    console.log("Backend server is running!");
});