import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import "./Navbar.css";

export default class Navbar extends Component {
    render() {
        return (
            <nav className="nav-extended">
                <div className="nav-wrapper light-blue darken-1">
                    <Link to='/' data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                        <li><Link to='/search'><i className="material-icons">search</i></Link></li>
                        <li><Link to='/adm'><i className="material-icons">view_module</i></Link></li>
                        <li><Link to='/my-uploads'><i className="material-icons">file_upload</i></Link></li>
                        <li><a href="collapsible.html"><i className="material-icons">refresh</i></a></li>
                        <li><a href="mobile.html"><i className="material-icons">more_vert</i></a></li>
                    </ul>
                </div>
                <div className="nav-content light-blue darken-4">
                    <ul className="tabs tabs-transparent">
                        <li className="tab"><Link to='/addcode'><i className="material-icons">add_box</i></Link></li>
                        <li className="tab"><Link to='/favorites'><i className="material-icons">favorite</i></Link></li>
                        <li className="tab"><Link to='/historico'><i className="material-icons">history</i></Link></li>
                        <li className="tab"><Link to='/login'><i className="material-icons">assignment_ind</i></Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}