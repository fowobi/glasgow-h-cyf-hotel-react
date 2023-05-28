import React from 'react'
import TouristInfoCards from './components/TouristInfoCards';
import Bookings from './components/Bookings'
import './App.css'

const App = () => {
  return (
    <div className="App">
      <header className="App-header">CYF Hotel</header>
       <TouristInfoCards />
      <Bookings />
    </div>
  )
}

export default App
