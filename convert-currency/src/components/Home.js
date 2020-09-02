import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Grid } from './Grid';
import Button from '../Styles/Button';

const Home = () => {

    return (
        <Container>
            <Grid>
                <h1>Bonjour O'Clock</h1>
                <p>Antoine Lucsko, je vous présente mon travail ci-dessous.</p>
                <p>L'API Fixer est consommé en HTTP (version gratuite). Avec l'API Fixer gratuite on n'a pas une grande granularité dans les requêtes (...). J'utilise cependant deux choses :
                    récupération des symbols et récupération des devises en fonction de la date.
                </p>
                <p>Je me suis concentré sur la technique...Pas sur le design (...), je travaillais en parallèle du test demandé. </p>
                <p>Je vous détails ce que j'ai fait dans cette petite App ci-dessous.</p>
                <p>La partie principale se trouve dans le composant Convert avec des sous-composants Form et CustomFields pour la gestion des conversions.</p>
                <p>Voici une petite démo en live : <Button><a href="http://hicode.ovh">Hicode</a></Button>Vous trouverez mon dépôt Git à l'adresse suivante : <Button><a href="https://github.com/Antoine07/oclock/tree/master/convert-currency">Convert currency</a></Button></p>
            </Grid>
            <Grid>
                <ul>
                    <li><h2>Installation : .env</h2>
                        Le fichier .env à la racine du projet contient la clé de l'API Fixer (version gratuite), attention ce fichier n'est pas versionné. Je récupère sa valeur dans les constantes (Redux) dossier constants.</li>
                    <li>Renommez le fichier .env_dev en .env et mettez la clé de l'API que je vous ai envoyé dans le mail.
                    </li>
                    <li><h2>CSS : Styled components</h2></li>
                    <li>Il y a un dossier Styles à la racine du dossier src dans lequel j'ai placé l'ensemble des styles (CSS-in-JS). Pas de gestion de thème mais, un globalStyle dans le fichier Global.js. Il est importé dans le composant App.js racine. Les composants dans le dossier 
                        Grid permettent de structurer l'affichage.
                    </li>
                    <li><h2>Redux</h2>
                        <ul>
                            <li>J'utilise les dossiers classiques : actions, constants, store, middlewares et reducers</li>
                            <li>Gestion des stores (combineReducer) : <ul>
                                <li> convert : algo pour gérer les conversions des différentes devises</li>
                                <li> rates : charge les symboles à l'initialisation de l'App.</li>
                                <li> historical : log un historique basé sur les dates.</li>
                                <li> loading : permet de gérer les loads dans l'App : symbols et converts</li>
                                <li> error (TODO) : pour la gestion des erreurs</li>
                            </ul>
                            </li>
                            <li>Un middleware : lorsqu'on change la date on log l'historique dans historical, cette partie est clairement à améliorer.</li>
                        </ul>
                    </li>
                    <li><h2>Router : react-router-dom</h2>une utilsation simple. Dans le composant de navigation Navigation (fichier Nav dans components), j'utilise un effet de bord sur la variable 
                    location pour re-initialiser le store du reducer convert (nettoyage du formulaire dans la partie convert du montant dans une devise).
                    </li>
                    <li><h2>Hooks personnalisés</h2> dans le dossier components et dans le dossier Form, il y a un fichier CustomFields dans lequel j'ai créé deux Hooks personnalisés Input et Select.
                    Je ne contrôle pas la saisi des champs dans le reducer convert mais, dans les Hooks personnalisés, c'est un choix spécifique pour cette implémentation. Habituellement je contrôle la 
                    saisie dans le reducer lui-même.
                    </li>
                    <li><h2>propTypes</h2>Pour vérifier le type des props des composants.</li>
                    <li>Rmq : je n'utilise pas TypeScript, mais cela donnerai un peu plus de sécurité au niveau du typage. Je le fais parfois, mais je préfère le JSX et propTypes en général.
                        Par ailleurs, dans Redux la source de vérité pour les données impose une sécurité de structure suffisante.
                    </li>
                </ul>
                <p>Bonne lecture et à bientôt ! </p>
            </Grid>
            <Grid>
                <p> Pour aller directement au convertisseur de devise :
                <Button><Link to="/convert">Convert currency V1 </Link></Button>
                </p>
            </Grid>
        </Container>
    );
}

export default Home;
