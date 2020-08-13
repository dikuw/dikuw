import React from 'react';
import Layout from '../components/Layout';
import './index.styles.scss';
import Image from 'gatsby-image';
import { graphql } from 'gatsby';

export const query = graphql`
query {
    file(relativePath: { eq: "images/photo.PNG" }) {
      childImageSharp {
        fluid(maxWidth: 400) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

const About = (props) => {
  console.log(query)
  return (
    <Layout>
      <div className="main">
        <div className="izquierda">
          <div className="imagen">
            <Image className="img" fluid={props.data.file.childImageSharp.fluid} alt="a lovely picture of me at my brother's wedding in 2012" />
          </div>
          <div className="texto">
            <div className="iconos"><i className="fas fa-map-marker-alt fa-sm"></i><p>Location Independent</p></div>
            <div className="iconos"><i className="fas fa-graduation-cap fa-sm"></i><p>University of Colorado at Boulder</p></div>
            <div className="iconos"><i className="fas fa-code fa-sm"></i><p>MERN Stack, Cordova, IoT</p></div>
          </div>    
        </div>
        <div className="derecha">
          <div className="wordContainer">
            <p>Full (MERN) Stack Solutions</p>
            <p>Excel, Access, and SharePoint Solutions</p>
            <p>
              <a style={{ "text-decoration": "none" }} href="https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfcfr/CFRSearch.cfm?CFRPart=11" rel="noopener noreferrer" target="_blank">21CFR11</a>
              &#160;/&#160; 
              <a style={{ "text-decoration": "none" }} href="http://ec.europa.eu/health/files/eudralex/vol-4/annex11_01-2011_en.pdf" rel="noopener noreferrer" target="_blank">Annex 11</a>
              &#160;Compliant Solutions
            </p>
          </div>
          <div className="logoContainer">
            <a href="http://www.ecma-international.org/publications/standards/Ecma-262.htm" rel="noopener noreferrer" target="_blank">
              <img alt="JavaScript ECMA Script" className="logo" src="./logos/javascript.svg" />
            </a>
            <a href="https://reactjs.org/" rel="noopener noreferrer" target="_blank">
              <img alt="React JS" className="logo" src="./logos/react.svg" />
            </a>
            <a href="https://nodejs.org/en/" rel="noopener noreferrer" target="_blank">
              <img alt="Node JS" className="logo" src="./logos/nodejs-icon.svg" />
            </a>
            <a href="https://www.mongodb.com/" rel="noopener noreferrer" target="_blank">
              <img alt="Mongo DB No-SQL Database" className="logo" src="./logos/mongodb.png" />
            </a>
            <a href="https://www.gatsbyjs.org/" rel="noopener noreferrer" target="_blank">
              <img alt="Gatsby" className="logo" src="./logos/gatsby.svg" />
            </a>
            <a href="https://graphql.org/" rel="noopener noreferrer" target="_blank">
              <img alt="Graph QL" className="logo" src="./logos/graphql.svg" />
            </a>
          </div>
            <div className="social-container">
              <p>More about me</p>
              <a className="social" href="https://github.com/dikuw" rel="noopener noreferrer" target="_blank"><i className="fab fa-github"></i></a>
              <a className="social" href="https://www.linkedin.com/michaelvasilevsky/" rel="noopener noreferrer" target="_blank"><i className="fab fa-linkedin"></i></a>
              <a className="social" href="https://www.twitter.com/dikuw" rel="noopener noreferrer" target="_blank"><i className="fab fa-twitter"></i></a>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;