import React from 'react'
import qRep from "../img/qwant_rep.png";
import crossIcon from "../img/icon/crossIcon.png";
import reloadIcon from "../img/icon/reloadIcon.png";

class QwantFact extends React.Component{
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return(
            <div id="informationDiv">
                <div className="imageInformation informationBubble d-inline-flex">
                    <img src={qRep} id="qwantActualite" className="img-fluid" alt="Information Icon"
                         width="25px" height="25px"/>
                    <p id="informationSpace"/>
                    <div>
                        <button className="buttonInformation" onClick={this.props.hide_left_panel}><img
                            src={crossIcon} alt="Cross Icon"/></button>
                        <button className="buttonInformation" onClick={this.props.generateQuote}><img
                            src={reloadIcon} alt="Reload Icon"/></button>
                    </div>
                </div>
            </div>
        );
    }
}
export default QwantFact;