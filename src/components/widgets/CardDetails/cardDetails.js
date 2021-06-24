import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClock } from '@fortawesome/free-solid-svg-icons';
import "./cardDetails.css";
const CardDetails = (props) => {

  const teamName = (teams, team) => {
    let data = teams.find((item) => {
      return item.id === team
    });
    if (data) {
      return data.name
    }
  }

  return (
    <div className="cardInfo">
      <span className="teamName">
        {teamName(props.teams, props.team)}
      </span>
      <span className="date">
        <FontAwesomeIcon icon={faClock} />
        {props.date}
      </span>
    </div>
  );
};

export default CardDetails;