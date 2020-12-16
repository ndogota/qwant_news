import React from "react";


class NotFound extends React.Component{


    render() {
        return (
            <div id="page_not_found">
                <h2>Désolé mais nous n'avons pas pu trouver la page que vous chercher</h2>
                <h3>rendez vous sur la page<a href="https://www.qwant.com/">Qwant</a> pour avoir plus d'information</h3>
            </div>
        );
    }
}
export default NotFound;