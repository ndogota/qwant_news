import React from "react";

class OrderBy extends React.Component{
    constructor(props) {
        super(props);
        this.state ={}
    }
    render() {
        return(
            <div>
                <h5>Trier par :</h5>
                {this.props.sources.map(source =>
                    <button key={source.id} onClick={this.props.redirect_url} value="freshness"
                            className="btn m-1 btn-outline-secondary col"
                            id={source.id}>{source.value}</button>
                )}
            </div>
        );
    }
}
export default OrderBy;