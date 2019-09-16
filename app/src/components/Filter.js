import React, {Component} from 'react'
import {connect} from 'react-redux'
import {options} from '../constants/filter-options'
import {handleSetFilter, handleSetFilterType} from '../actions/filter'

class Filter extends Component {
    handleQueryChange = (e) => {
        const { dispatch, filter_type } = this.props
        dispatch(handleSetFilter(e.target.value, filter_type))
    }

    handleTypeChange = (e) => {
        const { dispatch } = this.props
        dispatch(handleSetFilterType(e.target.value))
    }

    render(){
        const { filter, filter_type } = this.props
        return(
            <div className="filter">
                <span>Filter by: </span>
                <select onChange={this.handleTypeChange} value={filter_type}>
                    <option value="" disabled>Choose one</option>
                    {options.map(option => 
                        <option value={option.name} key={`Filter_${option.name}`}>{option.label}</option>
                    )}
                </select>
                {filter_type &&
                    <input value={filter} onChange={this.handleQueryChange} placeholder="Type to filter"/>
                }
            </div>
        )
    }
}

const mapStateToProps = ({filter}) => ({
    filter: filter.filter,
    filter_type: filter.filter_type
})

export default connect(mapStateToProps)(Filter)