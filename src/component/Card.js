import React from "react";
import './Card.css';
// import PropTypes from 'prop-types';

class Card extends React.Component {
    
    render() {
        let images = ['1', '2', '3', '4', '5', '6', '7', '8'].map( (image, index) => {
            return <img key={index} className="img-responsive" alt="" src={require(`../images/${image}.jpg`)} />
        } );
        return (
                 <div class="col-md-3 col-sm-6 col-xs-12 well">
                    { images }
                </div>
        );
    }
}

export default Card;