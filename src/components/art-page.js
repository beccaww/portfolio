import React from 'react'; 
import './art-page.css'; 
import {Link} from 'react-router-dom'; 

class ArtPage extends React.Component {
    render() {
        return (
            <div className="container2" style={{marginBottom: "64px"}}>
                <div class="grid header">Fine Art</div>
                <div class="grid hero"><Link to="/fanart">Fan Art</Link></div>
                <div class="grid sidebar"><Link to="/projects">Projects</Link></div>
                <div class="grid content"><Link to="/stillwork">Still Work</Link></div>
                <div class="grid extra"><Link to="/animation">Animation</Link></div>
            </div>
        );
    }
}

export default ArtPage; 