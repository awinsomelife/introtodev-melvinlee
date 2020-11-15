import React, { Component } from 'react';
import Field from './Field';
import Contactbutton from './Contactbutton';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            email: '',
            message: '',
        };

        this.updateField = this.updateField.bind(this);
    }

    updateField(field, value) {
        this.setState({ [field]: value });
    }

    render() {
        return (
            <div className="contactform">
                <h1> Send Us A Message!</h1>
                <div className="contactfield">

                    <Field
                        label="Name"
                        onChange={(event) => this.updateField('name', event.target.value)}
                        value={this.state.name}
                    />

                    <Field
                        label="Email"
                        onChange={(event) => this.updateField('email', event.target.value)}
                        value={this.state.email}
                    />

                    <Field
                        label="Message"
                        onChange={(event) => this.updateField('message', event.target.value)}
                        textarea={true}
                        value={this.state.message}
                    />

                    <Contactbutton
                        email="knottycoffee@gmail.com"
                        formValues={this.state}
                    />
                </div>
            </div >
        );
    }
}

export default Form;