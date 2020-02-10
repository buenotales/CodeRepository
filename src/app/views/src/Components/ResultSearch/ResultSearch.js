import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class ResultSearch extends Component {

    render() {
        return (
            <div className="fluid">

                {this.props.results.length > 0 ? <ItemResult results={this.props.results} /> : ''}

            </div>
        )
    }
}

export class ItemResult extends Component {

    render() {
        return (
            <ul className="collection">
                {this.props.results.map(upload => {

                    return (

                        <li className="collection-item avatar" key={upload._id} >

                            <Link to={`/upload/detalhe/${upload._id}`}>
                                <span className="title">{upload.autor}</span>
                                <p>{upload.descricao} <br />{upload.data_modificacao}</p>
                            </Link>

                        </li>
                    )
                })}
            </ul>
        )
    }
}