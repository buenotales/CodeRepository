import React, { Component } from 'react'
import UsuarioService from '../../Services/UsuarioService'
import $ from 'jquery'
import './AddUsuario.css'

export default class AddUsuario extends Component {

    constructor() {
        super()
        this.state = { msg_success: '', msg_error: '' }
    }

    save(event) {

        event.preventDefault()

        let usuario = {
            firstname: event.target.firstname.value,
            lastname: event.target.lastname.value,
            senha: event.target.senha.value,
            email: event.target.email.value,
            permissao: event.target.permissao.value
        }

        new UsuarioService().create(usuario)
            .then(res => {
                this.setState({ msg_success: res })
                $('.alert-success').show()
                $('form').each(function () {
                    this.reset();
                });
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

                <div className="alert alert-success">
                    <strong>Success!</strong> {this.state.msg_success}.
                </div>

                <div className="alert alert-danger">
                    <strong>Erro!</strong> {this.state.msg_error}.
                </div>


                <div className="row">
                    <form className="col s12" onSubmit={this.save.bind(this)} method="post">
                        <div className="row">
                            <div className="input-field col s6">
                                <input required placeholder="Primeiro nome" name="firstname" type="text" className="validate" />
                            </div>
                            <div className="input-field col s6">
                                <input required name="lastname" type="text" className="validate" />
                                <label>Sobrenome</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input required name="senha" type="password" className="validate" />
                                <label>Senha</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <input required name="email" type="email" className="validate" />
                                <label>E-mail</label>
                            </div>
                        </div>

                        <p>
                            <label>
                                <input name="permissao" defaultValue="padrao" type="radio" defaultChecked />
                                <span>Padrão</span>
                            </label>
                        </p>
                        <p>
                            <label>
                                <input name="permissao" defaultValue="administrador" type="radio" />
                                <span>Administrador</span>
                            </label>
                        </p>

                        <button className="btn waves-effect blue lighten-1" type="submit">Salvar
                            <i className="material-icons right">save</i>
                        </button>

                    </form>
                </div>
            </div>
        )
    }
}