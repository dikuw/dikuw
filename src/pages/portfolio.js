import React from "react";
import Layout from '../components/Layout';
import './portfolio.styles.scss';
import portfolioItems from '../../data/portfolio-items';

const portfolioDetails = () => {
  return  portfolioItems.map(({ title, synopsis, index, desc, repo, live, img, imgAlt }) => {
    return (
      <div key={'div' + index} className="portfolioItem">
        <label key={'label' + index} className="portfolioItem--label" htmlFor={index + title}>  
          <span key={'pTit' + index} className='folio-title'>{title} </span>
          <span key={'dot' + index} className='folio-title'>· </span>
          <span  key={'pSinop' + index} className='folio-sinopsis'>{synopsis}</span>
        </label>
        <div key={'tab' + index} className="portfolioItem--details">
          <div className="portfolioItem--image">
            <img alt={imgAlt} src={img}/>
          </div>
          <div className="portfolioItem--details--content">
            <div className="portfolioItem--description">{desc}</div>
            <div className="portfolioItem--repository">
              Repository: <a key={'repoLink' + index} href={repo} rel="noopener noreferrer" target="_blank">{repo}</a>
            </div>
          { live ? <div className="portfolioItem-live" key={'live' + index}>Live App: <a key={'liveLink' + index} href={live} rel="noopener noreferrer" target="_blank">{live}</a></div> : null }
          </div>
        </div>
      </div>
    );
  });
};

const Portfolio = () => {
  return (
    <Layout>
      <h1>Past Projects</h1>
      <h2>A selection of my public projects</h2>
      {portfolioDetails()}
    </Layout>
  );
}; 

export default Portfolio;

