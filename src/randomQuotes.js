function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
}

function generateQuote() {
    const div = document.getElementById('informationSpace');
    const randomNumber = getRandomInt(11);
    if (randomNumber === 0) {
        div.innerText = "Fan de la sélection d'actualité que vous utilisez? Sauvegardez la en favoris le temps de votre navigation."
    }
    else if (randomNumber === 1) {
        div.innerText = "Envie d'une navigation altruiste et responsable? Activez Qwant-cause avec le bouton violet en" +
            "haut a droite de votre écran : les revenus générés par les publicités supplémentaires seront intégralement reversés aux associations de votre choix."
    }
    else if (randomNumber === 2) {
        div.innerText = "Marre de ne pas trouver ce que vous cherchez? Utilisez nos filtres à droites de votre écran ou la sélection par catégorie en haut de celui ci"
    }
    else if (randomNumber === 3) {
        div.innerText = "Vous voulez avoir le maximum d'informations ? nous on pense que c'est le cas, pour cela on vous propose, \"Quantity that you Want\"."
    }
    else if (randomNumber === 4) {
        div.innerText = "Vous avez toujours rêver de porter une cape d'invisibilité, Qwant vous offre la possibilité de surfer sur les vagues du web, tout en restant anonyme, en préservant vos données personnelles."
    }
    else if (randomNumber === 5) {
        div.innerText = "Manque d'inspiration ? Qwant c'est aussi, Qwant Music, Qwant Junior, Qwant School, Qwant Cause, Qwant Maps, Mask by Qwant et plein d'autres produits à l'avenir, restez branché."
    }
    else if (randomNumber === 6) {
        div.innerText = "Vous souhaitez emmener Qwant partout, même dans votre poche ? Pas de problème, \"Qwant mobile\" est fait pour vous ! Profitez de toute la puissance de Qwant à portée de main tout en préservant votre vie privée (Android / Apple)."
    }
    else if (randomNumber === 7) {
        div.innerText = "Fan de musique ? Rejoignez l’aventure avec “Qwant Music”, c’est bien plus que de la musique ! Qwant music est un moteur de recherche intégré à votre navigateur avec lequel vous pourrez retrouver toutes les informations sur vos artistes préférés du moment. Venez vibrer avec nous."
    }
    else if (randomNumber === 8) {
        div.innerText = "Peur de laisser votre enfant seul sur internet ? Ne vous inquiétez pas avec “Qwant Junior” votre enfant aura accès à du contenu adapté et à un panel de service adapté à son âge. Il pourra ainsi se divertir, s’informer, et s'instruire dans de bonnes conditions."
    }
    else if (randomNumber === 9) {
        div.innerText = "Qwant a également mis en place des mesures pour s’assurer qu’il reste responsable de ses promesses.\n" +
            "Il a mis son code source à la disposition des agences de protection des données\n" +
            "tierces afin qu’elles puissent continuellement vérifier que Qwant ne collecte pas de données sur ses utilisateurs."
    }
    else if (randomNumber === 10) {
        div.innerText = "Qwant possède ses propres serveurs dans la banlieue parisienne. Pour une start-up, c’est un investissement énorme de plusieurs millions d’euros, mais ses fondateurs estiment que cela est essentiel pour garantir la sécurité et l’anonymat des utilisateurs."
    }
    else {
        div.innerText = "Qwant a créé un système d’intelligence artificielle appelé Iceberg pour sélectionner et prioriser le contenu. Les algorithmes d’Iceberg prennent en compte une série de critères tels que la qualité technique et éditoriale du texte ou de l’image, des liens vers la page, des commentaires et des mentions sur les réseaux sociaux, le comportement en ligne de l’utilisateur."
    }
}

window.onload = generateQuote;