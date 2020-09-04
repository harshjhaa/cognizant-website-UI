import React from 'react';

//component
import NavTop from './NavTop';
import NavBottom from './NavBottom';
import FeatureContent from './FeatureContent';
import Catlog from './Catlog';
import PressRelease from './PressRelease';
import LatestThinking from './LatestThinking';
import DigitallyCognizant from './DigitallyCognizant';
import Form from './Form';
import Footer from './Footer';
import FooterBottom from './FooterBottom';

function App() {
  return (
    <div className="app">
      <NavTop />
      <NavBottom />
      <FeatureContent />
      <Catlog />
      <PressRelease />
      <LatestThinking />
      <DigitallyCognizant />
      <Form />
      <Footer />
      <FooterBottom />
    </div>
  );
}

export default App;
