import React from 'react';
import './header.styles.scss';
import {Link } from 'gatsby';

const Header = () => {
  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro|Open+Sans&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
      <div className="header-main">
        <div className="logoContainer">
          <Link to="/">
            <img className="logoImage" src="https://res.cloudinary.com/dikuw/image/upload/v1597026658/LOGO_sk0w8h.png" alt="the dikuw logo. dikuw stands for data, information, knowledge, understanding, wisdom" />
          </Link>
        </div>
        <div className="dev">
          <span className="attr">Welcome to the information age.</span>
        </div>
        <div className="dev">
          <span className="attr">It's your data - what do you want to do with it?</span>
        </div>
        <div className="icons">
          <a href='https://github.com/dikuw' rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
          <a href='https://twitter.com/dikuw' rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
          <a href='https://www.linkedin.com/in/michaelvasilevsky/' rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
        </div>
        <span className="pages-link">
          <Link to="/">About</Link> | <Link to="/portfolio">Portfolio</Link> | <a href='https://dikuw.wordpress.com/' rel="noopener noreferrer" target="_blank">Blog</a>
        </span>
        <hr/>
      </div>
    </div>
  );
}

export default Header;