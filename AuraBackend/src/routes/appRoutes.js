const express = require('express')
const route = express.Router();
route.get('/', (req, res) => {
    res.status(200).json({mssg: "Welcome to Netochukwu's Server"})

})

route.post('/', (req, res) => {
const {email} = req.body;

if(email === null){
    return(
        res.status(400).json({err: "No Email detected"})   
     )
}
console.log(email)
res.status(200).json({mssg: `Welcome On-Board ${email}`})

})
module.exports = route