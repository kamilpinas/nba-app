import React from 'react'
import VideosListTemplate from '../videosListTemplate'
import './videosRelated.css'

const VideosRelated = (props) => {
  return (
    <div className="relatedWrapper">
      <VideosListTemplate data={props.data} teams={props.teams} />
    </div>
  )
}

export default VideosRelated
