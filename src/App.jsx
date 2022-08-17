import React from 'react'
import {
    Routes,
    Route
} from 'react-router-dom'
import { RentPage, Navbar, Footer, BuyPage, AboutPage, SellPage } from './components'
import './App.css'
import RentState from './context/RentState'

const App = () => {
  return (
    <div>
      <RentState>
    <Navbar />
    
      {/* ROUTES */}
        <Routes>
            <Route exact path='/' element={<RentPage />} />
            <Route exact path='/buy' element={<BuyPage />} />
          <Route exact path='/about' element={<AboutPage />} />
        </Routes>
    <Footer />
     </RentState>
    </div>
  )
}

export default App
