import React from "react";

const Hourcard = () => {
  return (
    <>
      <div className="hourcard">
        <div className="hourhead">
          <p>3PM-4PM</p>
        </div>

        <hr className="HR" />

        <div className="weatherhouricon">
          <img src="src\assets\rain.png" alt="weather-icon" />
        </div>

        <div className="tempHead">
          <h1 className="hourtemp">27.5&deg;C</h1>
        </div>
      </div>
    </>
  );
};

export default Hourcard;
