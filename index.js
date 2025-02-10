require('dotenv').config();
const express = require('express');
const { resolve } = require('path');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');


const app = express();
const port = 3010;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
    console.log('Mongo DB connected')
    })
    .catch((error)=>{
        console.error('Error connecting to DataBase')
    })


app.use(express.static('static'));
app.use(userRoutes)

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
