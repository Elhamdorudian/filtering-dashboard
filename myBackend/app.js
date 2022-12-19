const express = require('express');
const {ObjectId} = require('mongodb');
const { connectToDb, getDb } = require('./db');
const app = express();
// app.use(cors());
app.use(express.json());


//---------- db connection ----------//

let db

connectToDb((err) => {
    if(!err) {
        app.listen(8000, () => {
            console.log('listening to port 8000')
        });
        db = getDb(); 
    }
})


app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
    next();
  });


//---------- getting the filtered documents in plans collection ----------//

app.get('/packages', (req,res) => {


    let packagePlans = []

        db.collection('packages')
        .find()
        .forEach(packagePlan => packagePlans.push(packagePlan))
        .then(() => {
            res.status(200).json(packagePlans) //sends the res to client
        })
        .catch(()  => {
            res.status(500).json({error: 'Could not fetch the documents '})
        })  

    }); 


    //---------- posting the plans filter inputs from client ----------//

    app.post('/packages', (req,res) => {
        const pkg = req.body
        console.log(pkg)
    

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
    })


//---------- checking if the user exists in the users collection ----------//

    app.get('/users', (req,res) => {
    
        let us = []
    
            db.collection('users')
            .find()
            .forEach(use => us.push(use))
            .then(() => {
                res.status(200).json(us) //sends the res to client
            })
            .catch(()  => {
                res.status(500).json({error: 'Could not fetch the documents '})
            })  
    
        }); 

//---------- posting the username & password from the login page ----------//

    app.post('/users', (req,res) => {

        const user = req.body;   

        let loginReq = [];

        db.collection('users')
            .find(user)
            .forEach(userReq => loginReq.push(userReq))
            .then(() => {
                res.status(200).json(loginReq)
                console.log(loginReq)
                
            })
            .catch(()  => {
                res.status(500).json({error: 'Could not fetch the documents '})
        })  
        
    })
