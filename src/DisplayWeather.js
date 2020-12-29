import React from 'react'

function DisplayWeather(props) {
    console.log("props",props);
   const d = new Date()
let localTime = d.getTime()
let localOffset = d.getTimezoneOffset() * 60000
let utc = localTime + localOffset
let city = utc + (1000 * props.data.timezone) 
let nd = new Date(city).toLocaleTimeString()

var sec = props.data.sys.sunrise;
var date = new Date(sec * 1000);
var timestr = date.toLocaleTimeString();
console.log(date,timestr)
console.log("nd",nd)
    console.log("props",new Date(props.data.dt*1000 -(props.data.timezone*1000) ).toLocaleTimeString());

    return (
        <div>
        <div className="main-card">
            <h5>{props.data.name+", "}{props.data.sys.country+" Weather"}</h5>
            <p>{" "+ new Date(city).toLocaleTimeString()}</p>
            
            <h4>{Math.floor(props.data.main.temp-273.15 )}<sup>o</sup></h4>
            <span>
            <h4>{props.data.weather[0].main}</h4> 
            </span>
           

        </div>
        <div className="details">
        <div className="column-1">
        <table>
        <tr className='df'>
        <td><h4>High/Low </h4></td>
        <td><span>{Math.floor(props.data.main.temp_max - 273.15)} / {Math.floor(props.data.main.temp_min - 273.15)}</span></td>
        </tr>
        <tr>
        <td><h4>Humidity </h4></td>
        <td><span>{props.data.main.humidity}% </span></td>
        </tr>
        <tr>
        <td><h4> Visibility</h4></td>
        <td><span>{props.data.visibility/1000}km</span></td>
        </tr>
        <tr>
        <td><h4>Pressure </h4></td>
        <td><span>{props.data.main.pressure} hPa </span></td>
        </tr>
        </table>
        </div>
        <div className="column-2">
        <table>
        <tr>
        <td><h4>Wind </h4></td>
        <td><span>{Math.floor(props.data.wind.speed*18/5)} km/hr</span></td>
        </tr>
        <tr>
        <td><h4>Wind Direction </h4></td>
        <td><span>{props.data.wind.deg}<sup style={{fontSize:"11px"}}>o</sup> </span></td>
        </tr>
        <tr>
        <td><h4> Sunrise</h4></td>
        <td><span>{new Date(props.data.sys.sunrise*1000).toLocaleTimeString()}</span></td>
        </tr>
        <tr>
        <td><h4>Sunset </h4></td>
        <td><span>{new Date(props.data.sys.sunset*1000).toLocaleTimeString()}</span></td>
        </tr>
        </table>
        </div>
        </div>
        </div>
    )
}

export default DisplayWeather
