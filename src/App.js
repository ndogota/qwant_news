import React, {Component} from 'react';
import axios from 'axios';
import liste from "./img/liste.png";
import hide from "./img/hide.png";
import multiple_div from "./img/multiple_div.png";
import './css/styles.css';
import './css/catAndFilter.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import Header from "./components/Header";
import QwantFact from "./components/QwantFact";
import Articles from "./Articles";
import Favorite from "./components/Favorite";
import Pertinence from "./components/Pertinence";
import Category from "./components/Category";
import Sources from "./components/Sources";
import OrderBy from "./components/OrderBy";
import loading from "./img/loading.png"
import Setting from "./components/Setting";
import NotFound from "./components/NotFound";
import delete_favorites from "./img/delete_favorites.png";
import edit from "./img/edit.png"
import PageNotFound from "./components/PageNotFound";


function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateQuote() {
    const div = document.getElementById('informationSpace');
    const randomNumber = getRandomInt(11);
    if (div !== null){
    if (randomNumber === 0) {
        div.innerText = "Fan de la sélection d'actualité que vous utilisez? Sauvegardez la en favoris le temps de votre navigation."
    } else if (randomNumber === 1) {
        div.innerText = "Envie d'une navigation altruiste et responsable? Activez Qwant-cause avec le bouton violet en" +
            "haut a droite de votre écran : les revenus générés par les publicités supplémentaires seront intégralement reversés aux associations de votre choix."
    } else if (randomNumber === 2) {
        div.innerText = "Marre de ne pas trouver ce que vous cherchez? Utilisez nos filtres à droites de votre écran ou la sélection par catégorie en haut de celui ci"
    } else if (randomNumber === 3) {
        div.innerText = "Vous voulez avoir le maximum d'informations ? nous on pense que c'est le cas, pour cela on vous propose, \"Quantity that you Want\"."
    } else if (randomNumber === 4) {
        div.innerText = "Vous avez toujours rêver de porter une cape d'invisibilité, Qwant vous offre la possibilité de surfer sur les vagues du web, tout en restant anonyme, en préservant vos données personnelles."
    } else if (randomNumber === 5) {
        div.innerText = "Manque d'inspiration ? Qwant c'est aussi, Qwant Music, Qwant Junior, Qwant School, Qwant Cause, Qwant Maps, Mask by Qwant et plein d'autres produits à l'avenir, restez branché."
    } else if (randomNumber === 6) {
        div.innerText = "Vous souhaitez emmener Qwant partout, même dans votre poche ? Pas de problème, \"Qwant mobile\" est fait pour vous ! Profitez de toute la puissance de Qwant à portée de main tout en préservant votre vie privée (Android / Apple)."
    } else if (randomNumber === 7) {
        div.innerText = "Fan de musique ? Rejoignez l’aventure avec “Qwant Music”, c’est bien plus que de la musique ! Qwant music est un moteur de recherche intégré à votre navigateur avec lequel vous pourrez retrouver toutes les informations sur vos artistes préférés du moment. Venez vibrer avec nous."
    } else if (randomNumber === 8) {
        div.innerText = "Peur de laisser votre enfant seul sur internet ? Ne vous inquiétez pas avec “Qwant Junior” votre enfant aura accès à du contenu adapté et à un panel de service adapté à son âge. Il pourra ainsi se divertir, s’informer, et s'instruire dans de bonnes conditions."
    } else if (randomNumber === 9) {
        div.innerText = "Qwant a également mis en place des mesures pour s’assurer qu’il reste responsable de ses promesses.\n" +
            "Il a mis son code source à la disposition des agences de protection des données\n" +
            "tierces afin qu’elles puissent continuellement vérifier que Qwant ne collecte pas de données sur ses utilisateurs."
    } else if (randomNumber === 10) {
        div.innerText = "Qwant possède ses propres serveurs dans la banlieue parisienne. Pour une start-up, c’est un investissement énorme de plusieurs millions d’euros, mais ses fondateurs estiment que cela est essentiel pour garantir la sécurité et l’anonymat des utilisateurs."
    } else {
        div.innerText = "Qwant a créé un système d’intelligence artificielle appelé Iceberg pour sélectionner et prioriser le contenu. Les algorithmes d’Iceberg prennent en compte une série de critères tels que la qualité technique et éditoriale du texte ou de l’image, des liens vers la page, des commentaires et des mentions sur les réseaux sociaux, le comportement en ligne de l’utilisateur."
    }}
}

