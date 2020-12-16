import React from "react";

class Pertinence extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <div className="pertinence">
                <h5>Voir en Premier :</h5>
                <button
                    id="relevance"
                    className="btn m-1 btn-outline-secondary col"
                    onClick={this.props.redirect_url} value="order">
                    Pertinence.
                </button>
                <button
                    id="date"
                    className="btn m-1 btn-outline-secondary col"
                    onClick={this.props.redirect_url} value="order">
                    Les plus récents.
                </button>
            </div>
        );
    }
}
export default Pertinence;