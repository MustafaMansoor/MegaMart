const express = require('express');
const app = express();
const router = require('../routes/items');
const connectDB = require('../db/connect');
require('dotenv').config();

app.use(express.json());
app.use('/items', router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Connected to database...');
    app.listen(3000, () => console.log('Listening on port 3000...'));
  } catch (error) {
    console.log(error);
  }
};

start();
