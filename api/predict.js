
const got = require("got");

module.exports = async (review) => {

    console.log("Predicting review: ")
    console.log(review)

    let response = await got.post(`${process.env.DATAROBOT_PREDICTION_SERVER}/predApi/v1.0/deployments/${process.env.DATAROBOT_DEPLOYMENT_ID}/predictions`, {
        headers: {
            "Authorization": `Bearer ${process.env.DATAROBOT_API_KEY}`,
            "datarobot-key": process.env.DATAROBOT_KEY
        },
        json: [{ review }],
        responseType: 'json'
    })    

    //just the prediction - will be "0" or "1"
    let prediction = response.body.data[0].prediction
    console.log(`Predicted sentiment:  ${prediction}`)
    console.log(response.body.data)

    return(prediction)
    
}