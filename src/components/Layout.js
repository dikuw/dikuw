import React from 'react';
import Footer from './Footer';
import Header from './Header';

const Layout = (props) => {
  return( 
    <>
      <Header/>
      <main className="content-main">
        {props.children}
      </main>
      <Footer/>
    </>
  );
};

export default Layout;