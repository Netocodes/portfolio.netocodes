const express = require('express')
const route = express.Router();

route.get('/check-info', (req, res) => {
    res.status(200).send("Active like a mad man")
})
module.exports = route