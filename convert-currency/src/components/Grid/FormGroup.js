import React from 'react';
import PropTypes from 'prop-types';

const FormGroup = ({ children, label }) => {

    return (
        <div className="form-group">
            <label htmlFor="exampleInputEmail1">{label}</label>
            {children}
        </div>

    );
}

FormGroup.propTypes = {
    label: PropTypes.element,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ]).isRequired
};

export default FormGroup;