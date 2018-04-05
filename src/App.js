import React from "react";
import {Route,NavLink,BrowserRouter} from "react-router-dom";
import Home from "./components/Home";
import Courses from "./components/Courses";
import Contact from "./components/Contacts";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <h1>IADT Single Page App (SPA)</h1>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/courses">Courses</NavLink></li>
            <li><NavLink to="/contacts">Contact</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Home}/>
            <Route path="/courses" component={Courses}/>
            <Route path="/contacts" component={Contact}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
