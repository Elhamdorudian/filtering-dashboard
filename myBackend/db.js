const { MongoClient } = require('mongodb');

let dbConneciton;
let uri ='mongodb+srv://elidrn:69135674@referencetable.tpnhgon.mongodb.net/plans?retryWrites=true&w=majority'

module.exports = {

    //-------- establishing the connection and connect to database --------// 
    
    connectToDb: (cb) => {
    
        MongoClient.connect(uri)
    
            .then((client) => {
    
            dbConneciton = client.db();
            
            return cb();
            
            })
    
            .catch(err => {
            
            console.log(err);
            
            return cb(err);
            
            })
    
    },
    
     //-------- returning the connection ---------//
    
    getDb: () => dbConneciton
    
    }