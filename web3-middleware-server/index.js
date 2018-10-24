const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const accoutRouter = require('./routes/accountRouter.js');

// for making angular client public 
app.use('/', express.static('public'));
//for parsing json input from angular
app.use(bodyParser.json());

// for serving angular
app.use('/', express.static('public'));

// for using application routes
app.use('/kyc', accoutRouter);

// for handling bad urls
app.get('*', function(req, res) {
    res.status(404).json({
        message : "URL not found"
    });
});

app.post('*', function(req, res){
    res.status(404).json({
        message : "URL not found"
    });
});


// for starting the express server
app.listen(3000, (err, res) => {
    console.log("Server is up!!");
})