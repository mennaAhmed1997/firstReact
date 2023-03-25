import React, { Component } from 'react'
import Style from './About.module.css'

export default class About extends Component {
  render() {
    return (
      <div className={`position-relative z-5 top-50 end-0 start-0 bottom-0 py-4 ${Style.bgColor}`}>
        <div className="container ">
          <h2 className='text-white py-3 fs-1 fw-bold text-center'>ABOUT</h2>
            <div className="row d-flex justify-content-center">
                <div className="col-md-3">
                    <p className='fs-5 text-white'>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                </div>
                <div className="col-md-3">
                    <p className='fs-5 text-white'>ou can create your own custom avatar for the masthead, change the icon in the dividers, and add your email address to the contact form to make it fully functional!</p>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
