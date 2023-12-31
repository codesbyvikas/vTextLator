import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'


export default function Navbar(props) {

  return (
            <div>
                <nav className={`navbar navbar-expand-lg navbar-${props.mode1} bg-${props.mode1} `}>
            <div className="container-fluid">
              <Link className="navbar-brand" href="/">{props.title}</Link>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/about">{props.about}</Link>
                  </li>
                  <li className="nav-item dropdown">
                    
                  </li>
                
                </ul>
             

          <div className={`form-check form-switch text-${props.mode1==='light'?'dark':'light'}`}>
            <input className="form-check-input" onClick={props.togglemode1} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable DarkMode </label>
          </div>
              </div>
            </div>
          </nav>
              </div>
            )
          }

Navbar.propTypes={
                  title: PropTypes.string.isRequired,
                  about: PropTypes.string.isRequired
                }

Navbar.defaultProps = {
  title: 'Title not set',
  about: 'About not set'
}