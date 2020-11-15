import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Contactbutton extends Component {
    static propTypes = {
        email: PropTypes.string.isRequired,
        formValues: PropTypes.shape({
            name: PropTypes.string.isRequired,
            email: PropTypes.string.isRequired,
            message: PropTypes.string.isRequired,
        }).isRequired,
    };

    constructor(props) {
        super(props);
        this.state = {
            isClicked: false,
        };
        this.logFormDataToConsole = this.logFormDataToConsole.bind(this);
    }

    logFormDataToConsole(event) {
        console.log(this.props.formValues);
    }

    render() {
        const recipient = `mailto:${this.props.email}`;
        const subject = '?subject=General%20Enquiry';
        const body = `&body=${this.props.formValues.message}`;
        return (
            <a
                href={`${recipient}${subject}${body}`}
                onClick={this.logFormDataToConsole}

            >
                Send Message
            </a>
        );
    }
}


export default Contactbutton