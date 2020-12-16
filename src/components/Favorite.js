import React from "react";
import delete_favorites from "../img/delete_favorites.png";

class Favorite extends React.Component{

    delete_favorite() {
        localStorage.removeItem('favorite_src');
        localStorage.removeItem('favorite_order');
        localStorage.removeItem('favorite_freshness');
        localStorage.removeItem('favorite_category');
        localStorage.removeItem('favorite_safesearch');
        alert('Vous avez bien supprimé les filtres que vous aviez enregistré!');
    }
    render() {
        return (
            <div id="buttonRightBar">
                <button className="fav bg-transparent text-secondary" id="fav" onClick={this.props.deal_with_favorite}/>
                <button className="fav2 bg-transparent text-secondary" id="fav2" onClick={this.props.apply_favorite}/>
                <button className="delete_fav bg-transparent text-secondary" onClick={() => {
                    if (window.confirm('Vous êtes sur le point de supprimer l\'intégralité de vos filtres favoris, souhaitez vous continuer?'))
                     this.delete_favorite()
                }}>
                    <img id="delete_fav" src={delete_favorites} alt="delete favorite"/>
                </button>
            </div>
        );
    }
}
export default Favorite;