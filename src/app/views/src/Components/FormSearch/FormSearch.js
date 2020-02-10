import React, { Component } from 'react'
import $ from 'jquery'
import './FormSearch.css'
import ResultSearch from '../ResultSearch/ResultSearch'
import FormService from '../../Services/FormService'

export default class FormSearch extends Component {

    constructor() {
        super()
        this.state = { lista: [] }
    }

    searchSubmit(e) {

        e.preventDefault()

        if (e.target.pesquisa.value !== '') {

            $(".progress").show()

            new FormService().get(e.target.pesquisa.value)
                .then(res => {

                    $(".progress").fadeOut(500)
                    this.setState({ lista: res })
                })
        }
    }


    render() {
        return (
            <div>
                <div className='container'>
                    <div className='form-search' >

                        <br />
                        <br />
                        <br />

                        <div className='search-advanced' onClick={this.showHideFormAdvancedSearch}>
                            <img src="https://image.flaticon.com/icons/svg/1160/1160356.svg" alt='pesquisa avancada' />
                        </div>

                        <form onSubmit={this.searchSubmit.bind(this)}>
                            <div className="row">
                                <div className="input-field col s12">
                                    <input type='text' name='pesquisa' className='input-search' />
                                    <label>Pesquise Aqui:</label>
                                </div>
                            </div>
                            <div className='form-search-advanced'>
                                <div className="fields-search">
                                    <div className="row">
                                        <label>Tipo de pesquisa:</label>
                                        <p>
                                            <label>
                                                <input name="group1" type="radio" />
                                                <span>Explorar Anexos</span>
                                            </label>&nbsp;&nbsp;&nbsp;
                                            <label>
                                                <input name="group1" type="radio" />
                                                <span>Explorar Campos</span>
                                            </label>&nbsp;&nbsp;&nbsp;
                                            <label>
                                                <input name="group1" type="radio" />
                                                <span>Explorar Anexos e Campos</span>
                                            </label>&nbsp;&nbsp;&nbsp;
                                        </p>
                                    </div>
                                    <div className="row">
                                        <label>Parametros:</label>
                                        <p>
                                            <label>
                                                <input type="checkbox" className="filled-in" />
                                                <span>Descrição</span>
                                            </label>&nbsp;&nbsp;&nbsp;
                                            <label>
                                                <input type="checkbox" className="filled-in" />
                                                <span>Conteúdo</span>
                                            </label>&nbsp;&nbsp;&nbsp;
                                            <label>
                                                <input type="checkbox" className="filled-in" />
                                                <span>Autor</span>
                                            </label>&nbsp;&nbsp;&nbsp;
                                        </p>
                                    </div>

                                </div>
                            </div>
                            <div className="row">
                                <button className="btn waves-effect blue lighten-1" type="submit">Pesquisar
                        <i className="material-icons right">search</i>
                                </button>
                            </div>


                        </form>
                    </div>

                </div>
                <div className="progress">
                    <div className="indeterminate"></div>
                </div>

                <ResultSearch results={this.state.lista} />
            </div>
        )
    }

    showHideFormAdvancedSearch() {
        $('.form-search-advanced').is(':visible') ? $('.form-search-advanced').hide() : $('.form-search-advanced').show()
    }
}