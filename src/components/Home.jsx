import React from 'react';

import Shop from './shopcard/Shop';
import Movies from './movies/Movies';


const Home = () => {
    return (
        <div>
            
            <Shop/>
            <Movies/>
            
            {/* Content of your Home component */}
        </div>
    );
}

export default Home;
