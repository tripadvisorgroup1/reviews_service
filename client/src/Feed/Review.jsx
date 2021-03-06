import React from 'react';
import axios from 'axios';
import Info from './Info.jsx';
import Photos from './Photos.jsx';
import Userbar from './Userbar.jsx';

class Review extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      user:{},
      review: this.props.review,
      loaded: false,
      date: this.props.review.date
    }

    this.fetchCurrentUser = this.fetchCurrentUser.bind(this)
  }

  componentDidMount() {
    this.fetchCurrentUser();
  }


  fetchCurrentUser () {

    axios.get(`/api/listings${window.location.pathname}reviews/user/${this.props.userId}`)
      .then(({data}) => {
        this.setState ({
          user: data
        })
      })
      .then(() => {
        this.setState ({
          loaded: true
        })

      })
  }

  render() {
    return (
      <div>
        {
          this.state.loaded &&
          <div className = 'single-review'>
          <Userbar user={this.state.user} date={this.state.date}/>
          <Photos photo1 = {this.state.review.photo1} photo2 = {this.state.review.photo2} photo3 = {this.state.review.photo3}/>
          <Info info = {this.state.review}/>
          </div>
        }
      </div>
    );
  }
}

export default Review;