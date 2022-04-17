import React from "react";
import { useState } from "react";
import {useEffect} from "react";
import Weather from "../Weather API/Weather";
import "./Input.css"
import ForecastDay from "../ForecastDay/ForecastDay";



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

      useEffect(()=>{
        const loadAll = async () => {
    
          let locationIp = await Weather.getIp();
          let userLocation = locationIp[0].item.city
          let reqWeather = await Weather.getWeather(userLocation);
          setWeather(reqWeather);
          setShowForecast(true);
        }
        loadAll()
      }, []);



    
      


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
                <h2 className="forecast--celsius">{weather[0].item.current.temp_c}<span>ºC</span></h2>
                <img src={weather[0].item.current.condition.icon} height={64} ></img>
              </div>

              <p className="forecast--text">{weather[0].item.current.condition.text}</p>
              <p className="forecast--feels"> Sensação de {Math.floor(weather[0].item.current.feelslike_c)}ºC</p>
           

            <div>
                <div className="forecast--daily">
                  {weather[0].item.forecast.forecastday[0].hour.map((forecastDay) =>

                     <div className="forecast--hours">
                       <p className="hours--time">{forecastDay.time.slice(-5)}</p>
                       <img className="hours--icon" src={forecastDay.condition.icon} height={40} ></img>
                       <p className="hours--temp_c">{Math.round(forecastDay.temp_c)}º</p>
                      </div>
                  )}
                </div>

                
              
            </div>  

            </div>
          }
          


        </div>
      )







}