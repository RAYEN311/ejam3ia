const express = require('express')
const homeroutes = express.Router()


homeroutes.get('/TN' , (req , res)=>{
    res.render('main_teams_page')
})
homeroutes.get('/TN/search' , (req , res)=>{
    let search_pram = req.query.search;
    res.render('search_page' ,{ word : search_pram})
})


module.exports = homeroutes