import React from 'react';
import Parser from 'html-react-parser';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import './css/Articles.css';
import Articles2 from "./components/Article2";

class Articles extends React.Component {

    getDiffTime = (date) => {
        let divisor = 1;
        let word = null;
        let diffTime = (new Date().getTime() - new Date(date * 1000).getTime()) / 1000;
        if (diffTime < 60) {
            word = "seconde";
        } else if (diffTime < 3600) {
            divisor = 60;
            word = "minute";
        } else if (diffTime < 86400) {
            divisor = 3600;
            word = "heure";
        } else {
            divisor = 86400;
            word = "jour";
        }
        let result = Math.floor(diffTime / divisor) + ' ' + word;
        if (Math.floor(diffTime / divisor) !== 1) {
            result += 's';
        }
        return result;
    };

    displayPicture = (media) => {
        let picture = "https://www.eng.auburn.edu/student-organizations/img/image-not-found.jpg";
        if (media.length !== 0)
            picture = media[0].pict_big.url;
        return picture;
    };

    should_be_displayed(src, src_to_test) {
        const str = src;
        const src_array = str.split(",");
        if (src_array.length <= 1)
            return 1;
        for (var i = 0; i < src_array.length; i++) {
            if (src_to_test === src_array[i])
                return 1;
        }
        return 0;
    }

    render() {
        if (this.props.display_mode.current == null || this.props.display_mode.current.value == "on")
            {return (
                <div className="all_articles card-columns" id="place_article_here">
                    {this.props.items.map((item, index) => {
                            if (this.should_be_displayed(this.props.src, this.props.items[index].domain))
                                return (
                                    <div key={index} className='background card bg-transparent text-center w-auto h-auto'>
                                        <div key={this.props.items._id} className='not_main'>
                                            <a className='not_main content_article' href={this.props.items[index].url}
                                               target='_blank' rel="noopener noreferrer">
                                                <img className='imageArticle card-img-top'
                                                     alt={Parser(this.props.items[index].desc_short)}
                                                     src={this.displayPicture(this.props.items[index].media)}/>
                                                <h3 className='not_main title_article_not_main'>{Parser(this.props.items[index].title)}</h3>
                                                <div className='not_main long_desc'>{Parser(this.props.items[index].desc)}</div>
                                                <div className="card-footer">
                                                    <small className="text-muted">Il y
                                                        a {this.getDiffTime(this.props.items[index].date)} via {this.props.items[index].domain}</small>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                )
                            }
                    )}
                </div>
            );}
        else
        {
            return (<Articles2 items={this.props.items} src={this.props.src}/>);
        }
    }
}

export default Articles;
