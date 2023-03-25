import React, { Component } from 'react'

export default class Contact extends Component {
  render() {
    return (
      <div className='vh-100'>
        <div className="container h-100  d-flex align align-items-center justify-content-center flex-column">
        <h2 className='text-dark py-3 fs-1 fw-bold text-center'>Contact Me</h2>
        <input type="text" placeholder='Name' className='bg-transparent border-0 w-50 fs-2 py-3' ></input>
        <input type="text" placeholder='Email address' className='bg-transparent border-0 w-50 fs-3 py-3 border-top' ></input>
        <input type="number" placeholder='Phone Number' className='bg-transparent border-0 w-50 fs-3 py-3 border-top' ></input>
        <input type="text" placeholder='Message' className='bg-transparent border-0 w-50 fs-3 py-3 border-top' ></input>
        <button type='submit' className='btn btn-dark p-3 
            
        '>Send</button>
        </div>
      </div>
    )
  }
}
