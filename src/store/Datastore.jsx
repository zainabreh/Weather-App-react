import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const DataProvider = createContext();

const Datastore = ({children}) => {
  const [city, setCity] = useState('islamabad');
  const [background,setBackground] = useState('Clear')
  const API_KEY = "44049957cd39c54716054a34be36db63";

  const NewCity = (city)=>{
    setCity(city);
  }

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => {console.log(data)});
  },[city]);

    let bg = data.list.weather.main;
    setBackground(bg);

  return (
    <>
      <DataProvider.Provider value={{NewCity,background}}>{children}</DataProvider.Provider>
    </>
  );
};

export default Datastore;
