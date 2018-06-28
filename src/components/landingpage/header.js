import React from 'react';
import logo2 from './logo2.png';


//simple Header, just used to show the logo on the login page.
export default function Header() {
  return (
    <header className="logoHeader">
      <img src={logo2} alt="logo" className="landingLogo"></img>
    </header>
  );
}