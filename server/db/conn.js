const { MongoClient } = require('mongodb');
require("dotenv").config({ path: ".config.env" });

const Db = process.env.REACT_APP_ATLAS_URL;
const client = new MongoClient(Db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

var _db;

module.exports = {
    connectToServer: function(callback){
        client.connect(function(err , db){
            //verify we got a good "db" object
            if(db)
            {
                _db = db.db("employees");
                console.log("Successfully connected to MongoDB");
            } 
        });
    },

    getDb: function(){
        return _db;
    },
};
