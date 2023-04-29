import React from "react";
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-green-300 grid grid-cols-4 items-center h-20">
      <span>Facebook Link</span>
      <span>Twitter Link</span>
      <span>NewsLetter Link</span>
    </div>
  );
};

export default Footer;
