import React from 'react'
import qRep from "../img/qwant_rep.png";
import SearchBar from "./SearchBar";
import qwantSearchLogo from "../img/qwantSearchLogo.png";

class Category extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(

            <div id="category" className="col sticky-top">
                <div id="hidden_search_bar">
                <SearchBar search_bar={this.props.search_bar}
                           category={this.props.category}
                           src={this.props.src}
                           order={this.props.order}
                           freshness={this.props.freshness}
                           safesearch={this.props.safesearch}
                           display={this.props.display}
                />
                </div>
                <ul className="list-inline text-center">
                    <li className="list-inline-item">
                        <button type="button" id="display_fact" name="display_filter"
                                className="text-decoration-none"
                                onClick={this.props.display_filter}>
                            <img src={qRep} id="qwant_fact" className="qwant_fact_display" alt="Information Icon"
                                 width="15%" height="15%"/>
                        </button>
                    </li>
                    <li className="list-inline-item">
                        <button type="button" id="Économie" name="Économie"
                                className="text-decoration-none" value="cat"
                                onClick={this.props.redirect_url}
                        >
                            Économie
                        </button>
                    </li>
                    <span id="puce">&bull;</span>
                    <li className="list-inline-item">
                        <button type="button" id="Politique" name="Politique"
                                className="text-decoration-none" value="cat"
                                onClick={this.props.redirect_url}
                        >Politique
                        </button>
                    </li>
                    <span id="puce">&bull;</span>
                    <li className="list-inline-item">
                        <button type="button" id="Sports" name="Sports"
                                className="text-decoration-none" value="cat"
                                onClick={this.props.redirect_url}
                        >Sports
                        </button>
                    </li>
                    <span id="puce">&bull;</span>
                    <li className="list-inline-item">
                        <button type="button" id="Innovations" name="Innovations"
                                className="text-decoration-none" value="cat"
                                onClick={this.props.redirect_url}
                        >Innovations
                        </button>
                    </li>
                    <span id="puce">&bull;</span>
                    <li className="list-inline-item">
                        <button type="button" id="Santé" name="Santé"
                                className="text-decoration-none" value="cat"
                                onClick={this.props.redirect_url}
                        >Santé
                        </button>
                    </li>
                    <span id="puce">&bull;</span>
                    <li className="list-inline-item">
                        <button type="button" id="Divertissements" name="Divertissements"
                                className="text-decoration-none" value="cat"
                                onClick={this.props.redirect_url}
                        >Divertissements
                        </button>
                    </li>
                    <li className="list-inline-item">
                        <button type="button" id="display_filter" name="display_filter"
                                className="text-decoration-none"
                                onClick={this.props.display_filter}>
                            <i id="display_filter_img"  className="fa fa-bars"/>
                        </button>
                    </li>
                    <li className="list-inline-item">
                        <button type="button" id="display_search" name="q_search"
                                className="text-decoration-none" onClick={this.props.display_search_bar}>
                            <img src={qwantSearchLogo} id="q_search" name="q_search" className="q_serach_display" alt="qwant search"
                                 width="100%" height="100%"/>
                        </button>
                    </li>

                </ul>
            </div>
        );
    }
}
export default Category;