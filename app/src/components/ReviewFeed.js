import React, { Component } from "react"
import { Container } from "react-bootstrap"
import Pusher from 'pusher-js'

// This is just a feed of all reviews that are coming in - for a more collaborative feel of the workshop. 
// Very much optional component, Uses Pusher Channels

export default class ReviewFeed extends Component {

  state = {
    reviews: [],
    myUserId: ''
  }

  componentDidMount() {

    this.setState({
      myUserId: this.props.userId
    })

    const pusher = new Pusher('d7295d8a505075450c7a', {
      cluster: 'mt1'
    });
    let reviewsChannel = pusher.subscribe('live_reviews')
    reviewsChannel.bind('new_review', (data) => {
      this.setState({
        reviews: this.state.reviews.concat(data)
      })
    })
  }

  render() {
      let myReviews = this.state.reviews
            .slice() //clone the array
            .filter(review => review.userId !== this.state.myUserId)
            .map ((review, i) => (
                <div key={i} style={{
                  padding: '5px',
                }}>
                  <strong>{review.review.title}: { review.review.prediction === '0' ? '👎' : '👍' }</strong>
                </div>
        ))
    return(
      <Container>
        {myReviews}
      </Container>
    )
  }
}