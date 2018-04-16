import React from "react";
import {Route,NavLink,BrowserRouter} from "react-router-dom";
import Forecast from "./Forecast";
import App from "../App";

class Main extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <ul className="header">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/forecast">Local Forecast</NavLink></li>
          </ul>
          <div className="content">

            <Route path="/forecast" component={Forecast}/>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default Main;
