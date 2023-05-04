import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import HeaderSocials2 from './HeaderSocials2';
import Type from './Type';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h3 >Hello I'm</h3>
        <h1 style={{ fontSize: "3rem" }}>Dushyant Jangid</h1>
        <h2 className="text-light">
          <Type />
        </h2>
        <CTA />
        
        <HeaderSocials />
        <HeaderSocials2 />
      </div>
    </header>
  );
};

export default Header;
