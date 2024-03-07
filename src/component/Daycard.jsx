import React from 'react'

const Daycard = ({icon,time,values}) => {
  
  return (
    <>

      <div className="daycard">

            <div className="dayhead">
                <h3>{new Date(time).toLocaleTimeString('en',{weekday:'long'}).split(" ")[0]}</h3>
            </div>

            <hr className='HR'/>

            <div className="weatherdayicon">
            <img src={icon} alt="weather-icon"/>
            </div>

            <div className='tempHead'>
            <h1 className='daytemp'>{values.temperature}&deg;C</h1>
            </div>

      </div>

    </>
  )
}

export default Daycard
