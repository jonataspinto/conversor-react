import React, { Component } from 'react'

export default class Button extends Component {
    render() {
        return (
            <button
                onClick={this.props.handleClick}
                className={this.props.class}>{this.props.value}</button>            
        )
    }
}