import React, { Component } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { URL } from '../../../config';
import './newsList.css';
import Button from '../Buttons/buttons';
import CardDetails from '../../widgets/CardDetails/cardDetails';
class NewsList extends Component {
  state = {
    news: [],
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

    axios.get(`${URL}/articles?_start=${start}&_end=${end}`)
      .then(response => {
        this.setState({
          news: [...this.state.news, ...response.data],
          start,
          end
        })
      })
  }

  loadMore = () => {
    this.request(this.state.end, this.state.end + this.state.amount)
  }

  renderNews = (type) => {
    let template = null;
    switch (type) {
      case ('card'):
        template = this.state.news.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: "newsList_wrapper",
              enterActive: "newsList_wrapper_enter",
            }}
            timeout={1000}
            key={i}
          >
            <div key={i}>
              <div className="newslist_item">
                <Link to={`/articles/${item.id}`}>
                  <CardDetails
                    teams={this.state.teams}
                    team={item.team}
                    date={item.date}
                  />
                  <h2>{item.title}</h2>
                </Link>
              </div>
            </div>
          </CSSTransition>
        ));
        break;
      case ('cardMain'):
        template = this.state.news.map((item, i) => (
          <CSSTransition
            classNames={{
              enter: "newsList_wrapper",
              enterActive: "newsList_wrapper_enter",
            }}
            timeout={1000}
            key={i}
          >
            <div key={i}>
              <Link to={`/articles/${item.id}`}>
                <div className="flex_wrapper">
                  <div className="first" style={{ background: `url(/images/articles/${item.image})` }}>

                    <div></div>
                  </div>
                  <div className="second">
                    <CardDetails
                      teams={this.state.teams}
                      team={item.team}
                      date={item.date}
                    />
                    <h2>{item.title}</h2>
                  </div>
                </div>
              </Link>
            </div>
          </CSSTransition >
        ));
        break;

      default:
        template = null;
    }
    return template;
  }
  render() {
    return (
      <div>
        <TransitionGroup
          component="div"
          className="list"

        >
          {this.renderNews(this.props.type)}
        </TransitionGroup>
        <Button
          type="loadmore"
          loadMore={() => this.loadMore()}
          cta="Load More News"
        />
      </div>
    )
  }
}

export default NewsList