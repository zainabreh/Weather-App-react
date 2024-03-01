import React from 'react'

const Daycard = () => {
  return (
    <>

      <div className="daycard">

            <div className="dayhead">
                <h3>Monday</h3>
            </div>

            <hr className='HR'/>

            <div className="weatherdayicon">
            <img src="src\assets\rain.png" alt="weather-icon"/>
            </div>

            <div className='tempHead'>
            <h1 className='daytemp'>27.5&deg;C</h1>
            </div>

      </div>

    </>
  )
}

export default Daycard
