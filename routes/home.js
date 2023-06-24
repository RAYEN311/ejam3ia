const express = require('express')
const homeroutes = express.Router()

homeroutes.get('/TN' , (req , res)=>{
    res.render('main_teams_page')
})
homeroutes.get('/search' , (req , res)=>{
    let search_pram = req.query.Search_query;
    res.render('search_page' ,{ word : search_pram.toLowerCase()})
})

module.exports = homeroutes