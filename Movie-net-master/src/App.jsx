import { useState, useEffect } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Movies from "./Components/Movies";
import Tv from "./Components/Tv";
import Bookmarks from "./Components/Bookmarks";
import Message from "./Components/Message";
import NavBar from "./Components/NavBar";
import SideBar from "./Components/SideBar";
import { fetchAllMovies } from "./utils/helper";
import SearchPage from './Components/SearchPage'

const moviegenre = [
  "Action",
  "Adventure",
  "Animation",
  "Comedy",
  "Horror",
  "Thriller",
];
const tvgenre = ["Action", "Animation", "News", "Comedy", "Drama", "Kids"];

export default function App() {
  const [currMovies, setCurrMovies] = useState();
  const [currTv, setCurrTv] = useState();


  useEffect(() => {
    const myfunc = async () => {
      const { obj, obj2 } = await fetchAllMovies();

      setCurrMovies(obj);
      setCurrTv(obj2);
    };
    myfunc();
  }, []);

  return (
    <div className="main-box">
      <SideBar></SideBar>
      <div>
        <NavBar></NavBar>
        <Routes>
          <Route
            path="/"
            element={<Home  genre={moviegenre} genre2={tvgenre} movie={currMovies} tv={currTv}></Home>}
          >
            {" "}
          </Route>
          <Route path="movies" element={<Movies genre={moviegenre} movie={currMovies}></Movies>}>
            {" "}
          </Route>
          <Route path="tv" element={<Tv genre={tvgenre} movie={currTv} ></Tv>}>
            {" "}
          </Route>
          <Route path="bookmark" element={<Bookmarks></Bookmarks>}></Route>
          <Route path="message" element={<Message></Message>}>
            {" "}
          </Route>
          <Route path='/search/:id' element={ <SearchPage></SearchPage> }>
            </Route>
          <Route path='/content/:id' ></Route>
        </Routes>
      </div>
    </div>
  );
}
