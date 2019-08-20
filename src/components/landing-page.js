import React from 'react';
import './landing-page.css';
import Navbar from './navbar';
import {Link} from 'react-router-dom'; 

class LandingPage extends React.Component {
  render() {
    return (
      <div className="home">
        <main>
          <div className="landingpage-container">
              <div className="landingpage-details-container">
                <h1 className="welcome-header">Welcome</h1>
                <div className="links">
                  <div className="art-link"><Link to="/">Fine Art</Link></div>
                  <div className="web-link"><Link to="/">Web Design/Development</Link></div>
                </div>
              </div>
          </div>
          {/* <div className="space"></div> */}
          {/* <div className="containers">
              <div className="art-container">
                <h2>Fine Art</h2>
              </div>
              <div className="web-container">
                <h2>Web Design/Development</h2>
              </div>
          </div> */}
          {/* <div className="space"></div> */}
        </main>
      </div>
    );
  }
}

export default LandingPage;