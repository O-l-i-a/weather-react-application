import React, { useState} from "react";
import "./Weather.css";
import axios from "axios";
import {MagnifyingGlass} from "react-loader-spinner";
import WeatherToday from "./WeatherToday";

export default function Weather(props){
	let [weatherData, setWeatherData] = useState({ready: false});
	let [city, setCity] = useState(props.city);
	function handleResponse(response){
		console.log(response.data);
		setWeatherData({
			cityName: response.data.name,
			ready: true,
			humidity: response.data.main.humidity,
			temp: Math.round(response.data.main.temp),
			wind: Math.round(response.data.wind.speed),
			icon: response.data.weather[0].icon,
			description: response.data.weather[0].description,
			date: new Date (response.data.dt*1000)
		})
	}
	function search() {
		let APIKey = "c119ffef35b7245a5e03b6e5724ae961";
		let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKey}&units=metric`;
		axios.get(url).then(handleResponse);
	}
	function handleLink(event){
		event.preventDefault();
		search();	
	}
	function handleChange(event){
		setCity(event.target.value);
	}
	if (weatherData.ready){
    return(
        <div className = "Weather">
	        <div className="container"> 
		        <div className="search-and-city-name">
			        <form id="search" onSubmit={handleLink}>
				        <div className="input-group mb-3 search-field text-in-search">
					        <input type="search" className="form-control" id = "search-enjine" placeholder="Enter a city" aria-label="Recipient's username"
					        aria-describedby="searchfield for a city" autoComplete="off" autoFocus="on" onChangeCapture={handleChange}/>
					        <input type="submit" className="btn btn-outline-secondary" id="button-addon2" />
				        </div>
			        </form>
		        </div>
				<WeatherToday data = {weatherData} />
	        </div>
        </div>
    )
	}
	else{
		
		search();
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