import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import UsuarioService from '../../Services/UsuarioService'

export default class Usuarios extends Component {

    constructor() {
        super()
        this.state = { usuarios: [] }
    }

    componentDidMount = () =>

        new UsuarioService().find()
            .then(success => {
                this.setState({ usuarios: success })
            })
            .catch(error => {
                console.log(error);
            })


    render() {
        return (
            <div className="container">

                <br />
                <br />
                <br />

                <Link to='/add-usuario'><i className="material-icons">add_box</i></Link>
                <table className="striped highlight">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Nome</th>
                            <th>Sobrenome</th>
                            <th>E-mail</th>
                            <th>Permissão</th>
                        </tr>
                    </thead>

                    <ItemUsuario results={this.state.usuarios} />

                </table>
            </div>
        )
    }
}

export class ItemUsuario extends Component {

    render() {
        return (
            <tbody>
                {this.props.results.map((usuario, index) => {
                    return (
                        <tr key={usuario._id}>
                            <td>{usuario._id}</td>
                            <td>{usuario.firstname}</td>
                            <td>{usuario.lastname}</td>
                            <td>{usuario.email}</td>
                            <td>{usuario.permissao}</td>
                        </tr>
                    )
                })}
            </tbody>
        )
    }
}