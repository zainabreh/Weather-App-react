import React from "react";
import { useEffect, useState,createContext } from "react";
import Clear from '../assets/clear.gif'
import clouds from '../assets/cloudy.gif'
import Thunderstorm from '../assets/Rainy.gif'
import Snow from '../assets/Snow.gif'
import snowy from '../assets/snowy.png'
import sunny from '../assets/sunny.png'
import cloudy from '../assets/cloudy.png'
import rainy from '../assets/rainy.png'
import storm from '../assets/storm.png'


export const DataProvider = createContext();

const Datastore = ({ children }) => {
  const [city, setCity] = useState("islamabad");
  const [background, setBackground] = useState("");
  const [icon, setIcon] = useState("");
  const [location, setLocation] = useState("");
  const [values,setValues] = useState('');
  const API_KEY = "44049957cd39c54716054a34be36db63";

  const NewCity = (city) => {
    setCity(city);
  };

  const weatherCondition = (bg)=>{
    if(bg == 'clear'){
          setBackground(Clear);
          setIcon(sunny);
        }
        else if(bg == 'clouds'){
          setBackground(clouds);
          setIcon(cloudy);
        }
        else if(bg == 'rain' || bg == 'drizzle'){
          setBackground(drizzle);
          setIcon(rainy);
        }
        else if(bg == 'snow'){
          setBackground(Snow);
          setIcon(snowy);
        }
        else if(bg == 'thunderstorm'){
          setBackground(Thunderstorm);
          setIcon(storm);
        }
      }

  // const details = ()=>{

  // }

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
        let icon = data.list[0].weather[0].main.toLowerCase();
        weatherCondition(bg,icon);
        let country = data.city.country;
        let city = data.city.name;
        let locate = `${city} - ${country}`;
        setLocation(locate);
         

        // details();

      })
      .catch((error) => {
        alert("Try Another city or Enter specific city...",error);
      });

  }, [city]);

  return (
    <>
      <DataProvider.Provider value={{ NewCity, background, icon, location}}>
        {children}
      </DataProvider.Provider>
    </>
  );
};

export default Datastore;
