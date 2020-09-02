import React, { useEffect } from 'react';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getApiFixer, DatesMoment, getDateNow } from '../../actions/actions-types';

// Formulaire 
import { useInput, useSelect } from './CustomFields';
import FormGroup from '../Grid/FormGroup';

//composant et structure
import Message from '../Message';
import { Container, Grid } from '../Grid';

// Styles
import Input from '../../Styles/Input';
import Select from '../../Styles/Select';

const Form = ({ history, location }) => {
    // gestion des champs du formulaire avec les Hooks personnalisés
    const { value: amount, bind: bindInput } = useInput({ initialValue: '' });
    const { value: currency, bind: bindSelect } = useSelect({ initialValue: 'EUR' });
    const { value: precision, bind: bindPrecision } = useSelect({ initialValue: 3 });
    const { value: date, bind: bindDate } = useSelect({ initialValue: getDateNow() });

    const {
        symbols,
        rates,
        change,
        message,
        defaultBase,
        isLoading
    } = useSelector(state => {
        return {
            defaultBase: state.convert.base,
            change: state.convert.change,
            message: state.convert.message,
            symbols: state.rates.symbols,
            rates: [...state.rates.symbols.keys()],
            isLoading: state.loading.isLoadingConvert
        }
    }
    );

    const dispatch = useDispatch();

    useEffect(() => {
        if (amount.trim() !== "" && currency)
            dispatch(getApiFixer({
                amount: amount,
                currency: currency,
                precision: precision,
                date: date
            }));

    }, [dispatch, amount, currency, precision, date]);

    return (
        <Container>
            <Grid>
                {message !== '' && <Message message={<p>{message}</p>} type="error" />}
                <h2>Convert currency </h2>
                <FormGroup
                    label={<span className="Form-currency">Amount :</span>}
                >
                    <Input size="5" type="text" {...bindInput} />
                </FormGroup>
                <FormGroup
                    label={<span className="Form-currency">Precision :</span>}
                >
                    <Select {...bindPrecision} disabled={amount === ''} >
                        {[...Array(10).keys()].map((p, i) => (
                            <option key={i} value={p + 1}>{p + 1}</option>
                        ))}
                    </Select>
                </FormGroup>
                <FormGroup
                    label={<span className="Form-currency">Date :</span>}
                >
                    <Select {...bindDate} disabled={amount === ''} >
                        {[...DatesMoment()].map((p, i) => (
                            <option key={i} value={p}>{p}</option>
                        ))}
                    </Select>
                </FormGroup>
                <FormGroup
                    label={<span className="Form-currency">Currency :</span>}
                >
                    <Select {...bindSelect} disabled={amount === ''}  >
                        {rates.map((rate, i) => (<option key={i} value={rate}>{symbols.get(rate)}</option>)
                        )}
                    </Select>
                </FormGroup>

                {(change && message === '') && (
                    isLoading ? <p>Waiting ...</p> :
                        <Message
                            message={
                                <>
                                    <p>
                                        {`Amount : ${amount} ${defaultBase} to ${change} ${currency}`}

                                    </p>
                                    <p><small>Currency date : {date}</small></p>
                                </>
                            }
                        />
                )
                }
            </Grid>
        </Container>
    );
}

export default Form;