import React, { Component } from 'react'
import PropTypes from 'prop-types'

export default class SideNav extends Component {

    
    deleteButton = () => {
        if(this.props.allowDelete){
            return (
            <button onClick={this.props.deleteHandler}> - </button>
            )
        }
    }
    render(){
        return (
            <div>
                {this.deleteButton()}
                <h1><button onClick={this.props.selectHandler}>{this.props.title}</button></h1>
            </div>
        )
    }   
}

SideNav.propTypes = {
    title: PropTypes.string,
    allowDelete: PropTypes.bool
};

