import React, { Component } from 'react'
import FormService from '../../Services/FormService'
import ResultSearch from '../ResultSearch/ResultSearch'

export default class MyUploads extends Component {

    constructor() {
        super()
        this.state = { uploads: [] }
    }

    componentDidMount() {

        new FormService().myuploads()
            .then(success => {
                this.setState({ uploads: success })
            })
            .catch(error => {
                console.log(error)
            })
    }

    render() {
        return (
            <ResultSearch results={this.state.uploads} />
        )
    }
}