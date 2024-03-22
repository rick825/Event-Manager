// server/server.js
const express = require('express');
const morgan = require("morgan");
const bodyparser = require("body-parser");
const dotenv = require("dotenv");
const path = require('path');
const app = express();


const result = dotenv.config({path : './server/.env' });
if (result.error) {
    throw result.error;
}

const PORT = process.env.PORT;
const connectDB = require('./db/db');

// middleware
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended:true}));


// Serve static files from the React app
app.use(express.static(path.join(__dirname, '../build')));
connectDB();

// API endpoint
app.get('/api/test', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.use('/',require('./routes/routes'));


app.listen(PORT, () => {
  console.log(`Server listening on port http://localhost:${PORT}`);
});