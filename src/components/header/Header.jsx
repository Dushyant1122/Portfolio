import React from 'react';
import CTA from './CTA';
import HeaderSocials from './HeaderSocials';
import './header.css';
import HeaderSocials2 from './HeaderSocials2';

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Dushyant Jangid</h1>
        <h2 className="text-light">Full-stack Developer</h2>
        <CTA />
        {/* <a href="#contact" className="scroll__down">
          Scroll Down
        </a> */}
        <HeaderSocials/>
        <HeaderSocials2/>
      </div>
    </header>
  );
};

export default Header;
