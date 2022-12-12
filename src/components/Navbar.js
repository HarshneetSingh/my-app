import React from 'react'
import PropTypes from 'prop-types'
import {  NavLink } from 'react-router-dom'
export default function Navbar(props) {

  const navLinkStyle = ({ isActive }) => {

    return {
      fontWeight: isActive ? "bold" : "normal",
      color: isActive ? "blue" : "black"
    }
  }
  return (

    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode} `}>
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/">{props.title}</NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink style={navLinkStyle}  className="nav-link " aria-current="page" to="/">byFunction</NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={navLinkStyle} className="nav-link" to="/byClass">{props.about}</NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={navLinkStyle} className="nav-link" to="Products">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink style={navLinkStyle} className="nav-link" to="Users">Users</NavLink>
            </li>
          </ul>
          <div className={`form-check form-switch text-${props.mode === "light" ? "black" : "light"}`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}


//  function name .(lowercase)propTypes
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  about: PropTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "Project",
  about: "About"
}
// allows you to write default title