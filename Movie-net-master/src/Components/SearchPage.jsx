import React, { useEffect , useState } from 'react'
import { useParams } from 'react-router-dom'
import MovieCard from './MovieCard';

export default function SearchPage() {
    let params = useParams() ; 
    const [currData , setCurrData] = useState({
        movie: [],
        tv: []
    }) ; 
    console.log(currData) ;
    useEffect(()=>{
      const myfunc = async()=>{

        const movietemp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=811b7b4b8f9d4d52fc505c88d01655f9&query=${params.id}`) ; 
        const tvtemp = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=811b7b4b8f9d4d52fc505c88d01655f9&query=${params.id}`); 
        let movie = await movietemp.json() ; 
        let tv = await tvtemp.json() ; 
        movie = movie.results.slice(0 , 10) ; 
        tv = tv.results.slice(0 , 10) ; 
        setCurrData({movie , tv}) ; 
      }
      myfunc() ;
      }, [params.id]) ; 

  return (
    <div className="bookmark-box">
      {currData.movie.length === 0  && currData.tv.length === 0 && 
        (
          <div className="fallback-bookmark" >
            <h1>Oops no results found</h1>
          </div>
        )
      }

      {currData.movie.length > 0 && <div className="movie-bookmark">
        <h1>Movies</h1>
        <div className="helper" >
          {currData.movie.map((item, index) => {
            return <MovieCard key={item.id}
              id={item.id}
              type='movie'
              poster_path={item.poster_path}
              title={item.title}
              rating={item.vote_average}
            ></MovieCard>
          })}
        </div>
      </div>}
      
      {currData.tv.length > 0 && <div className="movie-bookmark">
      <h1>Tv Series</h1>
        <div className="helper" >
          {currData.tv.map((item, index) => {
            return <MovieCard key={item.id}
              id={item.id}
              type='tv'
              poster_path={item.poster_path}
              title={item.title}
              rating={item.vote_average}
            ></MovieCard>;
          })}
        </div>
      </div>}
      
    </div>
  )
}
