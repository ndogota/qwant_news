import React from "react";
import user from "../img/qwant_rep.png"
import "../css/setting.css"

class Setting extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
        this.setState({value: event.target.value});
    }
    handleSubmit(event) {
        document.getElementById("place_article_here").style.columnCount = this.state.value;
        event.preventDefault();
    }
    render() {
        return (
            <div id="sidebar-wrapper">
                <div id="setting_card" className=" card text-center text-dark bg-transparent mb-3"> {/*bg-transparent*/}

                    <div className="card-header text-white">
                        <button type="button" className="close" aria-label="Close"
                                onClick={()=>{document.getElementById("wrapper").classList.toggle("toggled")}}>
                            <span aria-hidden="true"><i className="fa fa-times" aria-hidden="true"/></span>
                        </button>
                        Setting
                    </div>
                    <img className="card-img-top text-center" src={user} id="setting_user_logo"
                         alt="setting_logo"/>
                    <div className="card-body bg-transparent mb-5 text-white">
                        <h5 className="card-title">Votre Profile</h5>
                        <form onSubmit={this.handleSubmit} className="d-flex flex-column">
                            <label>
                                choisir le nombre de colonne  :
                                <input type="number" id="nb_column" name="nb_column" min="1"
                                       max="8" value={this.state.value} onChange={this.handleChange} />
                            </label>
                            <input id="submitButtonSetting" type="submit" value="Valider" />
                        </form>
                        <div className="dropdown safe">
                            <button className="btn btn-primary mb-3 mt-3 dropdown-toggle" type="button"
                                    id="safeness" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                Safe Search
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <button id="0" onClick={this.props.redirect_url} value="safesearch"
                                        className="dropdown-item">Aucun
                                </button>
                                <button id="1" onClick={this.props.redirect_url} value="safesearch"
                                        className="dropdown-item">Strict
                                </button>
                                <button id="2" onClick={this.props.redirect_url} value="safesearch"
                                        className="dropdown-item">Modéré
                                </button>
                            </div>
                        </div>
                        <div>
                        </div>

                        <div className="dropdown lang">
                            <button className="btn btn-warning mb-3 mt-3 dropdown-toggle" type="button"
                                    id="language" data-toggle="dropdown" aria-haspopup="true"
                                    aria-expanded="false">
                                Changer de Langue
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <button id="fr" value="lang"
                                        className="dropdown-item">Français
                                </button>
                                <button id="en" value="lang"
                                        className="dropdown-item">English
                                </button>
                                <button id="co" value="lang"
                                        className="dropdown-item">Corsu
                                </button>
                                <button id="br" value="lang"
                                        className="dropdown-item">Brezhoneg
                                </button>
                                <button id="ca" value="lang"
                                        className="dropdown-item">Català
                                </button>
                                <button id="es" value="lang"
                                        className="dropdown-item">Euskara
                                </button>
                            </div>
                        </div>
                        <a href="/" className="btn text-lg-center text-light">Qwant Home</a>
                        <a href="/" className="btn text-lg-center text-light">Qwant Plus</a>
                    </div>
                    <div className="card-footer text-muted card-b">
                        <a href="/" className="card-link btn text-lg-center text-light text-center"><small>Politique Qwant</small></a>
                        <a href="/" className="card-link btn text-lg-center text-light text-center"><small>A propos</small></a><br/>

                        Qwant Copyright 2019
                    </div>
                </div>
            </div>
        );
    }
}

export default Setting;