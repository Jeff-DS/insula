import React from react-js

import LandlordDetailContainer from LandlordDetailContainer
import LandlordUtilityBar from LandlordUtilityBar
import NavBar from NavBar
import NotificationsCarousel from NotificationsCarousel

class LandlordPage extends React.Component {

  constructor(props) {
    super(props);
    // const self = this; // <-- TODO: decide about using this later
    this.handleSearchEvent = this.handleSearchEvent.bind(this);
    this.state =  {
                    new: [],
                    outstanding: []
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
      <NavBar username={this.props.username}/>
      <NotificationsCarousel />
      <LandlordUtilityBar searchHandler={this.handleSearchEvent}/>
      <LandlordDetailContainer />
    )
  }
}

export default LandlordPage;
