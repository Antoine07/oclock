import {  LOADING_CONVERT, LOADING_RATES} from "../constants/actions";

const stateInit = {
    isLoadingConvert: true,
    isLoadingRates : true
}

// Permet la gestion des différents load dans l'App : au chargement des symbols & convertisseur de devise
const reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case LOADING_CONVERT:

            return {
                ...state,
                isLoadingConvert : action.payload
            }

        case LOADING_RATES:

            return {
                ...state,
                isLoadingRates : action.payload
            }

        default:
            return state;
    }
}

export default reducer;