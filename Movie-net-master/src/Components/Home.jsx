import { useState } from "react";
import MyButton from "./MyButton";
import MovieCard from "./MovieCard";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";




export default function Home({ movie, tv , genre , genre2}) {
  const [currActive, setCurrActive] = useState("Action");
  const [currActive2, setCurrActive2] = useState("Action");
  console.log(currActive , currActive2) ; 
  // console.log(movie ) ; 
  // console.log(tv) ; 


  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
  };

  return (
    <div className="home-box">
      <div className="upper-box">
        <div className="overlay-cont"></div>
        <div className="content-box">
          <h1>Unlimited Movies, TV Shows, and more</h1>
          <h3>
            Find the latest and greatest Movies and Tv shows available on Movie
            Net{" "}
          </h3>
          <div>
            <button className="btn1 ">Get Started</button>
            <button className="btn2">Show Plans</button>
          </div>
        </div>
      </div>

      <div className="movie-section">
        <div className="inner-movie">
          <h1>Movies</h1>
          <div>
            <ul>
              {genre.map((item, index) => (
                <MyButton
                  key={index}
                  text={item}
                  handleClick={setCurrActive}
                  flag={currActive}
                ></MyButton>
              ))}
            </ul>
          </div>

          <div className="display-cards">
            <div className="inner-display slider-container">
              <Slider className="testing" {...settings}>
                {movie &&
                  movie[currActive].map((item, index) => {
                    return (
                      <div className="testing2" key={index}>
                        <MovieCard
                        type='movie'
                        id={item.id}
                          poster_path={item.poster_path}
                          title={item.original_title}
                          rating={item.vote_average}
                        />
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
        
        <br />
        <br />

      <div className="movie-section tv-section ">
        <div className="inner-movie innner-tv ">
          <h1>TV Series</h1>
          <div>
            <ul>
              {genre2.map((item, index) => (
                <MyButton
                  key={index}
                  text={item}
                  handleClick={setCurrActive2}
                  flag={currActive2}
                ></MyButton>
              ))}
            </ul>
          </div>

          <div className="display-cards">
            <div className="inner-display">
              <Slider {...settings}>
                {tv &&
                  tv[currActive2].map((item, index) => {
                    return (
                      <div key={index}>
                        <MovieCard
                        type='tv'
                         id={item.id}
                          poster_path={item.poster_path}
                          title={item.original_name}
                          rating={item.vote_average}
                        />
                      </div>
                    );
                  })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
