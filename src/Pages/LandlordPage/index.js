import React from 'react'

import LandlordDetailContainer from './LandlordDetailContainer'
import LandlordUtilityBar from './LandlordUtilityBar'
import NavBar from '../../reused/NavBar'
import CardCarousel from '../../reused/CardCarousel'

class LandlordPage extends React.Component {

  constructor(props) {
    super(props);
    // const self = this; // <-- TODO: decide about using this later
    this.handleSearchEvent = this.handleSearchEvent.bind(this);
    this.state =  {
                    newIssues: [],
                    outstandingIssues: []
                  };
  }

  // TODO: implement this
  handleSearchEvent = (e) => {
    console.log("this.state in handleSearchEvent: \n" + this.state);
    console.log(e);
    const searchTerm = e.target.value;
    console.log("Search term: " + searchTerm);
  }

  render() {
    return (
      <div>
        <NavBar username={this.props.username}/>
        <CardCarousel issues={[{}, {}]}/>
        <LandlordUtilityBar searchHandler={this.handleSearchEvent}/>
        <LandlordDetailContainer />
      </div>
    )
  }
}

export default LandlordPage;