class App extends Component {
    search_bar = React.createRef();
    category = React.createRef();
    src = React.createRef();
    order = React.createRef();
    freshness = React.createRef();
    safesearch = React.createRef();
    src_test = '';
    display = React.createRef();
    Articles;

    constructor(props) {
        super(props);
        this.state = {
            items: [],
            succes: 0,
            sources: [
                {id: "hour", value: "Afficher les actualités de l'heure"},
                {id: "day", value: "Afficher les actualités du Jour"},
                {id: "week", value: "Afficher les actualités de la semaine"},
                {id: "month", value: "Afficher les actualités du mois"},
            ],
            search: '',
            ord: '',
            safe: '',
            fresh: '',
            cmt: 30,
            off: 0,

        };
    };


    hideSearchBar() {
        const x = document.getElementById("searchBar");
        if (x.style.visibility === 'hidden') {
            setTimeout(function () {
                x.style.visibility = 'visible';
            }, 400)
        } else {
            x.style.visibility = 'hidden';
        }
    }

    componentDidMount() {
        var i = this.getUrlVars();
        var url_content = "news";
        if (i['q']) {
            var url_content = decodeURIComponent((i['q'] + '').replace(/\+/g, '%20'));
            i['q'] = url_content;
            if (document.getElementById('q') !== null)
                this.search_bar.current.value = url_content;
        } else {
            if (document.getElementById('q') !== null)
                document.getElementById('q').value = url_content;
        }
        if (i['cat'] != null) {
            var cat_to_url = ' ' + i['cat'];
            i['cat'] = decodeURIComponent(i['cat']);
            if (document.getElementById('cat') !== null)
                document.getElementById('cat').value = i['cat'];
        } else {
            var cat_to_url = '';
        }
        if (i['src'] != null) {
            i['src'] = decodeURIComponent(i['src']);
            if (document.getElementById('src') !== null)
                document.getElementById('src').value = i['src'];
            this.src_test = i['src'];
        }
        if (i['order'] != null) {
            i['order'] = decodeURIComponent(i['order']);
            if (document.getElementById('order') !== null)
                document.getElementById('order').value = i['order'];
        }
        if (i['freshness'] != null) {
            i['freshness'] = decodeURIComponent(i['freshness']);
            if (document.getElementById('freshness') !== null)
                document.getElementById('freshness').value = i['freshness'];
        }
        if (i['safesearch'] != null) {
            i['safesearch'] = decodeURIComponent(i['safesearch']);
            if (document.getElementById('safesearch') !== null)
                document.getElementById('safesearch').value = i['safesearch'];
        }
        if (i['display'] === "off") {
            if (document.getElementById('display') !== null)
                document.getElementById("display").value = "off";
            if (document.getElementById('mode_selector') !== null)
                document.getElementById('mode_selector').src = multiple_div;
            if (document.getElementById('mode_selector') !== null)
                document.getElementById('mode_selector').className = "off";
        } else {
            if (document.getElementById('display') !== null)
                document.getElementById("display").value = "on";
        }
        this.setState({search: url_content + cat_to_url});
        this.setState({ord: i['order']});
        this.setState({fresh: i['freshness']});
        this.setState({safe: i['safesearch']});
        this.setState({cmt: 30});
        this.setState({off: 0});

        this.get_data(url_content + cat_to_url, i['order'], i['freshness'], i['safesearch'], 30, 0);
        window.onscroll = this.handleBottom;
        this.deal_with_color(i);
        generateQuote();
        this.get_display_panel();
    }

