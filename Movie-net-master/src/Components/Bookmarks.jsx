import React from "react";
import { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
export default function Bookmarks() {
  const [bookmarks, setBookmarks] = useState({
    movie: [],
    tv: [],
  });


  // console.log(bookmarks);
  useEffect(() => {
    let movie = localStorage.getItem("movie") || "{}";
    let tv = localStorage.getItem("tv") || "{}";
    movie = JSON.parse(movie);
    tv = JSON.parse(tv);
    let temp1 = [];
    let temp2 = [];

    Object.keys(movie).forEach((key) => {
      temp1.push({ id: key, ...movie[key] });
    });
    Object.keys(tv).forEach((key) => {
      temp2.push({ id: key, ...tv[key] });
    });
    setBookmarks({
      movie: temp1,
      tv: temp2,
    });
    console.log("useeffect called") ; 
  }, []);

  function handleChangesinStorage(id , type){
    console.log("function called")
    const obj = bookmarks[type].filter((item)=>{
      return item.id !== id
    })
    let newBookmarks = {...bookmarks , [type]:obj}
    setBookmarks(newBookmarks) ;
    // write local storage function
    const temptype = localStorage.getItem(type) || "{}"
    let temptypeParsed = JSON.parse(temptype) ;
    delete temptypeParsed[`${id}`]
    localStorage.setItem(type , JSON.stringify(temptypeParsed))
  }
  return (
  
    <div className="bookmark-box">
      {bookmarks.movie.length === 0 && bookmarks.tv.length === 0 && 
        (
          <div className="fallback-bookmark" >
            <h1>Bookmark is Empty</h1>
          </div>
        )
      }

      {bookmarks.movie.length > 0 && <div className="movie-bookmark">
        <h1>Movies</h1>
        <div className="helper" >
          {bookmarks.movie.map((item, index) => {
            return <MovieCard key={item.id}
              id={item.id}
              type={item.type}
              poster_path={item.poster_path}
              title={item.title}
              rating={item.rating}
              handlebookmarkfunc = {handleChangesinStorage}
            ></MovieCard>
          })}
        </div>
      </div>}
      
      {bookmarks.tv.length > 0 && <div className="movie-bookmark">
      <h1>Tv Series</h1>
        <div className="helper" >
          {bookmarks.tv.map((item, index) => {
            return <MovieCard key={item.id}
              id={item.id}
              type={item.type}
              poster_path={item.poster_path}
              title={item.title}
              rating={item.rating}
              handlebookmarkfunc = {handleChangesinStorage}
            ></MovieCard>;
          })}
        </div>
      </div>}
      
    </div>
  );
}
