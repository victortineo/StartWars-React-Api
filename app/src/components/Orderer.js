import React, {Component} from 'react'
import {connect} from 'react-redux'
import {options} from '../constants/orderer-options'
import {handleSetOrder} from '../actions/filter'

class Orderer extends Component {
    handleOnChange = (e) => {
        const { dispatch } = this.props
        dispatch(handleSetOrder(e.target.value))
    }
    render(){
        return(
            <select onChange={this.handleOnChange}>
                {options.map(option => 
                    <option value={option.name} key={`orderer_${option.name}`}>{option.label}</option>
                )}
            </select>
        )
    }
}

export default connect()(Orderer)