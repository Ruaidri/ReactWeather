import React, { Component } from 'react';

import Titles from "./Titles";
import Form from "./Form";
import Weather from "./Weather";
import MapCom from "./MapCom";
import Main from "./Main";


import logo from '../logo.svg';
import '../App.css';
import Header from '../global/Header';
import Footer from '../global/Footer';

const API_KEY = "0902c92365e5e056bf44e5d899485ff1";

class App extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined,

    long: undefined,
    lat: undefined
  }


  getWeather = async (e) => {
      e.preventDefault();
      const city = e.target.elements.city.value;
      const country = e.target.elements.country.value;
      const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}&units=metric`);
      const data = await api_call.json();
      console.log(data);

      if(city===data.name && country){
        this.setState({
          temperature: data.main.temp,
          city: data.name,
          country: data.sys.country,
          humidity: data.main.humidity,
          description: data.weather[0].description,
          error: "",
          long: data.coord.lon,
          lat: data.coord.lat
        });
      } else{
        this.setState({
          temperature: undefined,
          city: undefined,
          country: undefined,
          humidity: undefined,
          description: undefined,
          error: "Please enter a valid location, ie. Dublin Ireland",
          long: undefined,
          lat: undefined
        });
      }
  }

  render() {
    return (
      <div>
      <Header/>
        <div className="wrapper">
          <div className ="main">
            <div className="container">
              <div className="row">
                <Main/>
                <div className="col-xs-5 map-container">

                    <MapCom
                      containerElement={<div style={{height:100+'%'}} />}
                      mapElement={<div style={{height:100+'%'}} />}

                      long={this.state.long}
                      lat={this.state.lat}/>
                </div>

                <div className="col-xs-7 form-container">
                  <Form getWeather={this.getWeather}/>
                  <Weather temperature={this.state.temperature}
                           city={this.state.city}
                           country={this.state.country}
                           humidity={this.state.humidity}
                           description={this.state.description}
                           error={this.state.error}/>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default App;
