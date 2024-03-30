import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/footercard/Footer';
import Shop from './components/shopcard/Shop';
import Nav from './components/navbar/Nav';
import Movies from './components/movies/Movies';
import Home from './components/Home'; // Assuming Home component is in this file

function App() {
    return (
        <BrowserRouter>
            <div>
                <Nav />

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/shop" element={<Shop />} />
                    <Route path="/movies" element={<Movies />} />
                </Routes>

                <Footer />
            </div>
            
        </BrowserRouter>
    );
}

export default App;
