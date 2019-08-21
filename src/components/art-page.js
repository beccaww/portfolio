import React from 'react'; 
import './art-page.css'; 

class ArtPage extends React.Component {
    render() {
        return (
            <div className="container2" style={{marginBottom: "64px"}}>
                <div class="grid header">Fine Art</div>
                <div class="grid hero">Fan Art</div>
                <div class="grid sidebar">Projects</div>
                <div class="grid content">Still Work</div>
                <div class="grid extra">Animation</div>
            </div>
        );
    }
}

export default ArtPage; 