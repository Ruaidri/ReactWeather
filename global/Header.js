import React, { Component } from 'react';

class Header extends Component {
  render() {
    return(
      <div>
        <div className="navbar navbar-inverse bg-inverse">
          <div className="border container d-flex justify-content-between">
            <a href="http://weeklywebapps.com" className="navbar-brand">WEEKLY WEB APPS</a>
          </div>
        </div>

        <div className="pt-4">
          <div className="bg-white text-center pt-5 mt-2">
            <h1 className="pb-5 app-title">Current Weather</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
