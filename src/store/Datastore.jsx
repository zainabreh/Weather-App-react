import React from "react";
import { useEffect, useState,createContext } from "react";
import clear from '../assets/clear.gif'
import cloudy from '../assets/cloudy.gif'
import rainy from '../assets/Rainy.gif'
import snow from '../assets/Snow.gif'
import drizzle from '../assets/drizzle.gif'

export const DataProvider = createContext();

const Datastore = ({ children }) => {
  const [city, setCity] = useState("islamabad");
  const [background, setBackground] = useState("");
  const API_KEY = "44049957cd39c54716054a34be36db63";

  const NewCity = (city) => {
    setCity(city);
  };

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
        // setting BAckground Images
        if(bg == 'clear'){
          setBackground(clear);
        }
        else if(bg == 'cloudy'){
          setBackground(cloudy);
        }
        else if(bg == 'rainy' || 'thunderstorm'){
          setBackground(rainy);
        }
        else if(bg == 'snow'){
          setBackground(snow);
        }
        else if(bg == 'drizzle'){
          setBackground(drizzle);
        }
      })
      .catch((error) => {
        alert("Try Another city or Enter specific city...",error.message);
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
