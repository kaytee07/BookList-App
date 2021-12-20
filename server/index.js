const express = require('express');
const app = express();
const {graphqlHTTP} = require('express-graphql');
const schema = require('./Schema/schema');
const mongoose = require('mongoose');
const cors = require('cors')
require("dotenv").config();
const dbUrl = process.env.DB_URL;
mongoose.connect(dbUrl)

db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', ()=>{
    console.log('database connected')
})


const PORT = 5000;

app.use(cors())

app.use('/graphql',graphqlHTTP({
    schema,
    graphiql:true
}));








app.listen(PORT, ()=>{
    console.log(`SERVER IS LIVE ON PORT ${PORT}`)
})