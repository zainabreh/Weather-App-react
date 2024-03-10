import React from "react";
import { useEffect, useState, createContext } from "react";
import Clear from "../assets/clear-ezgif.com-gif-to-webp-converter.webp";
import clouds from "../assets/cloudy-ezgif.com-gif-to-webp-converter.webp";
import drizzle from "../assets/drizzle-ezgif.com-gif-to-webp-converter.webp";
import Thunderstorm from "../assets/thunder-ezgif.com-gif-to-webp-converter.webp";
import Snow from "../assets/Snow-ezgif.com-gif-to-webp-converter.webp";
import snowy from "../assets/snowy.png";
import sunny from "../assets/sunny.png";
import cloudy from "../assets/cloudy.png";
import rainy from "../assets/rainy.png";
import storm from "../assets/storm.png";

export const DataProvider = createContext();

const Datastore = ({ children }) => {
  const [hourlyData, setHourlyData] = useState([]);

  const [city, setCity] = useState("islamabad");
  const [background, setBackground] = useState("");
  const [icon, setIcon] = useState("");
  const [location, setLocation] = useState("");
  const [values, setValues] = useState({
    temperature: "",
    humidity: "",
    speed: "",
    weather: "",
  });

  const API_KEY = "44049957cd39c54716054a34be36db63";

  const NewCity = (city) => {
    setCity(city);
  };

  const weatherCondition = (bg) => {
    if (bg == "clear") {
      setBackground(Clear);
      setIcon(sunny);
    } else if (bg == "clouds") {
      setBackground(clouds);
      setIcon(cloudy);
    } else if (bg == "rain" || bg == "drizzle") {
      setBackground(drizzle);
      setIcon(rainy);
    } else if (bg == "snow") {
      setBackground(Snow);
      setIcon(snowy);
    } else if (bg == "thunderstorm") {
      setBackground(Thunderstorm);
      setIcon(storm);
    }
  };

  const details = (temp, humidity, speed, weathercondition) => {
    setValues({
      temperature: temp,
      humidity: humidity,
      speed: speed,
      weather: weathercondition,
    });
  };

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Try Another city or Enter specific city...");
        }
        return res.json();
      })

      .then((data) => {
        
        let bg = data.list[0].weather[0].main.toLowerCase();
        let icon = data.list[0].weather[0].main.toLowerCase();
        weatherCondition(bg, icon);

        let country = data.city.country;
        let city = data.city.name;
        let locate = `${city} - ${country}`;
        setLocation(locate);

        let temp = data.list[0].main.temp;
        let humidity = data.list[0].main.humidity;
        let speed = data.list[0].wind.speed;
        let weathercondition = data.list[0].weather[0].main;
        details(temp, humidity, speed, weathercondition);

        let hourdata = data.list.slice(0, 7).map((e) => {
          const timeString = e.dt_txt.split(" ")[1];

          const time = new Date(`2000-01-01T${timeString}Z`);

          const formattedTime = time.toLocaleString("en-US", {
            hour: "numeric",
            minute: "numeric",
            hour12: true,
          });
          return {
            time: formattedTime,
            icon: e.weather[0].icon,
            temp: e.main.temp,
          };
        });
        setHourlyData(hourdata);
      })
      .catch((error) => {
        alert("Try Another city or Enter specific city...", error);
      });
  }, [city]);

  return (
    <>
      <DataProvider.Provider
        value={{ NewCity, background, icon, location, values, hourlyData }}
      >
        {children}
      </DataProvider.Provider>
    </>
  );
};

export default Datastore;
