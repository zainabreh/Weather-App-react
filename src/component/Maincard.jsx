import React, { useContext } from 'react'
import { DataProvider } from '../store/Datastore'

const Maincard = () => {
  const {icon} = useContext(DataProvider)
  return (
    <>
      <div className="maincard">
        <div className='mainInfo'>
            <div className="weathericon">
            <img src={icon} alt="weather-icon"/>
            </div>

            <div className='tempHead'>
            <h1>27.5&deg;C</h1>
            </div>
        </div>

        <div className="cityName">
            <h2>Islamabad</h2>
        </div>
        <hr className='HR'/>
        <div className="time">
            <p>sat jun 17 2024</p>
            <p>8:41 PM</p>
        </div>
        <hr className='HR'/>
        <div className="windspeed">
            <h3 className='windheading'>Wind Speed:</h3>
            <p>26.9km/h</p>
        </div>

        <div className="Humidity">
            <h3 className='humidityheading'>Humidity:</h3>
            <p className='humidityValue'>73.3gm/m</p>
        </div>

        <hr className='HR'/>

        <div className="weathercondition">
            <h1>Rain</h1>
        </div>

      </div>
    </>
  )
}

export default Maincard
