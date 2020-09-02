import { INIT_RATES } from "../constants/actions";

const stateInit = {
    symbols: new Map(),
    default: 'EUR'
}

// Permet d'initialiser les symbols (voir Form dans le Select)
const reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case INIT_RATES:
            const ratesApi = action.payload;
            const symbols = new Map(state.symbols);

            for (const rate in ratesApi) 
                symbols.set(rate, ratesApi[rate]);

            return {
                ...state,
                symbols,
            }

        default:
            return state;
    }
}

export default reducer;