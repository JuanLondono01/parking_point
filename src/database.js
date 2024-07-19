const mongoose = require('mongoose');


const URI = process.env.MONGO_URI ? 
            process.env.MONGO_URI : 'mongodb://localhost:27017/test'


mongoose.connect(URI)
const connection = mongoose.connection


connection.once('open', ()=>{
    console.log('Database is connected');
})