const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();
// const ejs = require('ejs');
// const router = require('./routes/exerciseroute');
// const path = require('path');
// const server = express();
// const MONGO_PASS = process.env.DB_PASSWORD;

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.ATLAS_URI;

mongoose
.connect(uri, {
    useNewUrlParser: true, useUnifiedTopology: true
})
    .then(() => {
        console.log('We are connected to MongoDB')
        
    })

 const exercisesRouter = require('./routes/exercises');
 const usersRouter = require('./routes/users')

 app.use('/exercises', exercisesRouter);
 app.use('/users', usersRouter);



app.listen(PORT, () => {
    console.log(`Server is up on port ${PORT}`);
});