    apply_fav = (e) => {
        var i = 0;
        var rank = 0;
        var array = JSON.parse(localStorage.getItem("favorite"));
        for (rank; rank < array.length; rank++){
            if (array[rank].name == e.target.value){
                i = rank;
                break;
            }
        }
        var q = "/?q=" + document.getElementById("q").value;
        var src = array[i].src != "" ? "&src=" + array[i].src : "";
        var order = array[i].order != "" ? "&order=" + array[i].order : "";
        var freshness = array[i].freshness != "" ? "&freshness=" + array[i].freshness: "";
        var cat = array[i].cat != "" ? "&cat=" + array[i].cat : "";
        var safesearch = array[i].safesearch != "" ? "&safesearch=" + array[i].safesearch : "";
        var display = array[i].display != "" ? "&display=" + array[i].display : "";
        var url = q + cat + src + order + freshness + safesearch + display;
        document.location.href = (encodeURI(url));
    };

    modify_fav = (e) => {
        this.trash_fav(e);
        var name = e.currentTarget.value;
        var src = document.getElementById('src').value;
        var order = document.getElementById('order').value;
        var freshness = document.getElementById('freshness').value;
        var cat = document.getElementById('cat').value;
        var safesearch = document.getElementById('safesearch').value;
        var display = document.getElementById('display').value;
        var new_obj = {"name": name, "src": src, "order": order, "freshness": freshness, "cat": cat, "safesearch": safesearch, "display": display};
        if (localStorage.getItem("favorite") != null){
            var array = JSON.parse(localStorage.getItem("favorite"));
            array.push(new_obj);
            localStorage.setItem("favorite", JSON.stringify(array));
            window.location.reload();
        }
        else{
            var array = [new_obj];
            localStorage.setItem("favorite", JSON.stringify(array));
            window.location.reload();
        }
    };

    trash_fav = (e) => {
        var i = 0;
        var rank = 0;
        var array = JSON.parse(localStorage.getItem("favorite"));
        for (i; i < array.length; i++){
            if (array[i].name == e.currentTarget.value){
                rank = i;
                break;
            }
        }
        array.splice(rank, 1);
        localStorage.setItem("favorite", JSON.stringify(array));
        window.location.reload();
    };

    new_fav() {
        var name = document.getElementById("new_fav").value;
        var src = document.getElementById('src').value;
        var order = document.getElementById('order').value;
        var freshness = document.getElementById('freshness').value;
        var cat = document.getElementById('cat').value;
        var safesearch = document.getElementById('safesearch').value;
        var display = document.getElementById('display').value;
        var new_obj = {"name": name, "src": src, "order": order, "freshness": freshness, "cat": cat, "safesearch": safesearch, "display": display};
        if (localStorage.getItem("favorite") != null){
            var array = JSON.parse(localStorage.getItem("favorite"));
            array.push(new_obj);
            localStorage.setItem("favorite", JSON.stringify(array));
            window.location.reload();
        }
        else{
            var array = [new_obj];
            localStorage.setItem("favorite", JSON.stringify(array));
            window.location.reload();
        }

    }

    import_favorite () {
        if (localStorage.getItem("favorite") != null) {
            const array1 = JSON.parse(localStorage.getItem("favorite"));
            const result_div = array1.map(array =>
                <li><button value={array.name} class="trash_fav" onClick={this.trash_fav}><img id="delete_fav" value={array.name} src={delete_favorites} alt="delete favorite"/></button><button value={array.name} className="modify_fav" onClick={this.modify_fav} ><img id="edit" value={array.name} src={edit} alt="edit favorite"/></button>
                    <button value={array.name} className="fav_choice" onClick={this.apply_fav} >{array.name}</button></li>
            );
            return(result_div);
        }
    }

