import React, { Component } from 'react';

import '../../fonts/index.css';
import './index.css';

export default class Home extends Component {

    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
        };

        document.title = "Agenda";
    }

    handleSubmit = event => {
        
        event.preventDefault();
        
        const { history } = this.props;
        const { 
            email,
            password
        } = this.state;

        if (true) { //validar

            history.push(
                '/calendar',
                {
                    email: email,
                    password: password,
                }
            );
        }

    }

    handleUsername = (event) => {

        this.setState({
            email: event.target.value,
        });
    }

    handlePassword = (event) => {
        
        this.setState({
            password: event.target.value,
        });
    }

    render() {

        return (
            <div className="home">
                <div>
                    <h1>Agenda</h1>
                </div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="email"
                        minLength="3"
                        maxLength="40"
                        placeholder="E-mail"
                        onChange={this.handleUsername}
                        required
                    />
                    <input 
                        type="password"
                        placeholder="Senha"
                        minLength="3"
                        onChange={this.handlePassword}
                        required
                    />
                    <input 
                        type="submit"
                        value="Entrar"
                    />
                </form>
            </div>
        );
    }
}