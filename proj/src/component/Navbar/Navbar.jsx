import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import Style from './Navbar.module.css'


export default class Navbar extends Component {
    render(){
    return (
        
      <div>
        <nav className={`navbar navbar-expand-lg py-4 fixed-top ${Style.grayColor}`}>
  <div className="container w-75">
    <Link className="navbar-brand text-white fs-2 fw-bold" to="#">START REACT
</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse me" id="navbarNav">
      <ul className="navbar-nav nav ms-auto">
        
        <li className="nav-item">
          <Link className="nav-link active text-white fs-5 fw-bold " aria-current="page" to="home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active text-white fs-5 fw-bold " aria-current="page" to="portfolio">Portfolio</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-white fs-5 fw-bold " to="about">About</Link>
        </li>
        <li className="nav-item ">
          <Link className="nav-link text-white fs-5 fw-bold" to="contact">Contact</Link>
        </li>
        
        
      </ul>
    </div>
  </div>
</nav>
      </div>
    )
  }
}


