import React from "react";
import Layout from '../components/Layout';
import './portfolio.styles.scss';
import portfolioItems from '../../data/portfolio-items';

const portfolioDetails = () => {
  return  portfolioItems.map(({ title, synopsis, index, desc, repo, live, img, imgAlt }) => {
    return (
      <div key={'div' + index} className="tab">
        <input key={'index' + index} type="checkbox" id={index + title}/>
        <label key={'label' + index} className="tab-label" htmlFor={index + title}>  
          <span key={'pTit' + index} className='folio-title'>{title} </span>
          <span key={'dot' + index} className='folio-title'>· </span>
          <span  key={'pSinop' + index} className='folio-sinopsis'>{synopsis}</span>
        </label>
        <div key={'tab' + index} className="tab-content">
          <img alt={imgAlt} src={img}/>
          {desc}
          <div className="repolinks" key={'repo' + index}>Code Repository: <a key={'repoLink' + index} href={repo} rel="noopener noreferrer" target="_blank">{repo}</a></div>
          {live ? <div className="repolinks" key={'live' + index}>Live (test) Application: <a key={'liveLink' + index} href={live} rel="noopener noreferrer" target="_blank">{live}</a></div> : null }
        </div>
      </div>
    );
  });
};

const Portfolio = () => {
  return (
    <Layout>
      <h1 className="opener">Past Projects</h1>
      <p className="subtitle">A selection of my public projects.</p>
      {portfolioDetails()}
    </Layout>
  );
}; 

export default Portfolio;

