import { applyMiddleware, createStore } from 'redux';

// permet la gestion de l'async dans Redux
import thunkMiddleware from 'redux-thunk';

// middleware pour gérer l'historique lorsqu'on change la date de la devise
import historicalMiddleware from '../middlewares/historical';

// les reducers (parties algo & gestion du store global)
import rootReducer from '../reducers';

const  configureStore = (preloadedState = {}) => {
    // récupération des middlewares : pour l'historique et thunk pour la gestion des actions async avec Redux
    const middlewares = [historicalMiddleware, thunkMiddleware];

    // On passe les middlewares à la fonction de redux pour les "combiner"
    const middlewareEnhancer = applyMiddleware(...middlewares);

    const store = createStore(rootReducer, preloadedState, middlewareEnhancer);

    return store;
}

export default configureStore;