import {
    SET_CURRENCY,
    INIT_RATES,
    SET_AMOUNT,
    GET_AMOUNT_CURRENCY,
    LOADING_CONVERT,
    LOADING_RATES,
    API_KEY_FIXER,
    DEFAULT_DATE,
    FORMAT_DATE,
    DATE_DEFAULT,
    RESET_HISTORICAL,
    SET_ERROR,
    CLEAN_CONVERT_ROUTE_CHANGE
} from '../constants/actions';

import axios from 'axios';
import moment from 'moment';

export const set_currency = payload => {
    return {
        type: SET_CURRENCY, payload
    };
}

export const set_amount = payload => {
    return {
        type: SET_AMOUNT, payload
    };
}

export const initRates = payload => {
    return {
        type: INIT_RATES, payload
    };
}

export const set_isloagingRates = payload => {
    return { type: LOADING_RATES, payload }
};

export const set_isloagingConvert = payload => {
    return { type: LOADING_CONVERT, payload }
};

export const reset_historical = () => {
    return { type: RESET_HISTORICAL }
};

export const set_error =  payload => {
    return {
        type : SET_ERROR, payload
    }
}

export const clean_convert =  () => {
    return {
        type : CLEAN_CONVERT_ROUTE_CHANGE
    }
}

export const getApiFixer = (payload, historical = DEFAULT_DATE) => {

    return dispatch => {
         ( async () => {
            try {
                const headers = {
                    'Content-Type': 'application/json'
                };

                if (payload.date) historical = payload.date;

                dispatch(set_isloagingConvert(true));

                const { data } = await axios.get(`http://data.fixer.io/api/${historical}?access_key=${API_KEY_FIXER}`, headers);

                const { rates, success } = data;

                if(success === false ) throw new Error("Axios ")

                // Cette partie est facultative car le contrôle des champs
                dispatch(set_amount({ value: payload.amount, name: "amount" }));
                dispatch(set_currency({ value: payload.currency, name: "currency" }));
                dispatch({
                    type: GET_AMOUNT_CURRENCY,
                    base: rates[payload.currency],
                    precision: payload.precision,
                    date: historical,
                });

                dispatch(set_isloagingConvert(false));

            } catch (err) {
                console.error("Axios getApiFixer :", err);
            } finally {
                dispatch(set_error({error : "API Fixer getApiFixer", date : getDateNow() }));
            }
        })();

    };
}

// Initialisation des rates l'API est payante pour le select
export const getSymbolsApiFixer = (historical = DEFAULT_DATE) => {
    return dispatch => {

        const getAxiosApi = async () => {
            try {

                const headers = {
                    'Content-Type': 'application/json'
                };

                dispatch(set_isloagingRates(true));

                const { data } = await axios.get(`http://data.fixer.io/api/symbols?access_key=${API_KEY_FIXER}`, headers);
                const { symbols } = data;
                dispatch(initRates(symbols));
                dispatch({ type: DATE_DEFAULT, date: getDateNow() });

                dispatch(set_isloagingRates(false));

            } catch (err) {
                console.error("Axios getSymbolsApiFixer :", err);
            }finally{
                dispatch(set_error({error : "API Fixer getSymbolsApiFixer", date : getDateNow() }));
            }
        }

        getAxiosApi();
    };
}

/*
* UTILS
*/

export const DatesMoment = (s = "2010-01-01", e = null) => {
    const start = moment(s);
    const end = moment();
    const dates = [];

    for (let current = start; current <= end; current.add(1, "y")) {
        dates.push(current.format(FORMAT_DATE));
    }

    dates.push(getDateNow());

    return dates;
}

export const getDateNow = () => {

    return moment().format(FORMAT_DATE)
}

/*
service payant plus intéressant pour effectuer les conversions

https://data.fixer.io/api/convert

    ? access_key = YOUR_ACCESS_KEY
    & from = USD
    & to = EUR
    & amount = 25

*/