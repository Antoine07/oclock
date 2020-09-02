import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import {
    Container,
    Grid
} from './Grid';
import { reset_historical } from '../actions/actions-types';
import Button from '../Styles/Button';

const Details = ({ amount, change, currency }) => {

    return (
        <ul>
            <li>Amount : {amount}</li>
            <li>Change : {change}</li>
            <li>Currency : {currency}</li>
        </ul>
    )
}

Details.propTypes = {
    amount: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    change: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.number,
      ]),
    currency: PropTypes.PropTypes.string.isRequired,
};

const Historical = () => {
    const { historicals, count } = useSelector(state => state.historical);
    const dispatch = useDispatch();

    return (
        <Container>
            <Grid>
                <h2>Bienvenue sur la page de l'historique des conversions</h2>
                {historicals.size > 0 && (
                    <>
                        <h2>Nombre de recherche(s) par date : {count}</h2>
                        <ul>
                            {[...historicals.keys()].map((date, i) => (
                                <React.Fragment key={i}>
                                    <h2> Date : {date} </h2>
                                    <Details {...historicals.get(date)} />
                                </React.Fragment>)
                            )}
                        </ul>
                    </>
                )}
            </Grid>
            {historicals.size > 0 && (
                <Grid>
                    <Button
                        className="btn"
                        onClick={() => dispatch(reset_historical())}
                    >Reset historical</Button>
                </Grid>
            )
            }
        </Container>
    );
}

export default Historical;