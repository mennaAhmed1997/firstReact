import React, { Component } from "react";
import Style from "./Footer.module.css";

export default class extends Component {
  render() {
    return (<>
      <div
        className={` all  py-5 ${Style.bgColor} position-relative top-50 bottom-0 end-0 start-0`}
      >
        <div className="container py-5 w-75">
          <div className="row gx-4">
            <div className="col-md-4 text-center">
              <h4 className="fs-3 fw-bold text-white  py-2">Location</h4>
              <p className=" text-white fw-bold fs-5">2215 John Daniel Drive</p>
              <p className=" text-white fw-bold fs-5">Clark, MO 65243</p>
            </div>
            <div className="col-md-4 text-center">
              <p className="fs-3 fw-bold text-white text-center  py-2">AROUND THE WEB</p>
              <ul className="d-flex justify-content-between ">
                <li className="list-unstyled" ><i className="fab fa-facebook fs-5"></i></li>
                <li className="list-unstyled" ><i className="fab fa-instagram fs-5"></i></li>
                <li className="list-unstyled" ><i className="fab fa-twitter fs-5"></i></li>
                <li className="list-unstyled" ><i className="fab fa-linkedin fs-5"></i></li>

              </ul>
            </div>
            <div className="col-md-4 text-center">
              <h3 className="fs-3 fw-bold text-white text-center  py-2">ABOUT FREELANCER</h3>
              <p className=" text-white fw-bold fs-5">Freelance is a free to use, </p>
              <p className=" text-white fw-bold fs-5">MIT licensed Bootstrap theme created by Route</p>
            </div>
          </div>
        </div>
        
      </div>
      <div className={` py-5 d-flex justify-content-center align-items-center  ${Style.bgColor2} position-relative top-100 bottom-0 end-0 start-0`}>
        <p className="text-white ">Copyright © Your Website 2021</p>
      </div>
     
      </>
    );
  }
}
