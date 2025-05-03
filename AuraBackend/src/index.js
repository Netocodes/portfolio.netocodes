require('dotenv').config();
const express = require('express');
const addy = process.env.Addy || 5000;
const app  = express();
import Routes from './routes/appRoutes'
app.use('/', Routes)
app.get('/', (req, res) => {
    res.send('Connected To the server   !');
})

app.listen(addy, () => {
    console.log(`Server is running on port ${addy}`);
})