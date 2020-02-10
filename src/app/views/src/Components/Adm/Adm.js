import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './Adm.css'

export default class Adm extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s8 m3">
                        <div className="card">
                            <div className="card-image">
                                <img src="https://images.vexels.com/media/users/3/137047/isolated/preview/5831a17a290077c646a48c4db78a81bb---cone-de-perfil-de-usu--rio-azul-by-vexels.png" alt=""/>
                                <span className="card-title">Usuarios</span>
                                <Link to='/usuarios' className="btn-floating halfway-fab waves-effect blue lighten-1"><i className="material-icons">assignment_ind</i></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}