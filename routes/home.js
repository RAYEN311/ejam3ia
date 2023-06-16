const express = require('express')
const homeroutes = express.Router()


homeroutes.get('/' , (req , res)=>{
    res.render('index')
})


module.exports = homeroutes