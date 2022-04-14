import React from "react";
import { useState } from "react";
import Weather from "../Weather API/Weather";
import "./Input.css"



export default () => {

    const [location, setLocation] = useState();
    const [weather, setWeather] = useState([]);
    const [showForecast, setShowForecast]= useState(false);
        
      const onChange = (event) => {
        const {name, value} = event.target;
        setLocation(event.target.value)
      }
    

      const myWeather = async () => {
  
        let reqWeather = await Weather.getWeather(location);
        setWeather(reqWeather);
        setShowForecast(true);
      }


      return (
        <div>
          <div className="input--container">
              <input className="input--text" type="text"  name="location" placeholder='Localização' onChange={onChange}></input>
              <input className="input--button" type="submit" value={""} onClick={myWeather} ></input>
          </div>

          {showForecast &&
            <div className="forecast--container">

              <div className="forecast--name">
                <h1 className="forecast--city">{weather[0].item.location.name}</h1>
                <h3 className="forecast--country">{weather[0].item.location.country}</h3>
              </div>
        
             
              <div className="forecast--first">
                <h2 className="forecast--celsius">{weather[0].item.current.temp_c}º</h2>
                <img src={weather[0].item.current.condition.icon} height={100} ></img>
              </div>

              <p className="forecast--text">{weather[0].item.current.condition.text}</p>

            </div>
          }
          


        </div>
      )







}