import React from 'react'
import NewsSlider from '../widgets/NewsSlider/slider';

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
    </div>
  )
}
