require('dotenv').config();
 const express = require('express');
 const routes = require('./routes/appRoutes');
 const app = express();

app.get('/', routes)


app.listen(process.env.Addy, () => {
    console.log(`server is live at ${process.env.Addy}`)
})