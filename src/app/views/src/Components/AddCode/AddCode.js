import React, { Component } from 'react'
import FormService from '../../Services/FormService'
import $ from 'jquery'
import './AddCode.css'

export default class AddCode extends Component {

    constructor() {
        super()
        this.form = { autor: '', descricao: '', conteudo: '', linguagem: '', arquivo: '' }
        this.state = { msg_success: '', msg_error: '' }
    }

    componentDidMount = () => this.form.autor = JSON.parse(localStorage.getItem('token'))._id

    save = event => {

        event.preventDefault()

        let formdata = new FormData()

        formdata.append('autor', this.form.autor)
        formdata.append('descricao', this.form.descricao)
        formdata.append('conteudo', this.form.conteudo)
        formdata.append('linguagem', this.form.linguagem)
        formdata.append('file', this.form.arquivo)

        new FormService().add(formdata)
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

    receiveDescricao = event => this.form.descricao = event.target.value
    receiveConteudo = event => this.form.conteudo = event.target.value
    receiveArquivo = event => this.form.arquivo = event.target.files[0]
    receiveLinguagem = event => this.form.linguagem = event.target.value

    render() {
        return (
            <div className="container">
                <div className="row">

                    <br />
                    <br />
                    <br />

                    <div className="alert alert-success">
                        <strong>Success!</strong> {this.state.msg_success}.
                    </div>

                    <div className="alert alert-danger">
                        <strong>Erro!</strong> {this.state.msg_error}.
                    </div>

                    <form className="col s12" onSubmit={this.save.bind(this)} encType='multipart/form-data'>
                        <div className="row">
                            <div className="input-field col s12">
                                <input required type='text' onChange={this.receiveDescricao} />
                                <label>Descrição:</label>
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s12">
                                <textarea required className="materialize-textarea" onChange={this.receiveConteudo}></textarea>
                                <label>Conteúdo:</label>
                            </div>
                        </div>
                        <div className="row">
                            <label>Linguagem</label>
                            <select required className="browser-default" onChange={this.receiveLinguagem} >
                                <option value="" disabled>Choose your option</option>
                                <option value="1">Option 1</option>
                                <option value="2">Option 2</option>
                                <option value="3">Option 3</option>
                            </select>
                        </div>
                        <div className="row">
                            <div className="file-field input-field">
                                <div className="btn blue-grey lighten-3">
                                    <span>Arquivo</span>
                                    <input required type='file' onChange={this.receiveArquivo} />
                                </div>
                                <div className="file-path-wrapper">
                                    <input required className="file-path validate" type="text" />
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <button className="btn waves-effect blue lighten-1" type="submit">Enviar
                        <i className="material-icons right">send</i>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}