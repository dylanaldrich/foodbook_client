/* imports */
import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';
import Routes from './config/Routes';

import './App.css';


/* App Component */
function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
