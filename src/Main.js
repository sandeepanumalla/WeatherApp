import React,{useState} from 'react'
import DisplayWeather from './DisplayWeather'



function Main() {
const [values, setValues] = useState({
    City:"",
    Country:"",
    error:false
})
const [Weather, setWeather] = useState([])

const {City,Country,error} = values
const handleChange =(e)=>{
    let name = e.target.name;
    let value = e.target.value;

    /* console.log("NAME",name);
    console.log("values",value) */
    if(name == "City"){
        setValues({...values,City:value})
    }
    if(name == "Country") { 
        setValues({...values,Country:value}) 
    }
}

const apiCall =  (e)=>{
    if(City === "" || Country === ""){
        alert("Enter all details")
    }
    e.preventDefault();
    const a = `http://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&appid=0b6c2be42dbc7580d73086a5515ae0e5`;
    console.log("sdf",a)
    
    const data =  fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${City},${Country}&appid=0b6c2be42dbc7580d73086a5515ae0e5`
    ).then(response =>{
        
        return response.json()})
    .then(data =>{
       

        setWeather({
        data:data
    })
})
    
    
 
    
    

}

console.log(Weather.data)

    return (
        <div>
        <div className="header">
        <div>
        <h2>Weather App</h2>
        </div>
        <div className="form">
        <label className="city-label">City:</label>
        <input  onChange={e => handleChange(e)} className="city-input" name="City" type="text"></input>
        <label className="country-label">Country:</label>
        <input  onChange={e => handleChange(e)} className="city-input" name="Country" type="text"></input>
        </div>
        <div className="search">
        <button type="submit" onClick={(e)=>{apiCall(e)}}>Search</button>
        </div>
        </div>
            {
                Weather.data !== undefined ?
                <div>
            <DisplayWeather data={Weather.data}></DisplayWeather>
            </div>
            :/* <div><h5>please Enter City and Country</h5></div> */null

            }
        
        </div>
    )
}

export default Main
