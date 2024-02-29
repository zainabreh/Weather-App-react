import React from 'react'
import Navbar from './component/Navbar'
import Background from './component/Background'
import './index.css'
import './App.css'
import Maincard from './component/Maincard'

function App() {

  return (
    <>
    <div className="container">
    <Background/>
    <Navbar/>
    <Maincard/>
    </div>
    </>
  )
}

export default App
