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





//////////////////////////  single part////////////////////////////////////////////



// CLIENT REQUIRING THE INTRODUCTION PAGE

app.get('/',( req ,res )=>{
    res.render('introduction');
})

// CLIENT REQUIRING THE IMAGES FROM THE SERVER

app.get('/img/:img_name',(req ,res)=>{
    // res.render('introduction');
    let name = req.params.img_name ;
    res.sendFile( __dirname +'/public/media/imgs/icons/' + name)
})
app.get('/cover/:team/:img_name',(req ,res)=>{
    // res.render('introduction');
    let name = req.params.img_name ;
    let team = req.params.team;
    res.sendFile( __dirname +'/public/media/imgs/covers/'+team+'/' + name)
})
app.get('/tn/:team/mp3/:pic_name',(req ,res)=>{
    // res.render('introduction');
    let piece = req.params.team ;
    let name = req.params.pic_name ;
    res.sendFile( __dirname +'/public/media/mp3/'+ piece +'/' + name)
})
app.get('/favicon' , (req ,res)=>{
res.sendFile(__dirname +'/public/media/imgs/favicon.png')
})



/////////////////////////////////////////////////////////////////






const homeRouter = require('./routes/home')
app.use('/', homeRouter)


const team_route = require('./routes/teams.js')

app.use('/tn', team_route)


// listening the http request from the frontend
app.listen(port, () => console.log(`BRH Server listening on http://localhost:${port}/main_tn`))

/////////////////////////////////////////////////////////////////

