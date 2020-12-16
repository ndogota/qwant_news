import React from "react";

class Sources extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    removeDuplicate(arr) {
        let tab = [];
        arr.map((link, index) => {
            tab.push(arr[index].domain)
        });
        return [...new Set(tab)];
    }

    should_be_displayed(src, src_to_test) {
        const str = src;
        const src_array = str.split(",");
        for (var i = 0; i < src_array.length; i++) {
            if (src_to_test === src_array[i])
                return 1;
        }
        return 0;
    }


    render() {
//        this.should_be_displayed(this.props.src_choosen);
        let links = this.removeDuplicate(this.props.links);
        return (
            <div>
                <h5 className="TitleRightBar">Parution :</h5>
                <div id="pannelSources" className="row">

                    {links.map(link => {
                        if (this.props.src_choosen.current !== null && this.should_be_displayed(this.props.src_choosen.current.value, link))
                        return(
                            <button key={link.toString()}
                                       onClick={this.props.redirect_url}
                                       className="buttonSources btn-outline-secondary col btn-sm m-1 btn-dark text-light"
                                       id={link.toString()}
                                       value="src">{link}
                            </button>);
                        else
                            return (
                                <button key={link.toString()}
                                       onClick={this.props.redirect_url}
                                       className="buttonSources btn-outline-secondary col btn-sm m-1 btn-light text-dark"
                                       id={link.toString()}
                                       value="src">{link}
                                </button>);
                    })}
                </div>
            </div>
        );
    }
}

export default Sources;
