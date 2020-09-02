import {
    RESET_HISTORICAL,
    SET_HISTORICAL
} from "../constants/actions";

const stateInit = {
    historicals: new Map(),
    count: 0
}
// Historique : lorsqu'on change la date pour le calcul de la devise on enregistre le montant et la date
const reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case SET_HISTORICAL:

            const historicals = new Map(state.historicals);
            const { date } = action.historical;
            historicals.set(date, { ...action.historical });

            return {
                ...state,
                historicals,
                count : historicals.size
            }

        case RESET_HISTORICAL:

            return {
                ...state,
                ...stateInit
            }

        default:
            return state;
    }
}

export default reducer;