var Mongoose = require('mongoose');

// load database
try {
   var db =  Mongoose.connect('mongodb+srv://testboy:Rhino94@rest.hsy0d.mongodb.net/Rest?retryWrites=true&w=majority',
     ()=> console.log('Connected to DB!'))
} catch (e){
    console.error(e);
}


exports.db = db;