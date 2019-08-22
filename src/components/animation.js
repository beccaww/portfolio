import React from 'react'; 
import './animation.css'; 
import { Player } from 'video-react';


class Animation extends React.Component {
    render() {
        return (
            <div>
              <Player
                playsInline
                poster="/assets/poster.png"
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
              />
              <div style={{textAlign: "center"}}>
                <h2>About: </h2>
                <p>Here's a description of the demo reel</p>
              </div>
            </div>
          );
    }
}

export default Animation; 