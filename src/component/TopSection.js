import React from "react";
import './TopSection.css';

class TopSection extends React.Component {

    render () {

        return (
            <div className="top bk">
                <h1><strong>Mr. Bean <br/>Clicky Game!</strong></h1>
                <p>Click on an image to earn points, but don't click on any more than once!</p>
            </div>
        )
    }
};

export default TopSection;