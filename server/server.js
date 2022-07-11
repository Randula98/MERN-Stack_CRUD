const express = require("express");
const app = express();
const cors = require("cors");

require("dotenv").config({ path: ".env" });
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use(require("./routes/record"));

//get driver connection
const dbo = require("./db/conn");

app.listen(port , () =>{
    //perform a database connection when the server is started
    dbo.connectToServer(function (err){
        if(err) console.error(err);
    });

    console.log("............")
    console.log(`Server running on port ${port}`);
    console.log(cors);
});