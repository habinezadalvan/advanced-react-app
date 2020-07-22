import React, { Component } from "react";
import Home from "./Home";
import SecondSection from "./SecondSection";
import axiosInstance from '../api/unsplash';

class App extends Component {

    state = {images : [], input: ''}
    onSearchSubmit = async (inputValue) => {
      const response = await axiosInstance.get('/search/photos', {
        params: {
            query: inputValue
        },
       });

       this.setState({images : response.data.results, input: inputValue })
    }

    componentDidMount(){
      this.onSearchSubmit('cars');
    }
  render() {
    return (
      <div>
        <Home onSubmit = {this.onSearchSubmit}/>
        <SecondSection  images ={this.state.images} input ={this.state.input}/>
      </div>
    );
  }
}

export default App;
