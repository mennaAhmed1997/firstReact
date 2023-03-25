
import React, { Component } from 'react'
import Home from './component/home/Home';
import About from './component/ABOUT/About';

import {createBrowserRouter, RouterProvider}from 'react-router-dom'
import Master from './component/Master/Master';
import Portfolio from './component/Portfolio/Portfolio';
import Contact from './component/Contact/Contact';

const router=createBrowserRouter([
  {path:"",element:<Master/>,children:[
    {path:"about",element:<About/>},
    {path:"home",element:<Home/>},
    {path:"portfolio",element:<Portfolio/>},
    {path:"contact",element:<Contact/>}
  
]}
])




export default class App extends Component {
  render() {
    return (<>
     
    <RouterProvider router={router}/>
    </>
    
     
    
      
    )
  }
}
