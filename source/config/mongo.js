require("dotenv").config()
const mongoose = require('mongoose');

const dbConnect = () => {
    const DB_URI = process.env.DB_URI;

    const mongooseArgs = {
        useNewUrlParser: true,
    }

    const callback = (err, res) => {
        if(!err){
            console.log("****** Conexion exitosa *******")
        }else{
            console.log("****** error en la conexion *****")
            console.log(err)
        }
    }


    mongoose.connect(DB_URI,mongooseArgs,callback)
}

module.exports = dbConnect;