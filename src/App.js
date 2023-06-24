import React from 'react'
import Bookings from './components/Bookings'
import './App.css'
import Heading from './components/Heading'
import Restaurant from './components/Restaurant'
import Footer from './components/Footer'
import DataOfCities from './data/cities.json'
import TouristInfoCards from './components/TouristInfoCards'

const App = () => {
  return (
    <div>
      <Heading />
      <TouristInfoCards result={DataOfCities} />
      <Bookings />
      <Restaurant />
      <Footer />
    </div>
  )
}

export default App
