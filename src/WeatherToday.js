import React from "react";
import DisplayDate from "./DisplayDate";

export default function WeatherToday(props){
    let link =`http://openweathermap.org/img/wn/${props.data.icon}@2x.png`;
    return(
        <div className = "WeatherToday">
            <h1 className="city-name">{props.data.cityName}</h1>
	            <div className="whole-page">
		            <article className = "weather-today">
			            <div className="row">
				            <div className="col-6 p-3">
					            <img className = "img-fluid" src={link} alt = {props.data.description}/>
				            </div>
				            <div className="col-6 p-3 centered">
					            <h2 className="vertical-centered" id = "time"><DisplayDate date = {props.data.date}/></h2>
				            </div>
				            <div className="col-6 p-3 centered">
					            <h2 className="vertical-centered"> 
						        <span id="temperature">{props.data.temp}</span>
						        <span id="celsius" className = "inactive"> °C</span>| <span id="farengeit">°F</span>
						        </h2>
				            </div>
				            <div className="col-6 p-3 centered">
					            <h3 className="preciration vertical-centered">💧 <span id="humidity">{props.data.humidity}</span>% <br/> 💨 <span id="wind">{props.data.wind}</span>km/h</h3>
				            </div>
			            </div>
		            </article>
		            <p className="developer"> <a href="https://github.com/O-l-i-a/weather-application">Open-sourse code</a> by Olha Melnyk</p>
	            </div>
        </div>
    )
}