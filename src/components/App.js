import React, { Component } from "react";
import Home from "./Home";
import CommonSection from "./CommonSection";
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

       this.setState({images : response.data.results, input: inputValue})
    }

  render() {
    console.log(this.state.images)
    return (
      <div>
        <Home onSubmit = {this.onSearchSubmit}/>
        <SecondSection  images ={this.state.images} input ={this.state.input}/>
        {/* <CommonSection /> */}
      </div>
    );
  }
}

export default App;
