const express = require('express');
const app = express();

//dotenv
require('dotenv').config();

//mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://bhromor_abhijit1:abhijiT13sk4@bhromorcluster.ebxjn8f.mongodb.net/bhromor_abhijit1');

mongoose.connection.once('open',()=>{
    console.log('mongoose connected');
});

mongoose.connection.on('error', (error) => {
    console.log('Mongoose connection failed ', error); // Fix: Include the error parameter
});


//user route
const userRoute = require('./route/UserRoute');
app.use('/api',userRoute);

//notification route
const notifyRoute = require('./route/NotificationRoute');
app.use('/api',notifyRoute);

/*
//self-test-api's
app.use('/',(req,res)=>{
    res.send('Home Page');
})
*/

//server
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on ${process.env.PORT}`);
});