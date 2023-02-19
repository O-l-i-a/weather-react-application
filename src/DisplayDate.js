import React from "react";

export default function DisplayDate(props){
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thuesday", "Friday", "Saturday"];
    let day = props.date.getDay();
    let hours = props.date.getHours();
    let minutes = props.date.getMinutes();
    if (hours < 10){
        hours = `0${hours}`
    }
    if (minutes < 10){
        minutes = `0${minutes}`
    }
    return(
        <div className="DisplayDate">
            {days[day]}
            <br />
            {hours}:{minutes}
        </div>
    )
}