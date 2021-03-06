import React, { Component } from 'react';
import axios from 'axios';
import { URL } from '../../../config';
import VideosListTemplate from './videosListTemplate';
import "./videosList.css";
import Button from '../Buttons/buttons';

class VideosList extends Component {
  state = {
    videos: [],
    teams: [],
    start: this.props.start,
    end: this.props.start + this.props.amount,
    amount: this.props.amount,
  }

  componentWillMount() {
    this.request(this.state.start, this.state.end)
  }

  request = (start, end) => {
    if (this.state.teams.length < 1) {
      axios.get(`${URL}/teams`)
        .then(response => {
          this.setState({
            teams: response.data
          })
        })
    }

    axios.get(`${URL}/videos?_start=${start}&_end=${end}`)
      .then(response => {
        this.setState({
          videos: [...this.state.videos, ...response.data],
          start,
          end
        })
      })
  }

  renderVideos = () => {
    let template = null;
    switch (this.props.type) {
      case ('card'):
        template =
          <VideosListTemplate
            data={this.state.videos}
            teams={this.state.teams}
          />
        break;
      default:
        template = null;
    }
    return template;
  }

  loadMore = () => {
    this.request(this.state.end, this.state.end + this.state.amount)
  }

  renderButton = () => {
    return this.props.loadmore ?
      <Button
        type="loadmore"
        cta="Load More Videos"
        loadMore={() => this.loadMore()}
      />
      :
      <Button
        type="linkTo"
        cta="More Videos"
        linkTo="/videos"
      />
  }

  renderTitle = () => {
    return this.props.title ?
      <h3><strong>NBA</strong> VIDEOS</h3>
      : null;
  }


  render() {
    return (
      <div className="videoList_wrapper">
        {this.renderTitle()}
        {this.renderVideos()}
        {this.renderButton()}
      </div>
    );
  }
}

export default VideosList;