import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";


import { useState } from "react";

export default function WeatherApp() {
    const [weatherInfo, setWeatherInfo] = useState({
        city: "Delhi",
        feelsLike: 34.96,
        temp: 35.05,
        tempMin: 35.05,
        tempMax: 35.05,
        humidity: 31,
        weather: "haze",

    });


    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:"center"}}>
            <h2>Weather App by Laharika</h2>
            <SearchBox updateInfo = {updateInfo}  />
            <InfoBox info={weatherInfo} />
        </div>
    )
}