import React, { useState} from "react";
import "./Weather.css";
import axios from "axios";
import {MagnifyingGlass} from "react-loader-spinner";
import DisplayDate from "./DisplayDate";

export default function Weather(props){
	let [weatherData, setWeatherData] = useState({ready: false});
	if (weatherData.ready){
		let link =`http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;
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
                    <h1 className="city-name">{props.city}</h1>
		        </div>
	            <div className="whole-page">
		            <article className = "weather-today">
			            <div className="row">
				            <div className="col-6 p-3">
					            <img className = "img-fluid" src={link} alt = {weatherData.description}/>
				            </div>
				            <div className="col-6 p-3 centered">
					            <h2 className="vertical-centered" id = "time"><DisplayDate date = {weatherData.date}/></h2>
				            </div>
				            <div className="col-6 p-3 centered">
					            <h2 className="vertical-centered"> 
						        <span id="temperature">{weatherData.temp}</span>
						        <span id="celsius" className = "inactive"> °C</span>| <span id="farengeit">°F</span>
						        </h2>
				            </div>
				            <div className="col-6 p-3 centered">
					            <h3 className="preciration vertical-centered">💧 <span id="humidity">{weatherData.humidity}</span>% <br/> 💨 <span id="wind">{weatherData.wind}</span>km/h</h3>
				            </div>
			            </div>
		            </article>
		            <p className="developer"> <a href="https://github.com/O-l-i-a/weather-application">Open-sourse code</a> by Olha Melnyk</p>
	            </div>
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