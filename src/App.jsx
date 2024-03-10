import React, { useContext } from "react";
import Navbar from "./component/Navbar";
import Background from "./component/Background";
import "./index.css";
import "./App.css";
import Maincard from "./component/Maincard";
import Hourcard from "./component/Hourcard";
import Datastore, { DataProvider } from "./store/Datastore";

function App() {
  
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
              <Hourlist/>
              </div>
            </div>
          </div>
        </div>
      </Datastore>
    </>
  );
}

const Hourlist = ()=>{
  const {hourlyData} = useContext(DataProvider);
  return hourlyData.map((data,index)=>(                    
    <Hourcard key={index}
    time={data.time}
    icon={data.icon}
    temp={data.temp}/>
  ))

}
export default App;
