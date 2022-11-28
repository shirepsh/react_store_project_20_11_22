import React from 'react'
import './App.css';

export const Navbar = () => {
  return (
    <>
        <ul>
        <li><a href="./">home</a></li>
        <li><a href="#news">News</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a class="active" href="#about">About</a></li>
        </ul>
    </>
  )
}


export default Navbar;