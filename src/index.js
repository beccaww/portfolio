import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker';
import WebPage from './components/webd&d'; 
import LandingPage from './components/landing-page'; 
import ArtPage from './components/art-page';

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/home" component={LandingPage} />
        <Route path="/fineart" component={ArtPage} />
        <Route path="/webdesdev" component={WebPage} /> 
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
