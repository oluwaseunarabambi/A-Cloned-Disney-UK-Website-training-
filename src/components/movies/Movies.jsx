
import starwars from '../images/starwars.jpeg'
import insideout from '../images/insideout.jpeg'
import soul from '../images/soul.jpeg'

import '../movies/Movies.css'

const Movies = ()=>{

    const moviesData = [
        {
          id: 1,
          imageUrl: starwars,
          title: "Star Wars: The Phantom Menance...( Episode 1 )",
        },
        {
          id:2,
          imageUrl: insideout,
          title: "Inside Out 2",
        },
        {
          id:3,
          imageUrl: soul,
          title: "Soul",
        }

    ];

    return(
        <>
            <div className="movies-list">
                <h1>Movies</h1>
                {moviesData.map((movie) => (
                    <div key={movie.id} className="movies">
                    <img src={movie.imageUrl} alt={movie.title} /> 
                    <p>{movie.title}</p>
                    </div >
                ))}
                
                  

            </div>
        
        </>


    );

};

export default Movies