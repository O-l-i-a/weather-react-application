import React from "react";
import DisplayDate from "./DisplayDate";
import DisplayIcon from "./DisplayIcon";
import Units from "./Units";

export default function WeatherToday(props){
    return(
        <div className = "WeatherToday">
            <h1 className="city-name">{props.data.cityName}</h1>
	            <div className="whole-page">
		            <article className = "weather-today">
			            <div className="row">
				            <div className="col-6 p-3">
                                <DisplayIcon icon = {props.data.icon} size = {150}/>
				            </div>
				            <div className="col-6 p-3 centered">
					            <h2 className="vertical-centered" id = "time"><DisplayDate date = {props.data.date}/></h2>
				            </div>
				            <div className="col-6 p-3 centered">
					            <h2 className="vertical-centered"> 
						        
						        <Units temp = {props.data.temp}/>
						        </h2>
				            </div>
				            <div className="col-6 p-3 centered">
					            <h3 className="preciration vertical-centered">💧 <span id="humidity">{props.data.humidity}</span>% <br/> 💨 <span id="wind">{props.data.wind}</span>km/h</h3>
				            </div>
			            </div>
		            </article>
	            </div>
        </div>
    )
}