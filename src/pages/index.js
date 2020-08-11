import React from "react";
import Layout from '../components/Layout';
import './index.styles.scss';
import portfolioItems from '../../data/portfolio-items';

function renderFolio() {
  return  portfolioItems.map(({ title, synopsis, index, desc, repo, live, img }) => {
    console.log(title);
    return (
      <div key={'div' + index} className="tab">
        <input key={'index' + index} type="checkbox" id={index + title}/>
        <label key={'label' + index} className="tab-label" htmlFor={index + title}>  
          <span key={'pTit' + index} className='folio-title'>{title} </span>
          <span key={'dot' + index} className='folio-title'>· </span>
          <span  key={'pSinop' + index} className='folio-sinopsis'>{synopsis}</span>
        </label>
        <div key={'tab' + index} className="tab-content">
          <img alt="nicasia" src={img}/>
          {desc}
          <span className="repolinks" key={'repo' + index}><a key={'repoLink' + index} href={repo}>Github Repo</a></span>
          {live ? <span className="repolinks" key={'live' + index}><a key={'liveLink' + index} href={repo}>Check it live</a></span> : null }
        </div>
      </div>
    );
  });
};

const Index = () => {
  return (
    <Layout>
      <h1 className="opener">Past Projects</h1>
      <p className="subtitle">These are a few of my past projects.</p>
      {renderFolio()}
    </Layout>
  );
};

export default Index;