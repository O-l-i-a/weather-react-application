import React, {useState, useEffect} from "react";
import axios from "axios";
import ForecastDay from "./ForecastDay";


export default function WeatherForecast(props) {
  let[loaded, setLoaded] = useState(false);
  let[forecast, setForecast] = useState(null);
  useEffect(()=>{
    setLoaded(false)
  }, [props.lon])
  if (loaded){
    return (
      <div className="WeatherForecast weather-the-next-days">
        {forecast.map(function(daily, index){
          if (index < 6){
            return(
              <div key = {index}>
                <ForecastDay key = {index} data = {daily}/>
              </div>
              )
          }else{return null}
        })}
      </div>
    );
    }
    else{
      function handleResponse(response) {
        setForecast(response.data.daily);
        setLoaded(true);
      }
      let apiKey = "2daf65f0cdaa917f11026e8a128ce271";
      let longitude = props.lon;
      let latitude = props.lat;
      let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
      axios.get(apiUrl).then(handleResponse);
    }
    return(null);
}
    