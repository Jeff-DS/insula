import React from 'react';
import Card from './Card';

class CardCarousel extends React.Component {
    
    constructor(props) {
        super(props);
    }
     
    render() {
        
        return (
            <div>
                {this.props.issues.map(() => (<Card />))} // TODO
            </div>
        )
    }
}

export default CardCarousel;
