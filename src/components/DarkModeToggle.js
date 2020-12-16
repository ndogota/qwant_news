import React, { Component } from 'react';
import '../css/styles.css';
import '../css/style.scss';
import qnuitIcon from "../img/icon/qnuitIcon.png";

class DarkModeToggle extends Component {
    constructor(props) {
        super(props);

        this.state = {
            darkMode: JSON.parse(localStorage.getItem('DARK_MODE'))
        };
        this.handleModeChange = this.handleModeChange.bind(this);
    }

    componentDidMount() {
        if(JSON.parse(localStorage.getItem('DARK_MODE')) === true) {
            document.body.classList.add('dark-mode');
            document.getElementById('category').classList.add('dark-mode');
            document.getElementById('qwantActualite').classList.add('dark-mode');
            document.getElementById('qozIconImage').classList.add('dark-mode');
            document.getElementById('nightModeImage').classList.add('dark-mode');
            document.getElementById('qplusImage').classList.add('dark-mode');
            document.getElementById('quserImage').classList.add('dark-mode');
            document.getElementById('qsettingImage').classList.add('dark-mode');
            document.getElementById('logoQwant').classList.add('dark-mode');
            document.getElementById('q').classList.add('dark-mode');
            document.getElementById('Économie').classList.add('dark-mode');
            document.getElementById('Sports').classList.add('dark-mode');
            document.getElementById('Santé').classList.add('dark-mode');
            document.getElementById('Divertissements').classList.add('dark-mode');
            document.getElementById('Politique').classList.add('dark-mode');
            document.getElementById('Innovations').classList.add('dark-mode');
            document.getElementById('display_filter_img').classList.add('dark-mode');
        }
    }

    handleModeChange() {
        if(!this.state.darkMode) {
            document.body.classList.add('dark-mode');
            document.getElementById('q').classList.add('dark-mode');
            document.getElementById('category').classList.add('dark-mode');
            document.getElementById('qwantActualite').classList.add('dark-mode');
            document.getElementById('qozIconImage').classList.add('dark-mode');
            document.getElementById('nightModeImage').classList.add('dark-mode');
            document.getElementById('qplusImage').classList.add('dark-mode');
            document.getElementById('quserImage').classList.add('dark-mode');
            document.getElementById('qsettingImage').classList.add('dark-mode');
            document.getElementById('logoQwant').classList.add('dark-mode');
            document.getElementById('Économie').classList.add('dark-mode');
            document.getElementById('Sports').classList.add('dark-mode');
            document.getElementById('Santé').classList.add('dark-mode');
            document.getElementById('Divertissements').classList.add('dark-mode');
            document.getElementById('Politique').classList.add('dark-mode');
            document.getElementById('Innovations').classList.add('dark-mode');
            document.getElementById('display_filter_img').classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.getElementById('category').classList.remove('dark-mode');
            document.getElementById('qwantActualite').classList.remove('dark-mode');
            document.getElementById('qozIconImage').classList.remove('dark-mode');
            document.getElementById('nightModeImage').classList.remove('dark-mode');
            document.getElementById('qplusImage').classList.remove('dark-mode');
            document.getElementById('quserImage').classList.remove('dark-mode');
            document.getElementById('qsettingImage').classList.remove('dark-mode');
            document.getElementById('logoQwant').classList.remove('dark-mode');
            document.getElementById('q').classList.remove('dark-mode');
            document.getElementById('Économie').classList.remove('dark-mode');
            document.getElementById('Sports').classList.remove('dark-mode');
            document.getElementById('Santé').classList.remove('dark-mode');
            document.getElementById('Divertissements').classList.remove('dark-mode');
            document.getElementById('Politique').classList.remove('dark-mode');
            document.getElementById('Innovations').classList.remove('dark-mode');
            document.getElementById('display_filter_img').classList.remove('dark-mode');
        }

        this.setState({
            darkMode: (!this.state.darkMode)
        });
        localStorage.setItem('DARK_MODE', !this.state.darkMode);
    }

    render() {
        if(this.props.param === 1) {
            return (
                <input onClick={this.handleModeChange} type="checkbox" className="checkedButtonDiv" id="c4" name="cc"/>
            )
        }
        else {
            return (
                <input onClick={this.handleModeChange} type="checkbox" className="checkedButtonDiv" id="c2" name="cc"/>
            );
        }
    }
}

export default DarkModeToggle;