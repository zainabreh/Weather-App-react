import React from "react";
import { useEffect, useState, createContext } from "react";
import Clear from "../assets/clear.gif";
import clouds from "../assets/cloudy.gif";
import Thunderstorm from "../assets/Rainy.gif";
import Snow from "../assets/Snow.gif";
import snowy from "../assets/snowy.png";
import sunny from "../assets/sunny.png";
import cloudy from "../assets/cloudy.png";
import rainy from "../assets/rainy.png";
import storm from "../assets/storm.png";

export const DataProvider = createContext();

const Datastore = ({ children }) => {
  const [hourlyData, setHourlyData] = useState([]);
  const [weeklyData, setWeeklylyData] = useState([]);

  const [today, setDate] = useState(new Date());
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

  const Time = () => {
    useEffect(() => {
      const timer = setInterval(() => {
        setDate(new Date());
      }, 60 * 1000);

      return clearInterval(timer);
    }, []);

    const day = today.toLocaleDateString("en", { weekday: "long" });
    const date = `${day}, ${today.getDate()}, ${today.toLocaleDateString("en", {
      month: "long",
    })}\n\n`;
    const time = today.toLocaleDateString("en", {
      hour: "numeric",
      hour12: true,
      minute: "numeric",
    });

    return {
      date,
      time,
    };
  };

  const weatherData = (data) => {
    data.list.forEach((item) => {
      const { main, weather, wind } = item;
      const { temp, humidity } = main;
      const { speed } = wind;
      const { icon, description } = weather[0];
  
      console.log(`Temp: ${temp}, Humidity: ${humidity}, Speed: ${speed}, Icon: ${icon}, Description: ${description}`);
    });
  }

  const hourData = (data)=>{
    let hourdata = data.list.slice(0, 7);
    hourdata.map((e) => {
      // Assuming 'data' is your object containing the API response
      const timeString = e.dt_txt.split(" ")[1]; // Extracting the time part from 'dt_txt'

      // Parsing the time string to a Date object
      const time = new Date(`2000-01-01T${timeString}Z`);

      // Formatting the time in 12-hour format
      const formattedTime = time.toLocaleString("en-US", {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      });

      console.log(formattedTime);
    });
    setHourlyData(hourdata);
  }

  const weekData = (data)=>{
    let weekdata = data.list.slice(0, 7);
    weekdata.forEach((e) => {
      // Assuming 'data' is your object containing the API response
      const timeString = e.dt_txt.split(" ")[0]; // Extracting the time part from 'dt_txt'

      // Parsing the time string to a Date object
      const time = new Date(timeString);

      // Formatting the time in 12-hour format
      const formattedDay = time.toLocaleDateString("en-US", {
        weekday: "long",
      });

      console.log(formattedDay);
    });
    setweeklyData(weekdata);
  }

  useEffect(() => {
    fetch(
      // `https://api.openweathermap.org/data/3.0/onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}`
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error("Try Another city or Enter specific city...");
        }
        return res.json();
      })

      .then((data) => {
        console.log(data);
        weatherData(data);

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
        hourData(data);
        weekData(data);

        
      })
      .catch((error) => {
        alert("Try Another city or Enter specific city...", error);
      });
  }, [city]);

  return (
    <>
      <DataProvider.Provider
        value={{ NewCity, background, icon, location, values, Time, hourData }}
      >
        {children}
      </DataProvider.Provider>
    </>
  );
};

export default Datastore;
