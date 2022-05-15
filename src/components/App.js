// dependencies
import React from 'react';

// components
import Header from './Header.js';
import Web3 from './Web3.js';
import About from './About.js';
import Roadmap from './Roadmap.js';
import Team from './Team.js';
import Footer from './Footer.js';
import Divider from './Divider.js';

// stylesheets
import '../styles/app.scss';
import '../styles/header.scss';
import '../styles/web3.scss';
import '../styles/about.scss';
import '../styles/roadmap.scss';
import '../styles/team.scss';
import '../styles/footer.scss';
import '../styles/divider.scss';

const App = () => {
  return(
    <>
      <Header />
      <Web3 />
      <About />
      <Divider />
      <Roadmap />
      <Divider />
      <Team />
      <Footer />
    </>
  );
};

export default App;