require('dotenv').config();
const express = require('express');
const addy = process.env.Addy || 5000;
const app  = express();

app.get('/', (req, res) => {
    res.send('Connected To the server   !');
})

app.listen(addy, () => {
    console.log(`Server is running on port ${addy}`);
})