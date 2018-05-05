import React from 'react-js';

const NavBar = (username) => (
  <div className="NavBar">
    <div id="site-name">Insula</div>
    <div id="username">{username}</div>
    <div id="settings">
      <a href = "/settings">
        <img src="./images/settings-icon.png" />
      </a>
    </div>
  </div>
);

export default NavBar;
