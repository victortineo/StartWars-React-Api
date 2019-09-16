import React from 'react'
import '../static/starwars-crawl.scss'


class StarWars extends React.Component {
    getEpisodeString = (num) => {
        const roman = {
            X: 10,
            IX: 9,
            V: 5,
            IV: 4,
            I: 1
        }
        let str = '';

        for (var i of Object.keys(roman)) {
            let q = Math.floor(num / roman[i]);
            num -= q * roman[i];
            str += i.repeat(q);
        }
        return str;
    }

    render(){
        const {crawlText, title, episode} = this.props
        const parsedCrawlText = crawlText ? crawlText.split('. ') : []
        return (
            <div className="crawler">
                <div className="crawler__fade"></div>
                <section className="crawler__star-wars">
                    <div className="crawler__crawl">
                        <div className="crawler__title">
                            <p>Episode {this.getEpisodeString(episode)}</p>
                            <h1>{title}</h1>
                        </div>
                        {parsedCrawlText.map((item, i) => 
                            <p key={`text_${i}`}>{item}.</p>
                        )}
                    </div>

                </section>
            </div>
        )
    }
}

export default StarWars