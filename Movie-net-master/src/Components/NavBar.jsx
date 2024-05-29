import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import SearchBar from './SearchBar'
import { useNavigate } from 'react-router-dom' ; 
export default function NavBar() {
    const mynavigate = useNavigate() ; 
  return (
    <div className='navbar' >
        <h1 onClick={()=>{
            mynavigate('/')
        }} >Movie <span>Net</span> </h1>
        <SearchBar></SearchBar>
        <FontAwesomeIcon className='profile-icon' icon={faUser} ></FontAwesomeIcon>
    </div>
  )
}
