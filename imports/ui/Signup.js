import React from 'react';
import { Link } from 'react-router';

export default class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: ''
        };
    }
    onSubmit(e) {
        e.preventDefault();
        this.setState({
            error: "There is an error!"
        });
    }
    render() {
        return (
            <div>
                <h3>Already have an account?</h3>

                {this.state.error ? <p>{this.state.error}</p> : undefined}

                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="email" name="email" placeholder="Email" />
                    <input type="password" name="password" placeholder="Password" />
                    <button>Create Account</button>
                </form>

                <Link to="/">Click to Login</Link>
            </div>
        );
    }
}
