import React from 'react';
import './header.styles.scss';
import {Link, graphql, useStaticQuery} from 'gatsby';
import Image from 'gatsby-image';

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      },
      file (relativePath: { eq: "images/LOGO.png" }) {
        childImageSharp {
          fluid(maxWidth: 600, maxHeight: 217) {
            ...GatsbyImageSharpFluid,
          }
        }
      }
    }
  `)

  return (
    <div>
      <link href="https://fonts.googleapis.com/css?family=Anonymous+Pro|Open+Sans&display=swap" rel="stylesheet" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css" integrity="sha384-fnmOCqbTlWIlj8LyTjo7mOUStjsKC4pOpQbqyi7RrhN7udi9RwhKkMHpvLbHG9Sr" crossOrigin="anonymous"/>
      <div className="header-main">
        <div className="logoContainer">
          <img src="https://res.cloudinary.com/dikuw/image/upload/v1597026658/LOGO_sk0w8h.png" alt="the dikuw logo. dikuw stands for data, information, knowledge, understanding, wisdom" />
          {/* <Image fluid={data.file.childImageSharp.fluid} alt="the dikuw logo. dikuw stands for data, information, knowledge, understanding, wisdom" /> */}
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
          <Link to="/">Portfolio</Link>
          |
          <Link to="/blog">Blog</Link>
          |
          <Link to="/about">About</Link>
        </span>
        <hr/>
      </div>
    </div>
  );
}

export default Header;