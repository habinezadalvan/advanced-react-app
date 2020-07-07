import React from 'react';
import ReactDom from 'react-dom';
import WeatherDisplay from './components/WeatherDisplay';
import Loader from './components/Loader';
import config from './config.js';

const {API_KEY, APP} = process.env;


const season = async (lat, long) => {

  console.log('API_KEY', API_KEY);
  console.log('APP', APP);
  const api = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${long}&
  exclude=hourly,daily&appid=${config.api_key}`;
    const info = await fetch(api).then(res => res.json()).then(data => data.current.temp).catch(err => console.log('err', err.message));
    return Math.round((info -273.15) * 10) / 10;
}

class App extends React.Component{
  state = {err: null, temp: null, time: new Date().toLocaleTimeString()};


  async componentDidMount(){
    console.log('APP ---', APP);
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