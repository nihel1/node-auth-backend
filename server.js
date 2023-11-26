const express = require('express');
const connectDB = require('./config/connectDB');
const user = require('./routes/user');


const app = express();
app.use(express.json()); 
app.use('/user',user) ;
connectDB(); 
app.listen(8000,err=>err?console.error():console.log('server runnig on port 8000'));