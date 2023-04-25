const mongoose = require('mongoose');

mongoose.set('strictQuery',false);
/*
const conn = ()=>{
    mongoose.connect('mongodb://tathagato123:tatha1234@cluster0.zyldmsb.mongodb.net/Eatwell').then(()=> {
        console.log("CONNECTED");
    }).catch((err) =>{
        console.log(err)
    })
}
*/
mongoose.connect('mongodb+srv://tathagato123:tatha1234@cluster0.zyldmsb.mongodb.net/Eatwell')
const db=mongoose.connection;
db.once('open',()=>{
    console.log("Connected to db");
})

 module.exports =db
// module.exports =conn;