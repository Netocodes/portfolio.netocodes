const express = require('express')
const router = express.Router()

router.get('/ide', (req, res) => {
    res.status(200).send("Active like a mad man")

})
module.exports = router