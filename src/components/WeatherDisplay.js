import '../weatherDisplay.css';
import React from "react";
import Loader from './Loader';

const warmMorning =
  "https://images.pexels.com/photos/1477430/pexels-photo-1477430.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const warmAfternoon =
  "https://images.pexels.com/photos/221471/pexels-photo-221471.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const warmNight =
  "https://images.pexels.com/photos/1154610/pexels-photo-1154610.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
const sunnyDay =
  "https://images.pexels.com/photos/3768/sky-sunny-clouds-cloudy.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";

const WeatherDisplay = ({ temp, time }) => {

  const hour = new Date().getHours();
  return (
    <div className="container">
      {temp <= 18 ? (
        <div className="card">
          <p>It's cold outside</p>
          <span>The current temperature is {temp} Degree Celcius</span>
        <p>{time}</p>
        </div>
      ) : temp > 18 && temp <= 25 ? (
        <div className="card">
          {hour >= 6 && hour <= 12 ? (
            <img src={warmMorning} alt="nature" className="img" />
          ) : hour > 12 && hour < 18 ? (
            <img src={warmAfternoon} alt="warm afternoon" className="img" />
          ) : (
            <img src={warmNight} alt="night" className="img" />
          )}
          <div className="img model"></div>
          <div className="text">
            <p>
              It's <span className="warm">warm</span> outside
            </p>
            <p>The current temperature is</p>
            <span className="warm">
              {" "}
              {temp} <span>&#8451;</span>
            </span>
          <p>{time}</p>
          </div>
        </div>
      ) : (
        <div className="card">
          {hour >= 6 && hour <= 12 ? (
            <img src={sunnyDay} alt="nature" className="img" />
          ) : hour > 12 && hour < 18 ? (
            <img src={sunnyDay} alt="warm afternoon" className="img" />
          ) : (
            <img src={warmNight} alt="night" className="img" />
          )}
          <div className="img model"></div>
          <div className="text">
            <p>
              It's <span className="hot">Hot</span> outside
            </p>
            <p>The current temperature is</p>
            <span className="hot">
              {" "}
              {temp} <span>&#8451;</span>
            </span>
            <p>{time}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherDisplay;
