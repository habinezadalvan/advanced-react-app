import React from 'react';
import ReactDom from 'react-dom';
import 'dotenv/config';
import WeatherDisplay from './components/WeatherDisplay';
import Loader from './components/Loader';


const season = async (lat, long) => {
  const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&
  exclude=hourly,daily&appid=9c144db75057ffe0fcaef243e4ce21a7`;
    const info = await fetch(api).then(res => res.json()).then(data => data.current.temp).catch(err => console.log('err', err.message));
    return Math.round((info -273.15) * 10) / 10;
}

class App extends React.Component{
  state = {err: null, temp: null, time: new Date().toLocaleTimeString()};


  async componentDidMount(){
    window.navigator.geolocation.getCurrentPosition( async (position) => {
      const temperature = await season(position.coords.latitude, position.coords.longitude);
      this.setState({temp: temperature})
    }, err => {this.setState({err: err.message})});

    setInterval(() => {
      this.setState({time: new Date().toLocaleTimeString()});
    }, 1000);
  }

  render() {
    return (
    <div>{(this.state.err && !this.state.temp)
      ? (<div>Error: {this.state.err}</div>) 
      : (!this.state.err && this.state.temp)
      ? <WeatherDisplay temp = {this.state.temp} time={this.state.time}/>
      : <Loader/> 
      }
      </div>
    );
  };

}

ReactDom.render(<App/>, document.querySelector('#root'));