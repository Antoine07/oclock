import { SET_ERROR } from "../constants/actions";

const stateInit = {
    errors : new Map()
}

const reducer = (state = stateInit, action = {}) => {

    switch (action.type) {

        case SET_ERROR:
            const { error, date } = action;
            const errors = new Map(state.errors);

            errors.set(date, error);

            return {
                ...state,
                errors,
            }

        default:
            return state;
    }
}

export default reducer;