import React, {Component} from 'react'
import '../static/card.scss'

class Card extends Component {
    state = {
        showInfo: false
    }

    showInfo = () => this.setState({showInfo: true});
    
    hideInfo = () => this.setState({showInfo: false});

    getOrderInfo = (order) => order === 'gender' ? order : order.length

    render(){
        const { info, links, order} = this.props
        const { showInfo } = this.state
        return(
            <div className="card" onMouseEnter={this.showInfo} onMouseLeave={this.hideInfo}>
                <h3>
                    {info.name}
                </h3>
                <p>
                    {order}: {this.getOrderInfo(info[order])}
                </p>
                
                {showInfo &&
                    <div className="card__hover">
                        {links ? 
                        <ul className="card__link">
                            {links.map(link => 
                                <li className="card__link-item" key={`link_${link.id || link.episode_id}`}>{link.title || link.name}</li>      
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