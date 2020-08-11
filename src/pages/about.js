import React from 'react';
import Layout from '../components/Layout';
import aboutStyle from './About.module.scss';
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
      <h2>Welcome</h2>
      <div className={aboutStyle.main}>
        <div className={aboutStyle.izquierda}>
          <div className={aboutStyle.imagen}>
            <Image className={aboutStyle.img} fluid={props.data.file.childImageSharp.fluid} alt="a lovely picture of me at my brother's wedding in 2012" />
          </div>
          <div className={aboutStyle.texto}>
            <div className={aboutStyle.iconos}><i className="fas fa-map-marker-alt fa-sm"></i><p>Location Independent</p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-graduation-cap fa-sm"></i><p>University of Colorado at Boulder</p></div>
            <div className={aboutStyle.iconos}><i className="fas fa-code fa-sm"></i><p>MERN Stack, Cordova, IoT</p></div>
          </div>    
        </div>
        <div className={aboutStyle.derecha}>
          <div className={aboutStyle.wordContainer}>
            <p>Full (MERN) Stack Solutions</p>
            <p>Excel, Access, and SharePoint Solutions</p>
            <p>21CFR11 / Annex 11 Compliant Solutions </p>
          </div>
          <div className={aboutStyle.logoContainer}>
            <img alt="javascript" className={aboutStyle.logo} src="./logos/javascript.svg" />
            <img alt="Gatsby" className={aboutStyle.logo} src="./logos/gatsby.svg" />
            <img alt="GraphQl" className={aboutStyle.logo} src="./logos/graphql.svg" />
            <img alt="React" className={aboutStyle.logo} src="./logos/react.svg" />
            <img alt="nodeJs" className={aboutStyle.logo} src="./logos/nodejs-icon.svg" />
            <img alt="Mongo" className={aboutStyle.logo} src="./logos/mongodb.png" />
          </div>
            <div className={aboutStyle.socialContainer}>
              <p>More about me</p>
              <a className={aboutStyle.social} href="https://github.com/dikuw"><i className="fab fa-github"></i></a>
              <a className={aboutStyle.social} href="https://www.linkedin.com/mvasilevsky/"><i className="fab fa-linkedin"></i></a>
              <a className={aboutStyle.social} href="https://www.twitter.com/dikuw"><i className="fab fa-twitter"></i></a>
            </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;