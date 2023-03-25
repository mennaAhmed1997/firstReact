import React, { Component } from 'react'

import Style from './Home.module.css'


export default class Home extends Component {
  render() {
    return (<>
    <div className={`vh-100 ${Style.bgColor} position-relative `}>

      <div className='container  h-100 '>
        <div className='centerDiv h-100  d-flex align align-items-center justify-content-center flex-column'>
          <img></img>
          <i className='fab fa-500px text-danger '></i>
          <h1 className='text-white fw-bold fs-1'>START REACT
</h1>
<p  className='text-white  fs-3'>Graphic Artist - Web Designer - Illustrator</p>
          
         

        </div>
        
      </div>


    </div>

    </>
      
    )
  }
}
