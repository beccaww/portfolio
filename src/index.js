import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import { Route, BrowserRouter as Router } from 'react-router-dom'
import App from './App'
import * as serviceWorker from './serviceWorker';
import WebPage from './components/webd&d'; 
import LandingPage from './components/landing-page'; 
import ArtPage from './components/art-page';
import Animation from './components/animation';
import FanArt from './components/fanart';
import Projects from './components/projects';
import StillWork from './components/stillwork';
import About from './components/about';


const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />
        <Route path="/home" component={LandingPage} />
        <Route path="/fineart" component={ArtPage} />
        <Route path="/animation" component={Animation} />
        <Route path="/fanart" component={FanArt} />
        <Route path="/projects" component={Projects} />
        <Route path="/stillwork" component={StillWork} />
        <Route path="/webdesdev" component={WebPage} /> 
        <Route path="/about" component={About} />
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
