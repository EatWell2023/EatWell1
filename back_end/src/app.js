const express = require("express");
const app = express();
const db=require('./database/db')
// console.log(db.conn());
const port = process.env.PORT || 3030;


app.use(express.json());
app.use('/',require('./routes/index'))


app.listen(port, () =>{
    console.log('Server at port 3030');
})