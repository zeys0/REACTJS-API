import { getMovieList, searchMovie } from "../Api";
import { useEffect, useState } from "react";




const Card = () =>{
    const [popularmovies, setPopularMovies] = useState([]);

    useEffect(()=>{
        getMovieList().then((result)=>{
            setPopularMovies(result);
        })
    }, [])
    
    const popularMovieList = ()=>{
        return popularmovies.map((movie, i)=>{
            return(
                <div key={i} className="max-w-sm bg-slate-200 mt-4 rounded-md  shadow-sm shadow-black overflow-hidden transform transition-transform ease-in-out duration-300 hover:scale-105 delay-200"> 
                <img className="object-cover" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" />
                <h1 className="mx-2 text-slate-900 font-semibold text-xl">{movie.title}</h1>
                <h1 className="mx-2 text-slate-800 font-thin text-lg">Release : {movie.release_date}</h1>
                </div>
            )
        })
    }

    const query = async(q) => {
        if (q.length > 3){
          const Keyword = await searchMovie(q)
          setPopularMovies(Keyword.results)
        }
        }

    const Search = () =>{
        return(
            <div  className="" style={{ 
                backgroundImage: `url('../Images/japan.jpg')`,
              
                    
                }}>
                  <div className="  bg-gradient-to-t from-gray-950 to-transparent max-w-full h-[300px] pt-12 ">
                  <div className="container line">
          
                      <h2 className="text-slate-100 font-bold text-5xl">Welcome.</h2>
                      <h3 className="text-slate-200 font-semibold text-2xl mt-2">Millions of movies, TV shows and people to discover. Explore now.</h3>
                        <label htmlFor="search">
                          <input className="search w-full p-2 px-6 my-12 rounded-full" 
                          type="text" id="search"  
                          placeholder="Search for a movie, tv show, person......" 
                          onChange={({target}) => query(target.value)}
                          />
                        </label>
                        
                      </div>
                  </div>
                  </div>
        )
    }

    return(
        <div>
            <div>
                {Search()}
            </div>
        <div className="bg-gray-950">
            <div className="container">
                <div className=" grid grid-cols-3 md:grid-cols-5 gap-4">
                {popularMovieList()}
                </div>
            </div>
        </div>
        </div>
    )
}

export default Card;