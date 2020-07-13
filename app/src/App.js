import React, { useState } from 'react';

import { Container, Form, Button, Image } from 'react-bootstrap';
import Footer from './components/Footer';
import Header from './components/Header';
import ReviewModal from './components/ReviewModal';
import ReviewFeed from './components/ReviewFeed';
import movies from './utils/movies'
import uuid from './utils/uuid'

const userId = uuid()

function App() {
  const getRandomMovie = () => movies[Math.floor(Math.random() * movies.length)]
  const [review, setReview] = useState("")
  const [movie, setMovie] = useState(getRandomMovie())
  const [predictionScore, setPredictionScore] = useState("")

  const nextMovie = () => {
    let newMovie = getRandomMovie()
    setMovie(newMovie) 
  }

  const submitReview =  async () => {
    console.log("Form submitted!")
    console.log(review)
  }

  const hideModal = () => {
    setReview("")
    setPredictionScore("")
    nextMovie()
  }

  const handleSubmit = (event) => {
    submitReview()
    event.preventDefault();
  }

  const handleFormChange = (event) => {
    setReview(event.target.value)
  }

  return (
    <div className="App">
      <Header />
      <ReviewModal 
        show={ predictionScore.length > 0}
        score={predictionScore}
        onHide={hideModal}
        />

      <Container className="mw-auto my-2" style={{width: '40rem'}}>

        <div className="text-center my-4">
          <Image style={{width: '30rem'}} variant="top" src={movie.Poster} />
        </div>
        
        <h2>{`${movie.Title} (${movie.Year})`}</h2>
        
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="writeReview">
            <Form.Label>Write your review</Form.Label>
            <Form.Control as="textarea" rows="3" value={review} onChange={handleFormChange}/>
          </Form.Group>
          <Button variant="primary rx-1" type="submit">
            Submit
          </Button>
          <Button variant="secondary mx-1" onClick={nextMovie}>
            Next movie
          </Button>
        </Form>
      
      </Container>
      <ReviewFeed userId={userId} />
      <Footer />
    </div>
  );
}

export default App;