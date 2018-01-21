import React from 'react';
import { Link } from 'react-router';

import { Meteor } from 'meteor/meteor';

export default class Login extends React.Component {
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

        Meteor.loginWithPassword({email}, password, (error) => {
            console.log('logincallback', error);
        });

    }
    render() {
        return (
            <div>
                <h3>Short Link</h3>

                {this.state.error ? <p>{this.state.error}</p> : undefined}

                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="email" ref="emailref" name="email" placeholder="Email" />
                    <input type="password" ref="passwordref" name="password" placeholder="Password" />
                    <button>Login</button>
                </form>

                <Link to="/">Click to Login</Link>
            </div>
        );
    }
}
