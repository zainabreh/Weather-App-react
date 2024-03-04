import React from "react";
import { useEffect, useState,createContext } from "react";
import Clear from '../assets/clear.gif'
import clouds from '../assets/cloudy.gif'
import Thunderstorm from '../assets/Rainy.gif'
import Snow from '../assets/Snow.gif'
import drizzle from '../assets/drizzle.gif'

export const DataProvider = createContext();

const Datastore = ({ children }) => {
  const [city, setCity] = useState("islamabad");
  const [background, setBackground] = useState("");
  const API_KEY = "44049957cd39c54716054a34be36db63";

  const NewCity = (city) => {
    setCity(city);
  };

  const weatherCondition = (bg)=>{
    if(bg == 'clear'){
          setBackground(Clear);
        }
        else if(bg == 'clouds'){
          setBackground(clouds);
        }
        else if(bg == 'rain' || bg == 'drizzle'){
          setBackground(drizzle);
        }
        else if(bg == 'snow'){
          setBackground(Snow);
        }
        else if(bg == 'thunderstorm'){
          setBackground(Thunderstorm);
        }
      }

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
    )
      .then((res) => {
        if(!res.ok){
          throw new Error("Try Another city or Enter specific city...")
        }
        return res.json()
      })

      .then((data) => {
        console.log(data);
        let bg = data.list[0].weather[0].main.toLowerCase();
        weatherCondition(bg);

        console.log(bg);

      })
      .catch((error) => {
        alert("Try Another city or Enter specific city...",error);
      });

  }, [city]);

  return (
    <>
      <DataProvider.Provider value={{ NewCity, background }}>
        {children}
      </DataProvider.Provider>
    </>
  );
};

export default Datastore;
