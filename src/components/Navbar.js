import React from 'react'
import PropTypes from 'prop-types'
import {Link} from "react-router-dom";


export default function Navbar(props) {
  return (
    // <nav className="navbar navbar-expand-lg bg-body-tertiary" >S
   <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">{props.title}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">{props.item1}</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/">{props.item2}</Link>
        </li>
      </ul>
      <div className={`form-check form-switch text-${props.mode==='light' ?'dark':'light'}`} >
      <input className="form-check-input" type="checkbox" onClick={props.togglerr} role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
      </div>
  
    </div>
  </div>
</nav>
  )
}


Navbar.propTypes={

     title:PropTypes.string.isRequired,
     item1:PropTypes.string.isRequired,
     item2:PropTypes.string.isRequired

}


Navbar.defaultProps={
    title:"Set title",
    item1:"Set Item1",
    item2:"Set Item2"
}
