import React from 'react'
import NewsSlider from '../widgets/NewsSlider/slider';
import NewsList from '../widgets/NewsList/newsList';
import VideosList from '../widgets/VideosList/videosList';

export default function Home() {
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
        type="card"
        loadmore={true}
        start={3}
        amount={3}
      />
      <VideosList
        type="card"
        loadmore={true}
        title={true}
        start={0}
        amount={3}
      />
    </div>
  )
}
