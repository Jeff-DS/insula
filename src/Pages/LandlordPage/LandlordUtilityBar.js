import SearchBar from '../../reused/SearchBar';

import React from 'react';

class LandlordUtilityBar extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div>
                <button className="createBtn"></button>
                <button className="composeBtn"></button>
                <SearchBar />
            </div>
        );
    }
}

export default LandlordUtilityBar;