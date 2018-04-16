import SearchBar from 'SearchBar';

import React from 'react';

class LandlordUtilityBar extends React.Component {
    
    constructor(props) {
        super(props);
        this.state =  {};
    }
    
    render() {
        return (
            <div>
                <button className="compose"></button>
                <button className="compose"></button>
                <SearchBar />
            </div>
        );
    }
    
    
    
}

