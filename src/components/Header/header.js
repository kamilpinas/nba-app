import React from 'react';
import './header.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import SideNav from '../Header/SideNav/sidenav';

const Header = (props) => {

  const logo = () =>
  (
    <Link to="/" className="logo">
      <img alt="nba-logo" src="/images/nba_logo.png" />
    </Link>
  )

  const navBars = () => {
    return (
      <div className="bars">
        <FontAwesomeIcon icon={faBars}
          onClick={props.onOpenNav}
          style={{
            color: '#dfdfdf',
            padding: '10px',
            cursor: 'pointer'
          }} />
      </div>

    )
  }

  return (
    <header className={"header"}>
      <SideNav {...props} />

      <div className={"headerOpt"}>
        {navBars()}
        {logo()}
      </div>
    </header>
  );
};

export default Header;