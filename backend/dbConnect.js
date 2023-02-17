'use strict';
require('dotenv').config();
const Mongoose = require('mongoose');
console.log(process.env.DB_URI);
const uri = process.env.DB_URI;  
const mongooseOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true
};
//Connect to MongoDB
Mongoose.connect(uri, mongooseOptions, function (err) {
    if (err) {
        console.log("DB Error: ", err);
        process.exit(1);
    } else {
        console.log('MongoDB Connected');
    }
});
// Get the default connection
const db = Mongoose.connection;
// Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));
exports.Mongoose = Mongoose;