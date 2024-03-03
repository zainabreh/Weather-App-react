import React from 'react'
import Navbar from './component/Navbar'
import Background from './component/Background'
import './index.css'
import './App.css'
import Maincard from './component/Maincard'
import Daycard from './component/Daycard'
import Hourcard from './component/Hourcard'
import Datastore from './store/Datastore'


function App() {

  

  return (
    <>
    <Datastore>
    <div className="container">
    <Background/>
    <div className="materialcontainer">
    <Navbar/>

    <div className="minicontainer">
    <Maincard/>
    <div className="hour">
    <Hourcard/>
    <Hourcard/>
    <Hourcard/>
    <Hourcard/>
    <Hourcard/>
    </div>
    </div>

    <div className="day">
    <Daycard/>
    <Daycard/>
    <Daycard/>
    <Daycard/>
    <Daycard/>
    <Daycard/>
    <Daycard/>
    <Daycard/>
    </div>
    </div>
    
    </div>
    </Datastore>
    </>
  )
}

export default App
