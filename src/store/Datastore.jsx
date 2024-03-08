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

  const [weeklyData,setWeeklyData] = useState([]);

  const [today,setDate] = useState(new Date());
  const [city, setCity] = useState("islamabad");
  const [background, setBackground] = useState("");
  const [icon, setIcon] = useState("");
  const [location, setLocation] = useState("");
  const [values,setValues] = useState({
    temperature: "",
    humidity: "",
    speed: "",
    weather: "",
  });

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

  const details = (temp,humidity,speed,weathercondition)=>{
    setValues({
      temperature: temp,
      humidity: humidity,
      speed: speed,
      weather: weathercondition,
    })
  }

  const Time = ()=>{ 
    useEffect(()=>{
      const timer = setInterval(()=>{
        setDate(new Date());
      },60*1000);

      return clearInterval(timer);
    },[]);

    const day = today.toLocaleDateString('en',{weekday:"long"});
    const date = `${day}, ${today.getDate()}, ${today.toLocaleDateString('en',{month:'long'})}\n\n`;
    const time = today.toLocaleDateString('en',{hour:"numeric",hour12:true,minute:"numeric"});

    return {
      date,time
    }

  }

  useEffect( () => {
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

        let temp = data.list[0].main.temp;
        let humidity = data.list[0].main.humidity;
        let speed = data.list[0].wind.speed;
        let weathercondition = data.list[0].weather[0].main;
        details(temp,humidity,speed,weathercondition);

        let weekdata = data.list.slice(0,7);
        setWeeklyData(weekdata);
        // console.log(weekdata)

      })
      .catch((error) => {
        alert("Try Another city or Enter specific city...",error);
      });

  }, [city]);

  return (
    <>
      <DataProvider.Provider value={{ NewCity, background, icon, location, values, Time, weeklyData}}>
        {children}
      </DataProvider.Provider>
    </>
  );
};

export default Datastore;
