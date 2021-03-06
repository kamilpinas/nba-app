import React from 'react'
import './videosList.css';
import { Link } from 'react-router-dom';
import CardDetails from '../CardDetails/cardDetails';


const VideosListTemplate = (props) => {
  return props.data.map((item, i) => (
    <Link to={`/videos/${item.id}`} key={i}>
      <div className="videoListItem_wrapper">
        <div className="first" style={{ background: `url(/images/videos/${item.image})` }}>
          <div>

          </div>
        </div>
        <div className="second">
          <CardDetails teams={props.teams} team={item.team} date={item.date} />
          <h2>{item.title}</h2>
        </div>
      </div>
    </Link>
  ))
}

export default VideosListTemplate
