const express = require('express');
const {ObjectId} = require('mongodb');
const { connectToDb, getDb } = require('./db');
// const bodyParser = require('body-parser');
// var cors = require('cors');

// const Quote = require('inspirational-quotes');
// console.log(Quote.getQuote());
// const test = require('./test.json');

const app = express();
// app.use(cors());
app.use(express.json());
// app.use(bodyParser);



//db connection
let db

connectToDb((err) => {
    if(!err) {
        app.listen(8000, () => {
            console.log('listening to port 8000')
        });
        db = getDb(); 
    }
})

// const test = {name:'Farhad', surname:'Fallahshabani'};

app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });







//to get all the documents
app.get('/packages', (req,res) => {

    const page = req.query.ak || 0;
    const pkgsPerPage = 3;

    let packagePlans = []

        db.collection('packages')
        .find()
        .skip(page * pkgsPerPage)
        .limit(pkgsPerPage)
        .forEach(packagePlan => packagePlans.push(packagePlan))
        .then(() => {
            res.status(200).json(packagePlans) //sends the res to client
        })
        .catch(()  => {
            res.status(500).json({error: 'Could not fetch the documents '})
        })  

    }); 

    //to post a document
    app.post('/packages', (req,res) => {
        const pkg = req.body
        // console.log("pkg:",pkg, typeof(pkg))
        console.log(pkg)
        
        // console.log(pkg, typeof(pkg))

        // for(let i = 0; i<pkg.length; i++){
        //     const ai = pkg[i]
        // }


        let packagePlans = [];

            db.collection('packages')
            .find(pkg)
            .forEach(packagePlan => packagePlans.push(packagePlan))
            .then(() => {
                res.status(200).json(packagePlans)
                console.log(packagePlans)
                
                
            })
            .catch(()  => {
                res.status(500).json({error: 'Could not fetch the documents '})
            })  
        

        // db.collection('packages')
        //     .insertOne(pkg) 
        //     .then(result => {
        //         res.status(201).json(result)
        //         response.json({ message: 'Request received!', data })
        //     })
        //     .catch(err => {
        //         res.status(500).json({err: 'Not a valid doc id'})
        //     })
    })

 
    // app.get('/packages', (req,res) => {
       
    //     let packagePlans = [];

    //         db.collection('packages')
    //         .find()
    //         .forEach(packagePlan => packagePlans.push(packagePlan))
    //         .then(() => {
    //             res.status(200).json(packagePlans)
                
                
    //         })
    //         .catch(()  => {
    //             res.status(500).json({error: 'Could not fetch the documents '})
    //         })  
    
    // }); 






       






// app.get("/", (req, res) => {
//     // res.sendFile('./test.txt', {root: __dirname});
//     // console.log(res);

//     res.header("Content-Type",'application/json');
//     res.send(JSON.stringify(test));

//   });

// let port = process.env.PORT;
// if(port == null || port == "") {
//  port = 8000;
// }

// app.listen(8000, () => console.log('it is ready'));




// const data = require('/path/to/data.json')

// app.get('/search', function (req, res) {
//   res.header("Content-Type",'application/json');
//   res.send(JSON.stringify(data));
// })