import React, { Component } from 'react'
import NewsList from '../widgets/NewsList/newsList';
import NewsSlider from '../widgets/NewsSlider/slider';

export default class News extends Component {
  render() {
    return (
      <div>
        <NewsSlider
          type="featured"
          start={0}
          amount={3}
          settings={{
            dots: false
          }}
        />
        <NewsList
          type="cardMain"
          loadmore={true}
          start={0}
          amount={5}
        />
      </div>
    )
  }
}
