import React from 'react'

function WeatherBody() {
  return (
    <>
      <div className="weather-body">
        <div className="city" id='city'>Islamabad</div>
        <div className="date" id='date'>10 feb tuesday, 2024</div>
      </div>

      <div className="weather-status">
        <div className="temp" id='temp'>34&deg;deg</div>
        <div className="min-max" id='min-max'>
            32&deg;C (min) / 34&deg;C (max)
        </div>
        <div className="weather" id='weather'>Clear</div>
        <div className="img"></div>
      </div>
    </>
  )
}

export default WeatherBody
