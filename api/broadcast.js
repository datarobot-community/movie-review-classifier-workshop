
const got = require("got");
const dotenv = require('dotenv')


// This sents the review along with UserId to a little service that will broadcast it via Pusher Channels.
// Not part of DataRobot exercise, but will let attendees see each others reviews in realtime :) 
module.exports = async ({review, userId }) => {

    let resp = await got.post('https://movie-reviews-streamer-service.zan.vercel.app/api/upload-review', {
        json: { 
            review,
            userId
        }
    })

    console.log("Sent")
    console.log(resp.statusCode)
    console.log(resp.body)

    return
}