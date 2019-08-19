import React from 'react'; 

import './sidedrawer.css'; 

const SideDrawer = props => {
    let drawerClasses = 'side-drawer'; 
    if (props.show) {
        drawerClasses = 'side-drawer open'; 
    }
    return (
    <nav className={drawerClasses}>
        <ul>
            <li><a href="/">Art</a></li>
            <li><a href="/">Web</a></li>
        </ul>
    </nav>
    ); 
}; 

export default SideDrawer; 