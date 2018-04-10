import React from "react";

const API_KEY = "0902c92365e5e056bf44e5d899485ff1";

class Courses extends React.Component {
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
          console.log(data.list);
        })
        .catch(error => {
          console.log(error);
        });
      }

    render() {
      //console.log(forecast["0"]);
      const list = this.state.forecast.map( (u, i) => {
          return <Forecast key={u[i]} name={`${u[i]} ${u[i]}`} temp={u[i]} />;
      });
      return (
        <div>
          <h1>Dublins Weather Forecast:</h1>
          {list}
        </div>
      );
    }
  }

  class Forecast extends React.Component {
    render() {
      return (
        <div style={{'borderStyle': 'dotted'}}>
          <h3>{this.props.name}</h3>
          <p>{this.props.temp}</p>
        </div>
      );
    }
  }


export default Courses;
