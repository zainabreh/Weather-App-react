import React from "react";
import Navbar from "./component/Navbar";
import Background from "./component/Background";
import "./index.css";
import "./App.css";
import Maincard from "./component/Maincard";
import Daycard from "./component/Daycard";
import Hourcard from "./component/Hourcard";
import Datastore from "./store/Datastore";
import { useContext } from "react";
import { DataProvider } from "./store/Datastore";

function App() {
  const { weeklyData } = useContext(DataProvider);

  return (
    <>
      <Datastore>
        <div className="container">
          <Background />
          <div className="materialcontainer">
            <Navbar />

            <div className="minicontainer">
              <Maincard />
              <div className="hour">
                <Hourcard />
              </div>
            </div>

            <div className="day">
              {weeklyData.map((data) => (
                <Daycard
                  key={data.dt}
                  time={data.dt * 1000}
                  values={data.main}
                  icon={data.weather[0].icon}
                />
              ))}
              {/* <Daycard/> */}
            </div>
          </div>
        </div>
      </Datastore>
    </>
  );
}

export default App;
