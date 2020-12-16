import React from "react";

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    test ()
    {
        var param_list = [
            "q",
            "cat",
            "src",
            "order",
            "freshness",
            "safesearch",
            "display"
        ];
        param_list.map(param_index => {
                var input = document.getElementById(param_index);
                if (input != null) {
                    if (input.value == undefined || input.value == ""){
                        if (param_index == "q")
                            input.value = "news";
                        else {
                            input.setAttribute("disabled", true);
                        }
                    }
                }

            }
        );
    }

    render() {
        return (
            <div id="searchBar" className="container">
                <form method="get" action="/" onSubmit={this.test}>
                    <input type="text" id="q" name="q" ref={this.props.search_bar}/>
                    <input type="hidden" id="cat" name="cat" ref={this.props.category}/>
                    <input type="hidden" id="src" name="src" ref={this.props.src}/>
                    <input type="hidden" id="order" name="order" ref={this.props.order}/>
                    <input type="hidden" id="freshness" name="freshness" ref={this.props.freshness}/>
                    <input type="hidden" id="safesearch" name="safesearch" ref={this.props.safesearch}/>
                    <input type="hidden" id="display" name="display" ref={this.props.display}/>
                    <input type="submit" className="searchButton"></input>
                </form>
            </div>
        );
    }
}
export default SearchBar