import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faNewspaper, faPlay, faBaseballBall, faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import './sidenav.css';

const SideNavItems = () => {

  const items = [
    {
      type: "option",
      icon: faSignInAlt,
      text: 'Sign In',
      link: '/sign-in'
    },
    {
      type: "option",
      icon: faHome,
      text: 'Home',
      link: '/'
    },
    {
      type: "option",
      icon: faNewspaper,
      text: 'News',
      link: '/news'
    },
    {
      type: "option",
      icon: faBaseballBall,
      text: 'Teams',
      link: '/teams'
    },
    {
      type: "option",
      icon: faPlay,
      text: 'Videos',
      link: '/videos'
    },
    {
      type: "option",
      icon: faSignOutAlt,
      text: 'Sign Out',
      link: '/sign-out'
    },
  ]

  const showItems = () => {
    return items.map((item, i) => {
      return (
        <div key={i} className={item.type}>
          <Link to={item.link}>
            <FontAwesomeIcon icon={item.icon} />
            {item.text}
          </Link>
        </div>
      )
    })
  }

  return (

    <div>
      {showItems()}
    </div>
  );
};

export default SideNavItems;