import React, { useContext } from 'react'
import { DataProvider } from '../store/Datastore'

const Maincard = () => {
  const {icon,location,values,Time} = useContext(DataProvider)
  const {time} = Time();
  return (
    <>
      <div className="maincard">
        <div className='mainInfo'>
            <div className="weathericon">
            <img src={icon} alt="weather-icon"/>
            </div>

            <div className='tempHead'>
            <h1>{values.temperature}&deg;C</h1>
            </div>
        </div>

        <div className="cityName">
            <h2>{location}</h2>
        </div>
        <hr className='HR'/>
        <div className="time">
            <p>{new Date().toDateString()}</p>
            <p>{time}</p>
        </div>
        <hr className='HR'/>
        <div className="windspeed">
            <h3 className='windheading'>Wind Speed:</h3>
            <p>{values.speed}km/h</p>
        </div>

        <div className="Humidity">
            <h3 className='humidityheading'>Humidity:</h3>
            <p className='humidityValue'>{values.humidity}gm/m</p>
        </div>

        <hr className='HR'/>

        <div className="weathercondition">
            <h1>{values.weather}</h1>
        </div>

      </div>
    </>
  )
}

export default Maincard
