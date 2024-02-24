import React from 'react'
import SearchInputBox from './component/SearchInputBox'
import WeatherBody from './component/WeatherBody'

function App() {
  return (
    <>
      <div className="app-main">
        <SearchInputBox/>
        <WeatherBody/>
      </div>
    </>
  )
}

export default App
