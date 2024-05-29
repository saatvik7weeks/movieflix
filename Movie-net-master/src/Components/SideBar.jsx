import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse , faFilm , faTv , faEnvelope , faBookmark} from '@fortawesome/free-solid-svg-icons'
import { NavLink } from 'react-router-dom'
export default function SideBar() {
  return (
    <div className='sidebar' >
      <ul>
        <h1>M<span>N</span> </h1>
        <NavLink className='icons' to='/' > <FontAwesomeIcon icon={faHouse} ></FontAwesomeIcon> </NavLink>
        <NavLink className='icons' to='movies' > <FontAwesomeIcon icon={faFilm} ></FontAwesomeIcon> </NavLink>
        <NavLink className='icons' to='tv' > <FontAwesomeIcon icon={faTv} ></FontAwesomeIcon> </NavLink>
        <NavLink className='icons' to='bookmark' > <FontAwesomeIcon icon={faBookmark} ></FontAwesomeIcon> </NavLink>
        <NavLink className='icons' to='message' > <FontAwesomeIcon icon={faEnvelope} ></FontAwesomeIcon> </NavLink>
      </ul>
    </div>
  )
}
