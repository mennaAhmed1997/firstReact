import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
//import About from '../ABOUT/About';
import Navbar from '../Navbar/Navbar'
//import Home from './../home/Home';




export default class Master extends Component {
  render() {
    return (<>
  <Navbar/>
 
      <Outlet/>
      <Footer/>
      </>
     
    )
  }
}
