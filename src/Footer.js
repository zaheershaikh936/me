import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-green-300 grid grid-cols-4 items-center h-20">
     <Link to="/features"> <span>Instagram Link</span></Link>
      <span>Facebook Link</span>
      <span>Twitter Link</span>
      <span>NewsLetter Link</span>
    </div>
  );
};

export default Footer;
