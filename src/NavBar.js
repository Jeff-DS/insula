import React from 'react-js';

const NavBar = (props) => (
  <div classname="NavBar">
    <div id="site-name">Insula</div>
    <div id="username">{props.username}</div>
    <div id="settings">
      <img src="./images/settings-icon.png" />
    </div>
  </div>
)

export default NavBar;
