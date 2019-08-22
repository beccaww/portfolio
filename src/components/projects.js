import React from 'react'; 
import './projects.css'; 
import AliceCarousel from 'react-alice-carousel';

class Projects extends React.Component {
    render() {
        return (
            <div>
                <AliceCarousel>
                <img src="/img1" className="yours-custom-class" />
                <img src="/img2" className="yours-custom-class" />
                <img src="/img3" className="yours-custom-class" />
                <img src="/img4" className="yours-custom-class" />
                <img src="/img5" className="yours-custom-class" />
                </AliceCarousel>
                <AliceCarousel>
                <img src="/img1" className="yours-custom-class" />
                <img src="/img2" className="yours-custom-class" />
                <img src="/img3" className="yours-custom-class" />
                <img src="/img4" className="yours-custom-class" />
                <img src="/img5" className="yours-custom-class" />
                </AliceCarousel>
            </div>
        );
    }
}

export default Projects; 