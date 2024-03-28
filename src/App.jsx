import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Footer from './components/footercard/Footer'
import Shop from './components/shopcard/Shop'
import Nav from './components/navbar/Nav'

function App() {
  
  return (
    <>
      
      <BrowserRouter>
        
          <div>
            <Nav/>
          </div>

          <div>
            <Shop/>
          </div>

          <div>
            <Footer/>
          </div>

        <Routes>
          <Route path='/shop' element={<Shop />} />
          <Route path='/footer' element={<Footer />} />
          
        </Routes>
      </BrowserRouter>
     
    </>
  )
}

export default App
