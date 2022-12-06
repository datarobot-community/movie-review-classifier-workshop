**Please note:** The code in these repos is sourced from the DataRobot user community and is not owned or maintained by DataRobot, Inc. You may need to make edits or updates for this code to function properly in your environment.

# Workshop - Movie Review Classifier

A project to accompany a workshop on how to build a web application that uses DataRobot to classify movie reviews.
Demo: https://movie-rating-app.now.sh/

The app lets you rate the movie and uses ML to clasify your rating in either positive or negative - Rotten Tomatoes style. <br/>
It uses DataRobot to create the ML model, deploy it, and expose it as a prediction API, and the movie database taken from from RapidApi. <br/>
The movies you can rate are taken from IMDB's top 250 movies of all time.

## Requirements 

- You will need a [DataRobot](datarobot.com) account and access to deployments. You can apply for a DataRobot trial account using this link: https://www.datarobot.com/lp/trial/.
- Node.JS
- Pusher account for broadcasting predictions in realtime over WebSocket to other workshop participants(optional)

## Usage

To follow along the tutorial check out the `start_exercise` branch.
To see the finished application check out the `main` branch.

If using the `main` branch, create a file called `.env` with your DataRobot values. See `sample.env` for the variables you need.

## Repository Contents

- `server.js` - Express Server that makes predictions to DataRobot
- `app/` - React app that serves as our frontend
- `resources/IMDB_Dataset.csv` - The training dataset -  taken taken from [Kaggle](https://www.kaggle.com/lakshmi25npathi/imdb-dataset-of-50k-movie-reviews) and originated in the  the [2011 ACL paper - Learning Word Vectors for Sentiment Analysis](http://ai.stanford.edu/~amaas/data/sentiment/).

## Development and Contributing

If you'd like to report an issue or bug, suggest improvements, or contribute code to this project, please refer to [CONTRIBUTING.md](CONTRIBUTING.md).

# Code of Conduct

This project has adopted the Contributor Covenant for its Code of Conduct. 
See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) to read it in full.

# License

Licensed under the Apache License 2.0. 
See [LICENSE](LICENSE) to read it in full.
