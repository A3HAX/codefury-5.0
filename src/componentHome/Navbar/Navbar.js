import React from 'react'
import './Navbar.css';

const Navbar = () => {
  return (
    <header className='navbar'>
       <img src='https://s3u.tmimgcdn.com/1475958-1604331157569_Unicorn%20Logo.jpg' />
        <div className='navbar__title navbar__item'>Startup uni</div>
        <div className='navbar__item'>About Us</div>
        <div className='navbar__item'>Contact</div>
        <div className='navbar__item'>Help</div> 
        <div className='navbar__item'>logout</div>         
    </header>
  )
}

export default Navbar