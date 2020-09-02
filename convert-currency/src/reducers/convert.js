import {
    SET_CURRENCY,
    SET_AMOUNT,
    GET_AMOUNT_CURRENCY,
    DATE_DEFAULT,
    CLEAN_CONVERT_ROUTE_CHANGE
} from "../constants/actions";

const stateInit = {
    amount: '',
    currency: '',
    change: '',
    base: 'EUR',
    message: '',
    date: ''
}

// Gestion des conversion des devises
const reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case DATE_DEFAULT:
            return {
                ...state,
                date: action.date
            }
        // controle des champs de formulaire
        case SET_CURRENCY:
        case SET_AMOUNT:
            const { name, value } = action.payload;

            return {
                ...state,
                [name]: value,
                message: ''
            }
        // Optention de la devise convertie
        case GET_AMOUNT_CURRENCY: {
            const { amount, currency } = state;
            const { base: baseNumDate, precision, date } = action;

            if (
                (amount.trim() === '' || isNaN(amount)) ||
                (currency.trim() === '' || isNaN(baseNumDate))
            ) {

                return {
                    ...state,
                    message: `Vérifiez les données saisies, un problème est survenu.`,
                    amount: ''
                }
            }

            const powerPrecision = 10 ** Number(precision);

            const change = Math.floor(
                (Number(state.amount) * Number(baseNumDate)
                ) * powerPrecision) / powerPrecision;

            return {
                ...state,
                change,
                message: '',
                date,
                currency
            }
        }

        // Si on change de route on clean le store du reducer
        case CLEAN_CONVERT_ROUTE_CHANGE:

            return {
                ...state,
                ...stateInit
            }

        default:
            return state;
    }
}

export default reducer;