import React, { useState } from "react";

export default function Units(props){
    let [units, setUnits] = useState("celsius");
    function showFarenheit(event){
        event.preventDefault();
        setUnits("farenheit");
    }
    function showCelsius(event){
        event.preventDefault();
        setUnits("celsius");
    }
    if (units === "celsius"){
        return(
            <div className= "Units">
                <span id="temperature">{props.temp}</span>
		        <span id="celsius" > 
                °C</span>| <a href= "/" onClick= {showFarenheit}>°F</a>
            </div>
        )
    }else{
        let f = Math.round(props.temp *9/5 + 32);
        return(
            <div className= "Units">
                <span id="temperature">{f}</span>
		        <a href= "/" id="celsius" 
                 onClick= {showCelsius}> 
                °C</a>| <span  onClick= {showFarenheit}>°F</span>
            </div>
        )
    }
}