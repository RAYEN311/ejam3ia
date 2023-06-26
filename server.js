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

// use router in our application (methode / best one)



// CLIENT REQUIRING THE INTRODUCTION PAGE

app.get('/',( req ,res )=>{
    res.render('introduction');
})

// CLIENT REQUIRING THE IMAGES FROM THE SERVER

app.get('/img/:img_name',(req ,res)=>{
    // res.render('introduction');
    let name = req.params.img_name ;
    res.sendFile( __dirname +'/public/media/imgs/' + name)
})

const homeRouter = require('./routes/home')
app.use('/', homeRouter)


const team_route = require('./routes/teams.js')

app.use('/tn', team_route)


// listening the http request from the frontend
app.listen(port, () => console.log(`BRH Server listening on http://localhost:${port}/main_tn`))



