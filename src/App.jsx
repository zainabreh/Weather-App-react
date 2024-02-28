import React, { useEffect, useState } from 'react'
import SearchInputBox from './component/SearchInputBox'
import WeatherBody from './component/WeatherBody'
import './index.css'
import './App.css'

function App() {
  const [today,setDate] = useState(new Date());

  const locale = 'en';
  useEffect(()=>{
    const timer = setInterval(()=>{
      setDate(new Date())
    },60*1000)

    return ()=>{
      clearInterval(timer);
    }
  },[])
  const day = today.toLocaleDateString(locale,{weekday:'long'});
  console.log("DAY: ",day);

  const date = `${day}, ${today.getDate()},${today.toLocaleDateString(locale,{month:'long'})}\n\n`;
  console.log("DATE: ",date);

  const time = today.toLocaleDateString(locale,{hour: 'numeric',hour12:true,minute: 'numeric'});

  console.log("TIME: ",time)

  return (
    <>
      <div className="app-main">
        <SearchInputBox/>
        <WeatherBody/>
      </div>
    </>
  )
}

export default App
