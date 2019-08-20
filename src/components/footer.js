import React from 'react';
import {Link} from 'react-router-dom';
import './footer.css'; 

const Footer = props => (
    <header className="footer"> 
        <nav className="footer_navigation">
            <div className="spacer"></div>
            <div className="footer_navitems">
                <ul>
                    <li><Link to="/">Logo</Link></li>
                    <li><Link to="/">Logo</Link></li>
                </ul>
            </div>
        </nav>
    </header>
); 


export default Footer; 
