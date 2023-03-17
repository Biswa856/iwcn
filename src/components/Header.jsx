import React from 'react';
import logo from '../images/logo.jpg'
import '../App.css'

export default function Header() {
  return (
    <div className='header'>
      <img src={logo} alt="logo" width= '150' height='100 ' />
    </div>
  )
}
