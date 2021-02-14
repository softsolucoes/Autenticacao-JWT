require('dotenv').config();
const express = require('express');
const app = express();
const userRauter = require('./routes/userRouter');
const adminRauter = require('./routes/adminRouter');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_CONNECTION_URL,
     {useNewUrlParser:true,
     useUnifiedTopology:true},
     (error) => {
         if(error){
            console.log(error);
         }else{
            console.log('Mongo connect');
         }
     })

app.use('/user', express.json(), userRauter);

app.use('/admin', express.json(), adminRauter)

app.listen(process.env.PORT, () => {
    console.log(`server running`);
})