import React from 'react';
import {Link} from 'react-router-dom'
import './webd&d.css';

class WebPage extends React.Component {
    render() {
        return (
            <div className="container">
                <main className="grid2x2">
                <h1 className="web-title" style={{marginBottom: "50px"}}>Web Design/Development</h1>
                    <div className="Project1">
                        <h3>Project 1</h3>
                        <p>Description</p>
                        <div>Image</div>
                        <Link to="/">Github </Link>
                        <Link to="/">Live site </Link> 
                    </div>
                    <div className="Project2">
                        <h3>Project 2</h3>
                        <p>Description</p>
                        <div>Image</div>
                        <Link to="/">Github </Link>
                        <Link to="/">Live site </Link> 
                    </div>
                    <div className="Project3">
                        <h3>Project 3</h3>
                        <p>Description</p>
                        <div>Image</div>
                        <Link to="/">Github </Link>
                        <Link to="/">Live site </Link> 
                    </div>
                    <div className="Project4">
                        <h3>Project 4</h3>
                        <p>Description</p>
                        <div>Image</div>
                        <Link to="/">Github </Link>
                        <Link to="/">Live site </Link> 
                    </div>
                </main>
            </div>
        );
    }
}

export default WebPage; 