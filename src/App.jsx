import React from "react";
// import ReactDOM from "react-dom";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

const App = (props) => {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <h1>hello</h1>
      <Footer />
    </React.Fragment>
  )
};

export default App;