    async get_data(search, order, fresh, safe, cmt, off) {
        const url = "https://cors-anywhere.herokuapp.com/https://api.qwant.com/partners/v2/qwant/news";
        await axios.get(url, {
            params: {
                q: search,
                lang: 'fr',
                count: cmt,
                offset: off,
                order: order,
                freshness: fresh,
                safesearch: safe,
            },
            headers: {
                'Client-ID': 'CodeCamp',
                'Token': '5dkCdp67D4a7zcOrSZrSqIqPmYZNf8Re',
            }
        }).then(json => {
            this.setState({items: json.data.result.items});
            this.setState({succes: 1});
        }).catch(error => {
                console.log(error);
                this.setState({succes: 0});
                var test = document.getElementById("wrapper");
                if (test !== null){
                    test.style.display = 'none';
                    var page404 = document.createElement("DIV")
                    page404.style.textAlign = 'center';
                    page404.textContent = ("PAGE NOT FOUND WE ARE SO SORRY... (T T)")
                    document.getElementById("global_render").appendChild(page404);
                }
            }
        );
    }
    handleBottom = () => {
        let head = document.getElementById("header_div");
        if (window.pageYOffset < head.offsetHeight) {
            let elt = document.getElementById("hidden_search_bar");
            if (elt.style.display === 'block') {
                elt.style.display = 'none';
            }
        }
        var d = document.documentElement;
        var offset = d.scrollTop + window.innerHeight;
        var height = d.offsetHeight;
        if (height === offset) {
            this.setState({cmt: this.state.cmt + 20});
            this.setState({off: this.state.off + 20});
            this.get_data(this.state.search, this.state.ord, this.state.fresh, this.state.safe, this.state.cmt, this.state.off)
            document.getElementById("qwant_logo").style.display = 'block';
        }
    };
    deal_with_color(i) {
        this.order_color(i['order']);
        this.freshness_color(i['freshness']);
        this.category_color(i['cat']);
        //this.favorite_color(i);
    }
    category_color(category) {
        var cat = decodeURIComponent(category);
        if (cat != null && cat) {
            switch (cat) {
                case 'Économie':
                    document.getElementById(cat).classList.add("btn-info", "text-white", "rounded-bottom");
                    break;
                case 'Politique':
                    document.getElementById(cat).classList.add("btn-primary", "text-white", "rounded-bottom");
                    break;
                case 'Sports':
                    document.getElementById(cat).classList.add("btn-dark", "text-white", "rounded-bottom");
                    break;
                case 'Innovations':
                    document.getElementById(cat).classList.add("btn-success", "text-white", "rounded-bottom");
                    break;
                case 'Santé':
                    document.getElementById(cat).classList.add("btn-warning", "text-white", "rounded-bottom");
                    break;
                case 'Divertissements':
                    document.getElementById(cat).classList.add("btn-danger", "text-white", "rounded-bottom");
                    break;
            }
        }
    }

    favorite_color(i) {
        var src = localStorage.getItem('favorite_src');
        var order = localStorage.getItem('favorite_order');
        var freshness = localStorage.getItem('favorite_freshness');
        var cat = localStorage.getItem('favorite_category');
        var safesearch = localStorage.getItem('favorite_safesearch');
        if (src == i['src'] && order == i['order'] && freshness == i['freshness'] && cat == i['cat'] && safesearch == i['safesearch'])
            document.getElementById('fav2').classList.add("fav2_active");
    }

    order_color(order) {
        if (order != null && order) {
            document.getElementById(order).classList.add("btn-dark", "text-white");
        }
    }

    freshness_color(freshness) {
        if (freshness != null && freshness) {
            document.getElementById(freshness).classList.add("btn-dark", "text-white");
        }
    }

    get_display() {
        var display = document.getElementById('mode_selector').className;
        return ("&display=" + display);
    }

