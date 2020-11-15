//Dependencies
import React from 'react';
import propTypes from 'prop-types';

//Stateless Component / Functional Component
const Field = (props) => (
    <div className="contactfield">
        <label>{props.label}</label>
        <input
            onChange={props.onChange}
            type={props.textarea ? 'textarea' : 'text'}
            value={props.value}
        />
    </div>
);

Field.propTypes = {
    label: propTypes.string.isRequired,
    onChange: propTypes.func.isRequired,
    textarea: propTypes.bool.isRequired,
    value: propTypes.string.isRequired,
};

Field.defaultProps = {
    textarea: false,
};

export default Field;