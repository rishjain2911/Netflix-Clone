import React from 'react'
import logo from "../../png-transparent-netflix-logo-netflix-television-show-streaming-media-film-netflix-logo-television-text-trademark-thumbnail-removebg-preview.png"
import { Link } from 'react-router-dom'
import { ImSearch } from "react-icons/im"


const Header = () => {
  return (
    <>
    <nav className="header"> 
    <img src={logo} alt="logo" />

    <div>
      <Link to = "/tvShows"> TV Shows </Link>
      <Link to = "/movies"> Movies </Link>
      <Link to = "/recent"> Recent </Link>
      <Link to = "/mylist"> My List </Link>   
    </div>
    <ImSearch/>
    </nav> 
    </>
  )
}

export default Header
