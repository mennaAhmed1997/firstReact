import React, { Component } from 'react'
import image1 from'../Images/1.png'
import image2 from'../Images/2.png'

import image3 from'../Images/3.png'

import image4 from'../Images/4.png'

import image5 from'../Images/5.png'

import image6 from'../Images/6.png'





export default class Portfolio extends Component {
  render() {
    return (
     <div className="portfoliodiv  pt-5">
      <div className="container vh-100 w-75 mt-5 ">
      <div className=' h-100  d-flex align align-items-center justify-content-center flex-column'>
        <h3 className='text-dark fs-1 fw-bold py-5'>PORTFOLIO
</h3>
<div className="row g-5">
  <div className="col-md-4">
    <img src={image1} className='w-100 rounded-4'></img>
  </div>
  <div className="col-md-4">
  <img src={image2}  className='w-100 rounded-4'></img>
  </div>
  <div className="col-md-4">
  <img src={image3}  className='w-100 rounded-4'></img>
  </div>
  <div className="col-md-4">
  <img src={image4}  className='w-100 rounded-4'></img>
  </div>
  <div className="col-md-4">
  <img src={image5}   className='w-100 rounded-4'></img>
  </div>
  <div className="col-md-4">
  <img src={image6}  className='w-100 rounded-4'></img>
  </div>
</div>
      </div>
      </div>
     </div>
    )
  }
}
