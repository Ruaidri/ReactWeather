import React from "react";

const API_KEY = "0902c92365e5e056bf44e5d899485ff1";

class Forecast extends React.Component {
  constructor(){
      super();
      this.state = {
        forecast: []
      };
    }

    componentWillMount() {
         fetch(`http://api.openweathermap.org/data/2.5/forecast?id=2964574&APPID=${API_KEY}&units=metric`)
        .then(response => {
          if(response.ok) return response.json();
          throw new Error('Request failed.');
        })
        .then(data => {
          this.setState({
            forecast: data.list
          });
          console.log(data);
        })
        .catch(error => {
          console.log(error);
        });
      }

    render() {
      let url = "http://openweathermap.org/img/w/";
      let png = ".png"
      const list = this.state.forecast.map( (u, i) => {
          return <Forecasts key={u.dt} desc={u.weather["0"].description} icon={url + u.weather["0"].icon +png} temp={u.main.temp} wind={u.wind.speed} date={u.dt_txt} />;
      });
      return (
        <div>
          <h1>Dublins Weather Forecast:</h1>
          <h2>Every 3 Hour Report</h2>
          {list}
        </div>
      );
    }
  }

  class Forecasts extends React.Component {
    render() {
      return (
        <div className="content">
        <div className="col-md-3">
            <div class="card">
            <div class="card-body">
              <h4 class="card-title">Date: {this.props.date}</h4>
              <img class="card-img-top" src={this.props.icon} alt="Card image"></img>
              <p class="card-text">{this.props.desc}</p>
              <h4>Temperature: {this.props.temp}&deg;</h4>
              <h5>Wind Speed: {this.props.wind}</h5>
            </div>
          </div>
          </div>
        </div>
      );
    }
  }


export default Forecast;
