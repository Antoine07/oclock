import { combineReducers } from 'redux';
import convert from './convert';
import rates from './rates';
import loading from './loading';
import historical from './historical';

import error from './error';

export default combineReducers({
    convert,
    rates,
    loading,
    historical,
    error
});