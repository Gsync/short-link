import React from 'react';
import { Link } from 'react-router';

import { Accounts } from 'meteor/accounts-base';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }
    onSubmit(e) {
        e.preventDefault();
        let email = this.refs.emailref.value.trim();
        let password = this.refs.passwordref.value.trim();
        Accounts.createUser({email, password}, (error) => {
            console.log('signup callback', error);
        });

        // this.setState({
        //     error: "There is an error!"
        // });
    }
    render() {
        return (
            <div>
                <h3>Already have an account?</h3>

                {this.state.error ? <p>{this.state.error}</p> : undefined}

                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="email" ref="emailref" name="email" placeholder="Email" />
                    <input type="password" ref="passwordref" name="password" placeholder="Password" />
                    <button>Create Account</button>
                </form>

                <Link to="/">Click to Login</Link>
            </div>
        );
    }
}
