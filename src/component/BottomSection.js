import React from "react";
import Card from "./Card";
import './BottomSection.css';

class BottomSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            image: "",
            match: false,
            matchCount: 0
        };
    }

    handleBtnClick = event => {
        // Get the data-value of the clicked button
        const btnType = event.target.attributes.getNamedItem("data-value").value;
        // Clone this.state to the newState object
        // We'll modify this object and use it to set our component's state
        const newState = { ...this.state };

        if (btnType === "pick") {
            // Set newState.match to either true or false depending on whether or not the dog likes us (1/5 chance)
            newState.match = 1 === Math.floor(Math.random() * 5) + 1;
      
            // Set newState.matchCount equal to its current value or its current value + 1 depending on whether the dog likes us
            if (newState.match) {
              newState.matchCount += 1
            }
          } else {
            // If we thumbs down'ed the dog, we haven't matched with it
            newState.match = false;
          }
        }

render() {

    return (
        <div className="container">
            <div className="row">
                <h2>Score: {this.state.matchCount} | Top Score: </h2>
                <Card handleBtnClick={this.handleBtnClick} />
            </div>
        </div>
    )
}
};

export default BottomSection;