    getUrlVars() {
        var vars = {};
        var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function (m, key, value) {
            vars[key] = value;
        });
        return vars;
    }

    apply_favorite = () => {
        var q = document.getElementById('q').value;
        var src = localStorage.getItem('favorite_src');
        var order = localStorage.getItem('favorite_order');
        var freshness = localStorage.getItem('favorite_freshness');
        var cat = localStorage.getItem('favorite_category');
        var safesearch = localStorage.getItem('favorite_safesearch');
        let display = this.get_display();
        var url = '/?q=' + encodeURI(q) + '&cat=' + cat + '&src=' + src + '&order=' + order + '&freshness=' + freshness + '&safesearch=' + safesearch + display;
        if (src == null)
            alert("Pas de favorie enregistré (T_T)");
        else
            document.location.href = (url);
    };

    deal_with_favorite() {
        localStorage.setItem('favorite_src', document.getElementById('src').value);
        localStorage.setItem('favorite_order', document.getElementById('order').value);
        localStorage.setItem('favorite_freshness', document.getElementById('freshness').value);
        localStorage.setItem('favorite_category', document.getElementById('cat').value);
        localStorage.setItem('favorite_safesearch', document.getElementById('safesearch').value);
    }

    hide_left_panel(e) {
        const x = document.getElementById("informationDiv");
        if (x.style.display === 'none') {
            x.style.display = 'block';
            localStorage.setItem('qwant_fact', "false");
        } else {
            x.style.display = 'none';
            localStorage.setItem('qwant_fact', "false");
        }
    }

    hide_right_panel() {
        const elt = document.getElementById("rightPanel");
        if (elt.style.display === 'none') {
            elt.style.display = 'block';
            localStorage.setItem("display_filter_img", "false");
        } else {
            elt.style.display = 'none';
            localStorage.setItem("display_filter_img", "false");
        }
    }

    get_display_panel = () => {
        if (localStorage.getItem("qwant_fact") === "false")
            this.hide_left_panel();
        if (localStorage.getItem("display_filter_img") === "false")
            this.hide_right_panel();
    };

    display_filter(e) {
        e.preventDefault();
        var divAricle = document.getElementById("divArticles");
        if ((e.target.id) === "display_filter_img" || (e.target.id) === "display_filter") {
            var elt = document.getElementById("rightPanel");
            var cle = "display_filter_img";
        } else {
            var elt = document.getElementById("informationDiv");
            var cle = "qwant_fact";
        }
        if (elt.style.display === 'block') {
            elt.style.display = 'none';
            localStorage.setItem(cle, "false");
            e.stopPropagation();
        } else {
            elt.style.display = 'block';
            localStorage.setItem(cle, "true");
            e.stopPropagation();
        }
    }

    get_parameter_to_url(the_param) {
        if (document.getElementById(the_param)) {
            let test = document.getElementById(the_param).value;
            if (test == 'undefined' || (test == "" && the_param != "q"))
                return ("");
            else if (the_param == 'q')
                return ("/?" + "q" + "=" + test);
            else
                return ("&" + the_param + "=" + test);
        }
    }

    is_a_src(src_to_test) {
        var str = this.src.current.value;
        var src_array = str.split(",");
        for (var i = 0; i < src_array.length; i++) {
            if (src_to_test === src_array[i])
                return 1;
        }
        return 0;
    }

    add_to_src(src_to_add) {
        var str = this.src.current.value;
        var src_array = str.split(",");
        src_array.push(src_to_add);
        this.src.current.value = src_array.toString();
    }

    remove_from_src(src_to_remove) {
        var str = this.src.current.value;
        var src_array = str.split(",");
        var index = src_array.indexOf(src_to_remove);
        if (index > -1)
            src_array.splice(index, 1);
        this.src.current.value = src_array.toString();
    }

    set_value(param, change) {
        switch (param) {
            case "order":
                this.order.current.value = change;
                break;
            case "freshness":
                this.freshness.current.value = change;
                break;
            case "cat":
                this.category.current.value = change;
                break;
            case "safesearch":
                this.safesearch.current.value = change;
                break;
            case "display":
                this.display.current.value = change;
                break;
            case "q":
                this.search_bar.current.value = change;
                break;
        }
    }

    redirect_url = (e) => {
        var param_list = [
            "q",
            "cat",
            "src",
            "order",
            "freshness",
            "safesearch",
            "display"
        ];
        var url = "";
        param_list.map(param_index => {
                if (param_index == e.target.value)
                    if (param_index == "src") {
                        if (this.is_a_src(e.target.id)) {
                            this.remove_from_src(e.target.id);
                        } else {
                            this.add_to_src(e.target.id);
                        }
                    } else if (param_index == "display") {
                        this.set_value(e.target.value, this.display.current.value == "on" ? "off" : "on");
                    } else if (document.getElementById(e.target.value)) {
                        if (document.getElementById(e.target.value).value == e.target.id)
                            this.set_value(e.target.value, "");
                        else
                            this.set_value(e.target.value, e.target.id);
                    }
                if (this.get_parameter_to_url(param_index) != undefined)
                    url = url + this.get_parameter_to_url(param_index);
            }
        );
        document.location.href = (encodeURI(url));
    };
    display_search_bar = (e) => {
        if (e.target.name === "q_search")
            e.preventDefault();
        let elt = document.getElementById("hidden_search_bar");
        let head = document.getElementById("header_div");
        if (window.pageYOffset > head.offsetHeight) {
            if (elt.style.display === 'block') {
                elt.style.display = 'none';
                e.stopPropagation();
            } else {
                elt.style.display = 'block';
                e.stopPropagation();
            }
        }
    };

    render() {
        var i = this.getUrlVars();
        return (
            <div className="App" id="global_render">
                <div id="wrapper" className="toggled">
                    <Setting redirect_url={this.redirect_url}/>
                    <Header search_bar={this.search_bar}
                            category={this.category}
                            src={this.src}
                            order={this.order}
                            freshness={this.freshness}
                            safesearch={this.safesearch}
                            display={this.display}
                    />
                    <Category display_filter={this.display_filter}
                              redirect_url={this.redirect_url}
                              display_search_bar={this.display_search_bar}
                    />
                    <div id="mainDiv" className="container-fluid">
                        <div className="d-flex flex-row">
                            <QwantFact hide_left_panel={this.hide_left_panel}
                                       generateQuote={generateQuote}
                            />
                            {/* ARTIIIIIIIIIIIIIICCCCCCCCCCCCCCLLLLLLLLLLLLLLLLLLLLEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE */}
                            <div className="container-fluid" id="divArticles">
                                <Articles items={this.state.items} src={this.src_test} display_mode={this.display}/>
                                <img id={"qwant_logo"} className="logo_qwant text-center" src={loading}
                                     alt={"please wait we get your data"}/>
                            </div>
                            {/* RIGGGHHHTTTTTTTTTTTTTTTTTTTTTTT PAAAAAAAAAANNNNNNNNNNEEEEEEEEEEEEEELLLLLLLLL */}
                            <div id="rightPanel" className="TitleRightBar colFilter">
                                <div>
                                    <div className="d-flex flex-column divRightPanel">
                                        <div className="rightPannelButton">
                                            <button className="to_display bg-transparent text-secondary"
                                                    onClick={this.redirect_url} value="display">
                                                <img
                                                    id="mode_selector" className="on" src={liste}
                                                    alt="mode_to_display_content" value={"display"}/> Changer l'affichage
                                            </button>
                                            <button id="close_right_pannel"
                                                    className="hide_right bg-transparent text-secondary"
                                                    onClick={this.hide_right_panel}><img
                                                id="hide_right" className="img_hide_right" src={hide}
                                                alt="hiding_right_pannel"/>
                                            </button>
                                        </div>
                                        <div id="securite">
                                            <div>
                                                <input type="text" id="new_fav" placeholder="Nom des favoris"/><button className="fav" id="fav" onClick={this.new_fav}/>
                                            </div>
                                            <ul id='ul1fav'>
                                                <li id='myfavli'>My favorites ▼
                                                    <ul className='ul2fav'>
                                                        {this.import_favorite()}
                                                    </ul>
                                                </li>
                                            </ul>

                                        </div>
                                    </div>
                                    <Pertinence redirect_url={this.redirect_url}/>
                                    <OrderBy sources={this.state.sources}
                                             redirect_url={this.redirect_url}
                                    />
                                </div>
                                <Sources links={this.state.items}
                                         redirect_url={this.redirect_url}
                                         src_choosen={this.src}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

}

export default App;