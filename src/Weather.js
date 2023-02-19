import React, { useState} from "react";
import "./Weather.css";
import axios from "axios";
import {MagnifyingGlass} from "react-loader-spinner";
import WeatherToday from "./WeatherToday";

export default function Weather(props){
	let [weatherData, setWeatherData] = useState({ready: false});
	if (weatherData.ready){
    return(
        <div className = "Weather">
	        <div className="container"> 
		        <div className="search-and-city-name">
			        <form id="search">
				        <div className="input-group mb-3 search-field text-in-search">
					        <input type="text" className="form-control" id = "search-enjine" placeholder="Enter a city" aria-label="Recipient's username"
					        aria-describedby="searchfield for a city" autoComplete="off" autoFocus="on" />
					        <input type="submit" className="btn btn-outline-secondary" id="button-addon2" />
					        <input type="submit" value = "Current" className="btn btn-outline-secondary" id="button-addon3" />
				        </div>
			        </form>
		        </div>
				<WeatherToday data = {weatherData} city = {props.city}/>
	        </div>
        </div>
    )
	}
	else{
		function handleLink(response){
			console.log(response.data);
			setWeatherData({
				ready: true,
				humidity: response.data.main.humidity,
				temp: Math.round(response.data.main.temp),
				wind: Math.round(response.data.wind.speed),
				icon: response.data.weather[0].icon,
				description: response.data.weather[0].description,
				date: new Date (response.data.dt*1000)
			})
		}
		let APIKey = "c119ffef35b7245a5e03b6e5724ae961";
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.city}&appid=${APIKey}&units=metric`;
		axios.get(url).then(handleLink);
		return(
			<MagnifyingGlass
  			visible={true}
  			height="80"
  			width="80"
  			ariaLabel="MagnifyingGlass-loading"
  			wrapperStyle={{}}
  			wrapperClass="MagnifyingGlass-wrapper"
  			glassColor = '#c0efff'
  			color = '#e15b64'/>
		)
	}
}