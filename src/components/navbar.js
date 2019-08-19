import React from 'react';
import {Link} from 'react-router-dom';
import './navbar.css'; 
import DrawerToggleButton from './drawerToggleButton'; 

const Navbar = props => (
    <header className="navbar"> 
        <nav className="navbar_navigation">
            <div className="navbar_toggle_button">
                <DrawerToggleButton click={props.drawerClickHandler}/>
            </div>
            <div className="navbar_logo"><a href="/">LOGO</a></div>
            <div className="spacer"></div>
            <div className="navbar_navitems">
                <ul>
                    <li><Link to="/">Art</Link></li>
                    <li><Link to="/">Web</Link></li>
                </ul>
            </div>
        </nav>
    </header>
); 


export default Navbar; 
