import React from 'react';
import { BsInstagram } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";

const HeaderSocials2 = () => {
  return (
    <div className="header__socials2">
      <a
        href="https://www.instagram.com/dushyant_26850/"
        target="_blank"
        rel="noreferrer"
      >
        <BsInstagram />
      </a>
      <a
        href="https://wa.me/918387826850?text="
        target="_blank"
        rel="noreferrer"
      >
        <BsWhatsapp />
      </a>
      <a
        href="https://twitter.com/DushyantJangid9"
        target="_blank"
        rel="noreferrer"
      >
        <BsTwitter />
      </a>
    </div>
  );
}

export default HeaderSocials2