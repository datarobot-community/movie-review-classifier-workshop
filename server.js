const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
require('dotenv').config()

const predict = require('./api/predict')
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
    let { review, userId } = req.body
    console.log("Got to predicting")
    console.log(review)

    let prediction = await predict(review.review)

    review.prediction = prediction

    //We'll broadcast so we can show it to all users
    await broadcast({ review, userId })

    res.send({prediction: prediction })
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/app/build/index.html'));
});

const port = process.env.PORT || 3001;
app.listen(port);

console.log('App is listening on port ' + port);