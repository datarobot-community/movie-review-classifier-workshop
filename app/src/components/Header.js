import React from "react"

import { Jumbotron } from 'react-bootstrap'

export default () => {

    return (
        <Jumbotron>
        <h1>Movie Rating Classifier</h1>
        <p>
          We pick a movie, you write a review for it, and a robot gives it a rating! <br/>
          Powered by DataRobot AI
        </p>
      </Jumbotron>
    )
}