import React from 'react'
// import PropTypes from 'prop-types'
// import { useState } from "react";
import Basket from './basketnav.png'


export default function Navbar(props) {

//   const [mystyle,setMyStyle] =  useState({
//     color:'black',
//     backgroundColor:'white'
//   })
//   const [btntext,setBtnText] = useState("Enable Dark Mode")
//   const changeMode = ()=>{
//     if(mystyle.color === 'black'){
//         setMyStyle({
//             color:'white',
//             backgroundColor:'black',
//         })
//         setBtnText("Enable Light Mode")
//     }
//     else{
//         setMyStyle({
//             color:'black',
//             backgroundColor:'white'
//         })
//         setBtnText("Enable Dark Mode")
//     }
// }



  return (
    <nav className="navbar navbar-expand-lg navbar-dark" id="navbar">
  <div className="container">
    <a className="navbar-brand"><img src={Basket} alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link active"  href="/grocerylist" >Grocery List</a>
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <div class="form-check form-switch">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
          <label class="form-check-label text-white"  for="flexSwitchCheckDefault" onClick={changeMode}>{btntext}</label>
        </div>
      </form> */}
    </div>
  </div>
</nav>
  )
}

// Navbar.PropTypes = {
//     title: PropTypes.string,
// }