import React from "react";
import LogoQwant from "../img/LogoQwantActualités.png";
import qozIcon from "../img/icon/qozIcon.png";
import qplusIcon from "../img/icon/qplusIcon.png";
import userIcon from "../img/icon/userIcon.png";
import settingIcon from "../img/icon/settingIcon.png";
import qNavMobileButton from "../img/icon/navMobileButton.png";
import SearchBar from "./SearchBar";
import DarkModeToggle from './DarkModeToggle';
import qnuitIcon from "../img/icon/qnuitIcon.png";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}

    }
    handleToggle = e => {
        e.preventDefault();
        document.getElementById("wrapper").classList.toggle("toggled");
    };
    render() {
        return (
            <div className="headerDiv" id="header_div">
                <div id="logoQwantActualite" className="d-fex justify-content-between">
                    <a href="/"><img src={LogoQwant} alt="Logo Qwant Actualités" id="logoQwant"/></a>
                </div>
                <SearchBar search_bar={this.props.search_bar}
                           category={this.props.category}
                           src={this.props.src}
                           order={this.props.order}
                           freshness={this.props.freshness}
                           safesearch={this.props.safesearch}
                           display={this.props.display}
                />

                <div className="radioButtonHeader" id="qozIcon">
                    <img src={qozIcon} alt="qoz Icon" id="qozIconImage"/>
                    <input type="checkbox" id="c1" name="cc"/>
                    <label id="c1" htmlFor="c1"><span></span></label>
                </div>
                <div className="radioButtonHeader">
                    <img src={qnuitIcon} alt="qnuit Icon" id="nightModeImage"/>
                    <DarkModeToggle/>
                    <label className="check" id="c2" htmlFor="c2"><span></span></label>
                </div>
                <div className="buttonHeader">
                    <a href="/" id="qplusButton" className="headerButton"><img src={qplusIcon} alt="Icon Qplus" id="qplusImage"/></a>
                </div>
                <div className="buttonHeader">
                    <a href="/" id="quserButton" className="headerButton"><img src={userIcon} alt="Icon User" id="quserImage"/></a>
                </div>
                <div className="buttonHeader">
                            <a href="/" className="headerButton" id="menu-toggle"
                               onClick={this.handleToggle}><img src={settingIcon} alt="Icon Setting" id="qsettingImage"/></a>
                </div>
                <div id="navMobileButton" className="pos-f-t">
                    <div className="collapse" id="navbarToggleExternalContent">
                        <div id="HeaderButtonDivMobile" className="bg-transparent w-25 p-3">
                            <div className="px-1 mobileHeaderButton">
                                <img src={qozIcon} alt="qoz Icon"/>
                                <input type="checkbox" id="c3" name="cc"/>
                                <label id="c3" htmlFor="c3"><span></span></label>
                            </div>
                            <div className="px-1 mobileHeaderButton">
                                <img src={qozIcon} alt="qoz Icon"/>
                                <DarkModeToggle param={1}/>
                                <label id="c4" htmlFor="c4"><span></span></label>
                            </div>
                            <div className="px-1 buttonHeaderMobile">
                                <a href="/" id="qplusButton" className="headerButton"><img src={qplusIcon} alt="Icon Qplus"/></a>
                            </div>
                            <div className="px-1 buttonHeaderMobile">
                                <a href="/" id="quserButton" className="headerButton"><img src={userIcon} alt="Icon User"/></a>
                            </div>
                            <div className="px-1 buttonHeaderMobile">
                                <a href="/" id="menu-toggle" className="headerButton" onClick={this.handleToggle}><img src={settingIcon} alt="Icon Setting"/></a>
                            </div>
                        </div>
                    </div>
                    <nav className="navbar navbar-dark bg-transparent">
                        <button className="navbar-toggler" id="NavBarButton" type="button"
                                onClick={this.hideSearchBar} data-toggle="collapse"
                                data-target="#navbarToggleExternalContent"
                                aria-controls="navbarToggleExternalContent" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <img src={qNavMobileButton} alt="Nav Mobile Button Header"/>
                        </button>
                    </nav>
                </div>
            </div>
        );
    }
}

export default Header;