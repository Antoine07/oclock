const {
    GET_AMOUNT_CURRENCY, SET_HISTORICAL
} = require("../constants/actions")

const historical = store => next => action => {
    const { convert } = store.getState();

    const actionReturn = next(action);
    
    if (action.type === GET_AMOUNT_CURRENCY && convert.date !== action.date && convert.amount !== '' ) {
       const { convert : newConvert } = store.getState();
       store.dispatch({ type : SET_HISTORICAL , historical : { ...newConvert } } );
    }

    return actionReturn;
}

export default historical;