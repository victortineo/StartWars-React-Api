import React, {Component} from 'react'
import {connect} from 'react-redux'
import '../static/peopleList.scss'

class PeopleList extends Component {
    render(){
        const { people } = this.props
        return(
            <ul className="people">
                {people && people.map(person => 
                    <li className="people__item" key={`person_${person.id}`}>{person.name}</li>
                )}
            </ul>
        )
    }
}

const mapStateToProps = state => {
  return {
    people: state.people
  }
}

export default connect(mapStateToProps)(PeopleList)