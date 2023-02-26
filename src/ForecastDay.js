import React from "react";
import DisplayIcon from './DisplayIcon';
import Units from "./Units.js";

export default function ForecastDay(props){
    function day(){
        let date = new Date (props.data.dt *1000);
        let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thuesday", "Friday", "Saturday"];
        let day = days[date.getDay()];
        return day;
    }
    function max(){
        let max = Math.round(props.data.temp.max);
        return max;
    }
    function min(){
        let min = Math.round(props.data.temp.min);
        return min;
    }
    function humidity(){
        let humidity = props.data.humidity;
        return humidity;
    }
    function windSpeed(){
        let speed = Math.round(props.data.wind_speed);
        return speed;
    }
    return(
        <div className= "ForecastDay">
        <div className="row next-day">
        <div className="col-2">
        <DisplayIcon icon = {props.data.weather[0].icon} size = {50}/>
        </div>
        <div className="col-3 centered temperatur-next-day">
          <Units temp= {max()}/>
        </div>
        <div className="col-4 nameCentered">
          <div className="day-name">
            {day()}
          </div>
          <div className="preciration-next-day">
            💧 {humidity()}% 💨  {windSpeed()}km/h
          </div>
        </div>
        <div className="col-3 centered temperatur-next-day">
        <Units temp= {min()}/>

        </div>
      </div>
      </div>
    )    
}