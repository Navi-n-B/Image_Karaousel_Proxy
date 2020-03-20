import React from "react";
// import ReactDOM from "react-dom";
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import ReactDOM from 'react-dom';
import Introduction from './components/Introduction.jsx';
import $ from 'jquery';
// const App = (props) => {
//   return (
//     <React.Fragment>
//       <header>
//         <Navbar />
//       </header>
//       <h1>hello</h1>
//       <Footer />
//     </React.Fragment>
//   )
// };
// export default App;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      landingGallery: []
      // populate with 5 images
    }
  }

  // get all images
  getAll () {
    $.ajax({
      method: 'GET',
      url: `http://localhost:3005/api.js`,
      success: function(data) {
        this.setState({
          params: data
        })
      }.bind(this),
    })
  }

  componentDidMount () {
    this.getAll();
  }

  render () {
    return (
      <div>
        <landingGallery params={this.state.params}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));