// requiring the framework express
const express = require('express')
const port = process.env.PORT || 2750
// process.env.NODE_ENV = 'production';
// console.log(process.env.NODE_ENV);
// console.log(process.argv[2]);
const app = express()

// biew engine used 

app.set('view engine' , 'ejs')
app.use(express.static('./public'))
app.use(express.urlencoded({extended : true}))

// get methode for the initial page 
// use router in our application (methode / best one)

app.get('/',( req ,res )=>{
    res.render('introduction');
})

const homeRouter = require('./routes/home')
app.use('/', homeRouter)

const teams_route = require('./routes/teams.js')
app.use('/tn', teams_route)
app.use('/search' , teams_route)

// listening the http request from the frontend
app.listen(port, () => console.log(`BRH Server listening on http://localhost:${port}/tn`))



