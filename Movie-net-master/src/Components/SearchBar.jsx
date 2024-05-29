import { useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from 'react-router-dom'

export default function SearchBar() {
  const [curr, setCurr] = useState(false);
  const nav = useNavigate()
  const [search, setSearch] = useState('')

  const handleSubmit = (e)=>{
    e.preventDefault()

    if(!search){
      nav('/')
      return;
    }

    nav(`/search/${search}`)
  }

  return (
    <form
     onSubmit={handleSubmit}
      className="search-box"
      style={{
        border: curr ? "2px solid var(--glow-green)" : "none",
        boxShadow: curr ? "8px 5px 15px var(--primary-grey)" : null,
      }}
    >
      <FontAwesomeIcon className="search-icon" icon={faMagnifyingGlass} />
      <input
        value={search}
        onChange={e=>setSearch(e.target.value)}
        type="text"
        name=""
        id=""
        onBlur={(e) => setCurr(!curr)}
        onFocus={(e) => setCurr(!curr)}
        placeholder="Search..."
      />
    </form>
  );
}
