import React, { useEffect } from 'react';

import {
    NavLink
} from "react-router-dom";

import { withRouter } from "react-router";

import { useDispatch, useSelector } from 'react-redux';
import { clean_convert } from '../actions/actions-types';

import Nav from '../Styles/Nav';

const Navigation = ({ location }) => {

    const { count: countHistoricals } = useSelector(state => state.historical);
    const dispatch = useDispatch();

    // si on change de route on réinitialise le store convert
    useEffect(() => {
        dispatch(clean_convert());
    }, [location]);

    return (
        <Nav role="navigation" >
            <ul>
                <li>
                    <NavLink
                        className="nav-link"
                        exact activeClassName="active"
                        to="/"
                    >HOME</NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-link"
                        exact activeClassName="active"
                        to="/convert"
                    >Convert</NavLink>
                </li>
                <li>
                    <NavLink
                        className="nav-link"
                        exact activeClassName="active"
                        to="/historical"
                    >historical <span count={countHistoricals} >number(s) date(s) {countHistoricals}</span>
                    </NavLink>
                </li>
            </ul>
        </Nav>
    );
}

export default withRouter(Navigation);