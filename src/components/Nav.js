import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link className="navbar-brand" href="#">EC </Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-item nav-link active" to="/">Home </Link>
                <Link className="nav-item nav-link" to="/article">Article</Link>
              </div>
            </div>
          </nav>
        )
    }
}


