import React from "react";
import {Route,NavLink,BrowserRouter} from "react-router-dom";
import Courses from "./Courses";
import Contact from "./Contacts";
import App from "../App";

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/courses">Popular Locations</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route path="/courses" component={Courses}/>
            <Route path="/contact" component={Contact}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
