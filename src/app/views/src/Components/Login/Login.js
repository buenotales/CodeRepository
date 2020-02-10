import React, { Component } from 'react'
import UsuarioService from '../../Services/UsuarioService'
import './Login.css'
import $ from 'jquery'

export default class Login extends Component {

    constructor() {
        super()
        this.state = { msg_error: '' }
    }

    login = event => {

        event.preventDefault()

        let dados = {
            email: event.target.email.value,
            senha: event.target.senha.value
        }

        new UsuarioService().login(dados)
            .then(successo => {
                window.location.href = "/search";
            })
            .catch(error => {
                this.setState({ msg_error: error })
                $('.alert-danger').show()
            })

    }

    render() {
        return (
            <div className="container">

                <br />
                <br />
                <br />

                <div className="alert alert-danger">
                    <strong>Erro!</strong> {this.state.msg_error}.
                </div>

                <form onSubmit={this.login}>

                    <div className="row">
                        <div className="input-field col s12">
                            <input required id="email" type="email" className="validate" />
                            <label>Email:</label>
                            <span className="helper-text" name="email" data-error="wrong" data-success="right">Helper text</span>
                        </div>
                    </div>

                    <div className="row">
                        <div className="input-field col s12">
                            <input required id="senha" type="password" name="senha" className="validate" />
                            <label>Senha:</label>
                            <span className="helper-text" data-error="wrong" data-success="right">Helper text</span>
                        </div>
                    </div>

                    <button className="btn waves-effect blue lighten-1" type="submit" name="action">Acessar
                    <i className="material-icons right">send</i>
                    </button>

                </form>
            </div>
        )
    }
}