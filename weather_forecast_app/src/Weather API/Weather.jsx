import React from "react";
import App from "../App";
import Input from "../Input/Input";

const API_KEY = 'ade4a8f4fc3245439e0103530221404';
const API_BASE = 'https://api.weatherapi.com/v1';


const basicFetch = async (endpoint) => {

    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json;
}

export default {
    
    getWeather: async (location) => {

        return [

            {
                tag: 'weatherforecast',
                title: 'Weather Forecast',
                item: await basicFetch(`/current.json?key=${API_KEY}&lang=pt&q=${location}`)
            }
        ];
    }
}