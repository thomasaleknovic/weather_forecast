import React from "react";
import App from "../App";
import './ForecastDay.css'


export default () => {


    function weatherHour() {
        
        
        const forecastHour = (weather[0].item.forecast.forecastday[0].hour)

        // for (let i=0; i < forecastHour.length; i++ ){

           
        //     //   console.log(forecastHour[i].time)
        //     //   console.log(forecastHour[i].temp_c)
        //     }
        
      }

      return (

        <div>

            {forecastHour.map(time => (  
                <li>  
                {time}  
                </li>
                )
            )}
         </div>

      )

}