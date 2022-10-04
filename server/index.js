const express = require('express');
const cors = require('cors');

const {connectToMongoDB} = require('./database/config');

const app = express();
connectToMongoDB();


app.use(cors());
app.use(express.json());

// app.use('exercises')

app.listen(3001, (() => console.log('listening on port 3001')));


