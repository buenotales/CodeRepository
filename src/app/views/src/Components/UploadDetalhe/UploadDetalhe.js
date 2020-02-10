import React, { Component } from 'react'
import FormService from '../../Services/FormService'
import { Link } from 'react-router-dom'

export default class UploadDetalhe extends Component {

    constructor(props) {
        super(props)
        this.state = { upload: '' }
    }

    download = id => new FormService().download(id)

    open = id => new FormService().open(id)

    componentDidMount = () =>
        new FormService().getById(this.props.match.params.id)
            .then(success => {
                this.setState({ upload: success })
            })
            .catch(error => {
                //window.location.href = "/search";
            })



    render() {
        return (
            <div className="container">
                <div className="row">
                    <br />
                    <Link to="/search" className="waves-effect waves-light btn-small">Voltar</Link>
                    <Link to="/search" className="secondary-content"><i className="material-icons">favorite_border</i></Link>
                    <Link to="/search" className="secondary-content"><i className="material-icons">edit</i></Link>
                </div>

                <div className="row">
                    <div className="col s12">
                        <div className="card-panel light-blue lighten-5">
                            <span className="black-text">
                                <b>Autor:</b><br />
                                {this.state.upload.autor}
                            </span>
                        </div>
                    </div>
                    <div className="col s12">
                        <div className="card-panel light-blue lighten-5">
                            <span className="black-text">
                                <b>Descrição:</b><br />
                                {this.state.upload.descricao}
                            </span>
                        </div>
                    </div>
                    <div className="col s12">
                        <div className="card-panel light-blue lighten-5">
                            <span className="black-text">
                                <b>Conteúdo:</b><br />
                                {this.state.upload.conteudo}
                            </span>
                        </div>
                    </div>
                    <div className="col s12">
                        <div className="card-panel light-blue lighten-5">
                            <span className="black-text">
                                <b>Linguagens:</b><br />
                                {this.state.upload.linguagem}
                            </span>
                        </div>
                    </div>

                    <div className="col s12">
                        <div className="card-panel light-blue lighten-5">
                            <span className="black-text">
                                <b>Arquivo:</b><br />
                                <p>
                                    <button className="waves-effect waves-light btn-small" onClick={() => this.download(this.state.upload._id)}>Baixar</button>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <button className="deep-purple lighten-4x btn-small" onClick={() => this.open(this.state.upload._id)}>Abrir</button>
                                </p>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}