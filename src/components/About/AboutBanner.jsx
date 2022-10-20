import React from 'react';
import about from '../../assets/about.jpg';


const AboutBanner = () => {
  return (
    <div className={`h-40 flex justify-center items-center bg-[url(${about})]`}>
      <h2 className='uppercase font-bold'>About Us</h2>
    </div>
  );
};

export default AboutBanner;