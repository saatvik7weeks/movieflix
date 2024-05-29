import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-regular-svg-icons";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
export default function MovieCard({
  poster_path,
  title,
  rating,
  type,
  id,
  handlebookmarkfunc,
}) {
  const [isBookmarked, setIsBookmarked] = useState(false);

  useEffect(() => {
    let items = localStorage.getItem(type) || "{}";
    let itemsParsed = JSON.parse(items);
    let itemkeys = Object.keys(itemsParsed);

    if (itemsParsed.hasOwnProperty(id)) {
      setIsBookmarked(true);
    } else {
      setIsBookmarked(false);
    }
  }, [id]);

  const handleBookmark = () => {
    let items = localStorage.getItem(type) || "{}";
    let itemsParsed = JSON.parse(items);
    if (isBookmarked) {
      delete itemsParsed[`${id}`];
      setIsBookmarked(false);
    } else {
      let obj = {
        poster_path,
        title,
        rating,
        type,
      };
      setIsBookmarked(true);
      itemsParsed[`${id}`] = obj;
    }

    // console.log( isBookmarked ,  itemsParsed) ;
    localStorage.setItem(type, JSON.stringify(itemsParsed));
  };

  return (
    <div className="movie-card">
      <img src={`https://image.tmdb.org/t/p/original/${poster_path}`} alt="" />
      <div>
        <div>
          <h1>{title}</h1>
        </div>
        <CircularProgressbar
          styles={{
            path: {
              stroke:
                rating * 10 > 70
                  ? `rgb(14, 181, 59) `
                  : rating * 10 > 50
                  ? `rgb(209, 206, 17)`
                  : `rgb(212, 32, 25)`,
            },
            text: {
              fill: "var(--glow-green)",

              fontSize: "25px",
            },
          }}
          text={`${parseInt(rating * 10)}%`}
          className="rating-bar"
          value={rating}
          minValue={0}
          maxValue={10}
        ></CircularProgressbar>
        {!handlebookmarkfunc && (
          <button className="bookmark-btn" onClick={handleBookmark}>
            <FontAwesomeIcon
              className={`bookmark ${isBookmarked ? "isboomarked" : ""}`}
              icon={faBookmark}
            />
          </button>
        )}
        {handlebookmarkfunc && (
          <button className="remove-btn" onClick={()=>handlebookmarkfunc(id , type)} >Remove</button>
        )}
      </div>
    </div>
  );
}
