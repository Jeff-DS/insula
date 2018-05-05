import React from 'react';

class SearchBar extends React.Component {

    constructor(props) {
        super(props);
    }
    
    // TODO: keep some image in ../images/ and refer to that rather than external URL
    render(){
        return (
            <div className= "SearchBar">
                <img src = "https://use.fontawesome.com/releases/v5.0.10/svgs/solid/search.svg" />
                <input type="text" />
            </div>
        )
    }
    
}
