import React, { Component } from 'react'
import spinner from './loading.gif'

export default class Loading extends Component {
    render() {
            return (<div className="d-flex align-items-center justify-content-center">
                <img src={spinner} alt="loading" style={{width:'50px'}}/>
            </div>)
        
    }
}
