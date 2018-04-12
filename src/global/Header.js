import React, { Component } from 'react';
import Titles from "../components/Titles";
import Main from "../components/Main";


class Header extends Component {
  render() {
    return(
      <div>
        <div className="navbar navbar-inverse bg-inverse">
          <div className="border container d-flex justify-content-between">
            <Titles/>
            
          </div>
        </div>
        <Main/>
      </div>
    );
  }
}

export default Header;
