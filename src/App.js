import Navbar from './Navbar'
import Section4 from './Section 4';
import Section1 from './Section1'
import Section2 from './Section2'
import Section3 from './Section3';
import Section5 from './Section5';
import Section6 from './Section6';
import Section7 from './Section7';
import Section8 from './Section8';
import Section9 from './Section9';
import Section10 from './Section10';
import Footer from './Footer'
import React, { useState } from 'react';
import Popup from './Popup';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="App">
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Section1 isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <Footer />
      <Popup />
    </div>
  );
}

export default App;
