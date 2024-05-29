import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import MovieCard from "./MovieCard";



export default function Tv({genre , movie}) {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };
  return (
    <div className="only-movie">
      {genre.map((item, index) => {
        return (
          <div key={index} className="helper-div">
          <h1>{item}</h1>
          <div className="inner-display slider-container">
            <Slider {...settings}>
            {movie &&
                  movie[item].map((item2, index2) => {
                    return (
                      <div className="testing2" key={index2}>
                        <MovieCard
                          type='tv'
                          id={item2.id}
                          poster_path={item2.poster_path}
                          title={item2.original_name}
                          rating={item2.vote_average}
                        />
                      </div>
                    );
                  })}
            </Slider>
          </div>
          </div>
        );
      })}
    </div>
  );
}
