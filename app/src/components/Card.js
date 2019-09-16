import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import '../static/card.scss'

class Card extends Component {
    state = {
        showInfo: false
    }

    showInfo = () => this.setState({showInfo: true});
    
    hideInfo = () => this.setState({showInfo: false});

    getOrderInfo = (order, info) => order === 'gender' ? info : info.length

    render(){
        const { info, links, order, pathUrl, specie} = this.props
        const { showInfo } = this.state
        return(
            <div className="card" onMouseLeave={this.hideInfo}>
                <Link to={`/person/${info.id}`} >
                    <h3 className="card__title">
                        {info.name}
                    </h3>
                    <div className="card__info">
                        <p className="card__subtitle">
                            Specie: {specie.name}
                        </p>
                        {order !== 'name' && order !== 'species' &&
                            <p className="card__text">
                                {order}: {this.getOrderInfo(order, info[order])}
                            </p>
                        }
                    </div>
                </Link>

                <span className="card__show-info" onClick={this.showInfo}>See movies</span>
                
                {showInfo &&
                    <div className="card__hover">
                        {links ? 
                        <ul className="card__link">
                            {links.map(link => 
                                <li className="card__link-item" key={`link_${link.id}`}>
                                    <Link to={`${pathUrl}${link.id}`}> {link.title || link.name}</Link>
                                </li>      
                            )}
                        </ul>
                        : <p>Nenhum dado a ser mostrado</p>
                        }
                    </div>
                }
            </div>
        )
    }
}

export default Card