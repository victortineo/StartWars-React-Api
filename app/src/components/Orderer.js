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
        const { order } = this.props
        return(
            <div className="orderer">
                <span>Order by: </span>
                <select onChange={this.handleOnChange} value={order}>
                    {options.map(option => 
                        <option value={option.name} key={`orderer_${option.name}`}>{option.label}</option>
                    )}
                </select>
            </div>
        )
    }
}

const mapStateToProps = ({filter}) => ({
    order: filter.order
})

export default connect(mapStateToProps)(Orderer)