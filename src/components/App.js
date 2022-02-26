// dependencies
import React from 'react';

// components
import Header from './Header.js';
import Team from './Team.js';
import Footer from './Footer.js';

// stylesheets
import '../styles/app.scss';
import '../styles/header.scss';
import '../styles/team.scss';
import '../styles/footer.scss';

const App = () => {
  return(
    <>
      <Header />
      <Team />
      <Footer />
    </>
  );
};

export default App;