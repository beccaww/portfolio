import React from 'react';
import './App.css';
import LandingPage from './components/landing-page'; 
import Navbar from './components/navbar'; 
import Footer from './components/footer';
import SideDrawer from './components/sidedrawer'; 
import Backdrop from './components/backdrop'; 

class App extends React.Component {
  state ={
    sideDrawerOpen: false
  }; 

drawerToggleClickHandler = () => {
  this.setState((prevState) => {
    return {sideDrawerOpen: !prevState.sideDrawerOpen}; 
  });
}; 

backdropClickHandler = () => {
  this.setState({sideDrawerOpen: false});
}

  render() { 
    let backdrop; 

    if (this.state.sideDrawerOpen) {
      backdrop = <Backdrop click={this.backdropClickHandler} />; 
    }

    return (
      <div>
       <div style={{height: '100%'}}>
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          <SideDrawer show={this.state.sideDrawerOpen} />
          {backdrop}
        </div>
        <main style={{marginTop: '64px'}}>
          <LandingPage />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;