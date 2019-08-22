import React from 'react'; 
import './about.css'; 


class About extends React.Component {
    render() {
        return (
            <div className="container3">
                <h1 className="about-title">About</h1>
                <p className="about-paragraph">This is info about me!</p>
                <div className="about-image">Place holder for image</div>
            </div>
          );
    }
}

export default About; 