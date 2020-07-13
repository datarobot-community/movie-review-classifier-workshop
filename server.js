const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
require('dotenv').config()

const broadcast = require('./api/broadcast')

const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'app/build')));
app.use(bodyParser.json()); 

/**
 * expected payload:
 *  {
 *  review: {
 *      title: string,
 *      review: string,
 *  },
 *  userId: string
 * }
 */


// An api endpoint that makes predictions
app.post('/api/predict', async (req, res) => {
    //TODO: make prediction

    //TODO: Broadcast to subscribers (optional)
    
    res.send() //TODO: return real response
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/app/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);